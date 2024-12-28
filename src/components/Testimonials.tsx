import { MutableRefObject, useContext, useRef, useState } from "react";
import Box from "./ui/Box";
import useHeightResize from "@/hooks/useHeightResize";
// import { TbBinaryTree } from "react-icons/tb";
// import { FaCode } from "react-icons/fa6";
// import { LuBrainCircuit } from "react-icons/lu";
// import { AiOutlineCluster } from "react-icons/ai";
// import { MdOutlineSentimentSatisfied } from "react-icons/md";
// import Radio, { RadioDataTypes } from "./ui/Radio";
import {
  EXTRA_HEIGHT,
  getConditionalSmoothTransition,
  getHoverStyles,
  maxWidth,
  redirectToNewPage,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
} from "@/shared";
import { UserPrefContext } from "@/context/UserPrefContext";
import useHighlightSection from "@/hooks/useHighlightSection";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

interface TestimonialListInterface {
  name: string;
  detail: string;
  img: string;
  testimonial: string;
  ref: MutableRefObject<HTMLDivElement | null>;
  height: number;
  linkedIn?: string;
}

const Testimonials = () => {
  const { selectedTheme, disableTransitions, disableAnimations } =
    useContext(UserPrefContext);
  const { setSelectedSection } = useContext(UserPrefContext);

  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  useHighlightSection({
    ref: testimonialsRef,
    setSection: setSelectedSection,
    section: "Testimonials",
  });

  const mdContainerRef = useRef<HTMLDivElement | null>(null);
  const [mdContainerHeight, setMdContainerHeight] = useState(0);
  useHeightResize({ ref: mdContainerRef, setHeight: setMdContainerHeight });

  const nsContainerRef = useRef<HTMLDivElement | null>(null);
  const [nsContainerHeight, setNsContainerHeight] = useState(0);
  useHeightResize({ ref: nsContainerRef, setHeight: setNsContainerHeight });

  const testimonialList: TestimonialListInterface[] = [
    {
      name: "Miguel Dailisan",
      img: "/assets/testimonials/testimonials-miguel.jpg",
      detail: "Worked together on FilPass V2.0",
      testimonial:
        "Ernest is an excellent colleague. Working with him during our time at Edufied alleviated a lot of the pressure off me as he is not only a quick learner, he is also very easy to work with. Watching him, I can also say that he is extremely adaptable, being able to adjust and work on several projects at a time while still giving more than what is being asked. He has proven himself to be a truly skillful developer and a great coworker.",
      ref: mdContainerRef,
      height: mdContainerHeight,
      linkedIn: "https://www.linkedin.com/in/miguel-dailisan-1157b2231/",
    },
    {
      name: "Neil Sagun",
      img: "/assets/testimonials/testimonials-neil.jpg",
      detail: "Worked together on thesis and Padayon;",
      testimonial:
        "When I knew I was working with Ernest on our thesis, I realized we could make it work. Being his partner and groupmate in so many projects, I had seen firsthand how hardworking he is based on his work ethic. He was able to successfully implement my designs and our ideas for Padayon; despite being new to React. Now, we were able to pull off our thesis despite the fact that we were new to machine learning and natural language processing. It really goes to show how easily he is able to adapt to unfamiliar technologies—and it is all because of how hardworking and passionate he is. He is always persistent in delivering results, and whenever problems come his way, he never fails to solve them or think up a clever way around them. Never once have I regretted working with him, ever.",
      ref: nsContainerRef,
      height: nsContainerHeight,
    },
  ];
  const isTablet2 = useMediaQuery("(max-width: 880px)");
  const IsSmallPhone = useMediaQuery("(max-width: 420px)");

  const Wrapper = disableAnimations ? "div" : motion.div;

  const renderTestimonialBox = (
    testimonialInfo: TestimonialListInterface,
    index: number
  ) => {
    const { name, img, testimonial, ref, height, detail, linkedIn } =
      testimonialInfo;

    return (
      <Wrapper
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
        variants={{
          hidden: {
            opacity: 0,
            transform: `translate3d(${index % 2 !== 0 ? "5%" : "-5%"}, 0, 0)`,
          },
          visible: { opacity: 1, transform: "translate3d(0, 0, 0)" },
        }}
        className={`${isTablet2 ? "w-full" : "w-1/2"}`}
      >
        <Box
          key={name}
          title={
            <div className="flex gap-4 items-center group">
              <img
                src={img}
                alt=""
                width={50}
                height={50}
                className={`rounded-full border ${
                  selectedTheme === "Dark" ? "border-black" : "border-white"
                } group-hover:border-purple ${getConditionalSmoothTransition(
                  disableTransitions
                )}`}
              />
              <div>
                <h4>{name}</h4>
                <p className="text-sm">{detail}</p>
              </div>
            </div>
          }
          isFoldable={true}
          childrenHeight={height - EXTRA_HEIGHT}
          isSmall={true}
          theme="Dark"
        >
          <div ref={ref} className="flex flex-col gap-4">
            <p>{testimonial}</p>
            {linkedIn && (
              <div className="flex gap-2 items-center">
                <p>Contact:</p>
                {linkedIn && (
                  <FaLinkedin
                    onClick={() => redirectToNewPage(linkedIn)}
                    size={25}
                    className={getHoverStyles(disableTransitions)}
                  />
                )}
              </div>
            )}
          </div>
        </Box>
      </Wrapper>
    );
  };

  const getBgImgHeight = () => {
    let height = 1100;

    if (isTablet2) height = 1400;
    if (IsSmallPhone) height = 1900;

    return height;
  };

  return (
    <div
      ref={testimonialsRef}
      id="testimonials"
      className={`${sectionPaddingClassnames} border-2 border-blue-500 px-4 ${maxWidth} mx-auto`}
      style={{
        backgroundImage: `url("/assets/testimonials/testimonials-bg.png")`,
        backgroundSize: "cover",
        // backgroundSize: "auto",
        // backgroundRepeat: "repeat",
        backgroundPosition: "center",
        height: getBgImgHeight(),
      }}
    >
      <div className={sectionTitleContainerClassnames}>
        <h2 className="text-white">Testimonials</h2>
      </div>
      <div
        className={`flex justify-between ${
          isTablet2 ? "flex-col items-center gap-8" : "gap-36"
        }`}
      >
        {renderTestimonialBox(testimonialList[0], 0)}
        {renderTestimonialBox(testimonialList[1], 1)}
      </div>
    </div>
  );
};

export default Testimonials;
