import React, { useContext, useRef, useState } from "react";
import Box from "./ui/Box";
import useHeightResize from "@/hooks/useHeightResize";
// import { TbBinaryTree } from "react-icons/tb";
// import { FaCode } from "react-icons/fa6";
// import { LuBrainCircuit } from "react-icons/lu";
// import { AiOutlineCluster } from "react-icons/ai";
// import { MdOutlineSentimentSatisfied } from "react-icons/md";
// import Radio, { RadioDataTypes } from "./ui/Radio";
import {
  boxContainerClassnames,
  EXTRA_HEIGHT,
  itemsContainerClass,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
} from "@/shared";
import { UserPrefContext } from "@/context/UserPrefContext";
import useHighlightSection from "@/hooks/useHighlightSection";

export interface SkillsInterface {
  name: string;
  src: string | React.ReactNode;
}

const Testimonials = () => {
  const {
    selectedTheme,
  } = useContext(UserPrefContext);
  const { setSelectedSection } = useContext(UserPrefContext);
  const tContainerRef = useRef<HTMLDivElement | null>(null);
  const [tContainerHeight, setTContainerHeight] = useState(0);
  useHeightResize({ ref: tContainerRef, setHeight: setTContainerHeight });

  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  useHighlightSection({
    ref: testimonialsRef,
    setSection: setSelectedSection,
    section: "Testimonials",
  });

  return (
    <div
      ref={testimonialsRef}
      id="testimonials"
      className={`${sectionPaddingClassnames} border-2 border-blue-500`}
      style={{
        backgroundImage: `url(${
          selectedTheme === "Dark"
            ? "/assets/background-transparent-black.png"
            : "/assets/background-transparent-white.png"
        })`,
        backgroundSize: "cover",
        // backgroundSize: "auto",
        // backgroundRepeat: "repeat",
        backgroundPosition: "center",
        height: 1000,
      }}
    >
      <div className={sectionTitleContainerClassnames}>
        <h2>Testimonials</h2>
      </div>
      <div className={boxContainerClassnames}></div>
    </div>
  );
};

export default Testimonials;
