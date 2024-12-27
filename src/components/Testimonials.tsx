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
  maxWidth,
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
  const mdContainerRef = useRef<HTMLDivElement | null>(null);
  const [mdContainerHeight, setMdContainerHeight] = useState(0);
  useHeightResize({ ref: mdContainerRef, setHeight: setMdContainerHeight });

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
      className={`${sectionPaddingClassnames} border-2 border-blue-500 ${maxWidth} mx-auto`}
      style={{
        backgroundImage: `url("/assets/testimonials/testimonials-bg.png")`,
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
      <div className={`border-2 flex justify-between gap-24`}>
        <div className="border-2 border-red-500">
          <Box
            key="miguelDailisan"
            title="Miguel Dailisan"
            isFoldable={true}
            childrenHeight={mdContainerHeight - EXTRA_HEIGHT}
          >
            <div ref={mdContainerRef} className={itemsContainerClass}></div>
          </Box>
        </div>
        <div className="border-2 border-red-500">
          {" "}
          <Box
            key="miguelDailisan"
            title="Miguel Dailisan"
            isFoldable={true}
            childrenHeight={mdContainerHeight - EXTRA_HEIGHT}
          >
            <div ref={mdContainerRef} className={itemsContainerClass}></div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
