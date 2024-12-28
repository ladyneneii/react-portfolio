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
  maxWidth,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
} from "@/shared";
import { UserPrefContext } from "@/context/UserPrefContext";
import useHighlightSection from "@/hooks/useHighlightSection";
import useMediaQuery from "@/hooks/useMediaQuery";

interface TestimonialListInterface {
  name: string;
  img: string;
  testimonial: string;
  ref: MutableRefObject<HTMLDivElement | null>;
  height: number;
}

const Testimonials = () => {
  const { selectedTheme, disableTransitions } = useContext(UserPrefContext);
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
      testimonial:
        "Ernest is an excellent colleague. Working with him during our time at Edified alleviated a lot of the pressure off me as he is not only a quick learner, he is also very easy to work with. Watching him, I can also say that he is extremely adaptable, being able to adjust and work on several projects at a time while still giving more than what is being asked. He has proven himself to be a truly skillful developer and a great coworker.",
      ref: mdContainerRef,
      height: mdContainerHeight,
    },
    {
      name: "Neil Sagun",
      img: "/assets/testimonials/testimonials-miguel.jpg",
      testimonial:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      ref: nsContainerRef,
      height: nsContainerHeight,
    },
  ];
  const isTablet2 = useMediaQuery("(max-width: 880px)");
  const IsSmallPhone = useMediaQuery("(max-width: 420px)");

  const renderTestimonialBox = (testimonialInfo: TestimonialListInterface) => {
    const { name, img, testimonial, ref, height } = testimonialInfo;

    return (
      <div className={`${isTablet2 ? "w-full" : "w-1/2"}`}>
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
              <h4>{name}</h4>
            </div>
          }
          isFoldable={true}
          childrenHeight={height - EXTRA_HEIGHT}
          isSmall={true}
        >
          <div ref={ref} className="">
            <p>{testimonial}</p>
          </div>
        </Box>
      </div>
    );
  };

  const getBgImgHeight = () => {
    let height = 700;

    if (isTablet2) height = 1000;
    if (IsSmallPhone) height = 1350;

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
        <h2>Testimonials</h2>
      </div>
      <div
        className={`flex justify-between ${
          isTablet2 ? "flex-col items-center gap-8" : "gap-36"
        }`}
      >
        {renderTestimonialBox(testimonialList[0])}
        {renderTestimonialBox(testimonialList[1])}
      </div>
    </div>
  );
};

export default Testimonials;
