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
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
} from "@/shared";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import { renderSkills } from "./functions/renderSkills";
import { UserPrefContext } from "@/context/UserPrefContext";
import useHighlightSection from "@/hooks/useHighlightSection";

export interface SkillsInterface {
  name: string;
  src: string | React.ReactNode;
}

const Skills = () => {
  const { setSelectedSection } = useContext(UserPrefContext);
  const mts = [
    { name: "TypeScript", src: "/assets/pl-typescript.png" },
    { name: "JavaScript", src: "/assets/pl-javascript.png" },
    { name: "Python", src: "/assets/pl-python.png" },
    { name: "HTML", src: "/assets/wd-html.png" },
    { name: "CSS", src: "/assets/wd-css.svg" },
    { name: "SCSS", src: "/assets/wd-scss.svg" },
    { name: "React", src: "/assets/wd-react.png" },
    { name: "Node.js", src: "/assets/wd-node.webp" },
    { name: "SQL", src: "/assets/wd-sql.png" },
    { name: "Express.js", src: "/assets/wd-expressjs.webp" },
  ];
  const mtsContainerRef = useRef<HTMLDivElement | null>(null);
  const [mtsContainerHeight, setMtsContainerHeight] = useState(0);
  useHeightResize({ ref: mtsContainerRef, setHeight: setMtsContainerHeight });

  const itemsContainerClass = "flex justify-center flex-wrap";

  const navigate = useNavigate();

  const skillsRef = useRef<HTMLDivElement | null>(null);
  useHighlightSection({
    ref: skillsRef,
    setSection: setSelectedSection,
    section: "Skills",
  });

  return (
    <div ref={skillsRef} id="skills" className={sectionPaddingClassnames}>
      <div className={sectionTitleContainerClassnames}>
        <h1>Skills</h1>
      </div>
      <div className={boxContainerClassnames}>
        <Box
          key="mainTechStack"
          title="Main Tech Stack"
          isFoldable={true}
          childrenHeight={mtsContainerHeight - EXTRA_HEIGHT}
        >
          <div ref={mtsContainerRef} className={itemsContainerClass}>
            {renderSkills(mts)}
          </div>
        </Box>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => {
            navigate("/skills-list");
            window.scrollTo(0, 0);
          }}
          content="View all skills"
        />
      </div>
    </div>
  );
};

export default Skills;
