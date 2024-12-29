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
  camelToTitleCase,
  EXTRA_HEIGHT,
  getConditionalSmoothTransition,
  getHoverStyles,
  getVariants,
  maxWidth,
  redirectToNewPage,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
  translatedSections,
} from "@/shared";
import { UserPrefContext } from "@/context/UserPrefContext";
import useHighlightSection from "@/hooks/useHighlightSection";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { AvailableLanguagesType } from "@/types";
import Carousel from "./ui/Carousel";

interface TestimonialListInterface {
  name: string;
  detail: Record<AvailableLanguagesType, string>;
  img: string;
  testimonial: Record<AvailableLanguagesType, string>;
  ref: MutableRefObject<HTMLDivElement | null>;
  height: number;
  linkedIn?: string;
}

const Testimonials = () => {
  const {
    selectedTheme,
    disableTransitions,
    disableAnimations,
    selectedLanguage,
  } = useContext(UserPrefContext);
  const { setSelectedSection } = useContext(UserPrefContext);

  const sectionId = translatedSections.Testimonials[selectedLanguage];

  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  useHighlightSection({
    ref: testimonialsRef,
    setSection: setSelectedSection,
    section: camelToTitleCase(sectionId),
    selectedLanguage,
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
      detail: {
        English: "Worked together on FilPass V2.0",
        Filipino: "Kasamang nagtrabaho sa FilPass V2.0",
        Bisaya: "Kaubang nagtrabaho sa FilPass V2.0",
      },
      testimonial: {
        English:
          "Ernest is an excellent colleague. Working with him during our time at Edufied alleviated a lot of the pressure off me as he is not only a quick learner, he is also very easy to work with. Watching him, I can also say that he is extremely adaptable, being able to adjust and work on several projects at a time while still giving more than what is being asked. He has proven himself to be a truly skillful developer and a great coworker.",
        Filipino:
          "Si Ernest ay isang mahusay na katrabaho. Ang pagtatrabaho kasama siya sa panahon namin sa Edufied ay nakatulong nang malaki sa pagpapagaan ng mga pressure sa akin dahil hindi lamang siya mabilis matuto, madali rin siyang katrabaho. Habang pinapanood ko siya, masasabi ko ring siya ay lubos na adaptable, kayang mag-adjust at magtrabaho sa iba't ibang proyekto nang sabay-sabay habang nagbibigay pa ng higit pa sa hinihingi. Napatunayan niyang siya ay isang tunay na magaling na developer at mahusay na katrabaho.",
        Bisaya:
          "Si Ernest usa ka maayo nga kauban sa trabaho. Ang pagtrabaho uban niya sa among panahon sa Edufied nakatabang kaayo sa pagpakunhod sa akong mga kalisud kay dili lang siya paspas makat-on, sayon usab siya trabahuan. Samtang nagtan-aw ko kaniya, masulti usab nako nga siya maayo kaayo mag-adjust, makatrabaho sa daghang mga proyekto sabay-sabay samtang magahatag pa og labaw sa gikinahanglan. Napatunayan niya nga siya usa ka maayo kaayo nga developer ug kauban sa trabaho.",
      },
      ref: mdContainerRef,
      height: mdContainerHeight,
      linkedIn: "https://www.linkedin.com/in/miguel-dailisan-1157b2231/",
    },
    {
      name: "Neil Sagun",
      img: "/assets/testimonials/testimonials-neil.jpg",
      detail: {
        English: "Worked together on thesis and Padayon;",
        Filipino: "Kasamang nagtrabaho sa thesis at Padayon;",
        Bisaya: "Kaubang nagtrabaho sa thesis ug Padayon;",
      },
      testimonial: {
        English:
          "When I knew I was working with Ernest on our thesis, I realized we could make it work. Being his partner and groupmate in so many projects, I had seen firsthand how hardworking he is based on his work ethic. He was able to successfully implement my designs and our ideas for Padayon; despite being new to React. Now, we were able to pull off our thesis despite the fact that we were new to machine learning and natural language processing. It really goes to show how easily he is able to adapt to unfamiliar technologies—and it is all because of how hardworking and passionate he is. He is always persistent in delivering results, and whenever problems come his way, he never fails to solve them or think up a clever way around them. Never once have I regretted working with him, ever.",
        Filipino:
          "Nung nalaman ko na makakatrabaho ko si Ernest sa aming tesis, narealize ko na kaya naming magtagumpay. Bilang kanyang partner at ka-grupo sa maraming proyekto, nakita ko ng personal kung gaano siya kasipag batay sa kanyang work ethic. Matagumpay niyang naipatupad ang mga disenyo ko at ang aming mga ideya para sa Padayon; kahit baguhan pa kami sa React. Ngayon, nagawa namin ang aming thesis kahit na bago kami sa machine learning at natural language processing. Talaga itong nagpapakita kung gaano siya kabilis mag-adapt sa mga teknolohiya na hindi pamilyar—at lahat ito dahil sa kanyang sipag at pagmamahal sa ginagawa. Lagi siyang persistent sa paghahatid ng resulta, at tuwing may problema, hindi siya nawawalan ng solusyon o malikhaing paraan para malampasan ito. Hindi ko naisip ni isang beses na magsisi sa pagtrabaho kasama siya.",
        Bisaya:
          "Pagkahibalo nako nga magtrabaho ko uban ni Ernest sa among tesis, nahibal-an nako nga magmalampuson gyud kami. Isip iyang partner ug ka-grupo sa daghang proyekto, akong nakita ug nasaksihan kung unsa siya ka masipag ug determinado. Nakaya niyang malampuson nga ipatuman ang akong mga disenyo ug ang among mga ideya para sa Padayon; bisan bag-o pa kami sa React. Karon, nahuman namo ang among thesis bisan bag-o pa kami sa machine learning ug natural language processing. Kini nagpamatuod kung unsa siya kabilis mag-adjust sa mga teknolohiya nga wala pa kasinatian—ug kini tanan tungod sa iyang dedikasyon ug pagkahilig sa trabaho. Siya kanunay nga determinado sa paghahatag og resulta, ug kung adunay mga problema, dili siya magpakyas sa pagpangita og solusyon o paghimo og mga malikhain nga paagi aron masulbad kini. Wala gyud ko magbasol sa pagtrabaho uban kaniya.",
      },
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
        variants={getVariants()}
        className={`${isTablet2 ? "w-full" : "w-1/2"}`}
      >
        <Box
          key={name}
          title={
            <div className="flex gap-4 items-center group">
              <img
                onClick={() => {
                  setShowCarousel(true);
                  setImgIdx(index);
                }}
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
                <p className="text-sm">{detail[selectedLanguage]}</p>
              </div>
            </div>
          }
          isFoldable={true}
          childrenHeight={height - EXTRA_HEIGHT}
          isSmall={true}
          theme="Dark"
        >
          <div ref={ref} className="flex flex-col gap-4">
            <p>{testimonial[selectedLanguage]}</p>
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
    let height = 1250;

    if (isTablet2) height = 1600;
    if (IsSmallPhone) height = 2300;

    return height;
  };

  const [showCarousel, setShowCarousel] = useState(false);
  const [imgIdx, setImgIdx] = useState(-1);

  return (
    <>
      <div
        ref={testimonialsRef}
        id={sectionId}
        className={`${sectionPaddingClassnames} px-4 ${maxWidth} mx-auto`}
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
          <h2 className="text-white">{camelToTitleCase(sectionId)}</h2>
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

      <Carousel
        imgIdx={imgIdx}
        setImgIdx={setImgIdx}
        carousel={testimonialList.map(({ img }) => img)}
        showCarousel={showCarousel}
        setShowCarousel={setShowCarousel}
      />
    </>
  );
};

export default Testimonials;
