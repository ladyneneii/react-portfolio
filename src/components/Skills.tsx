import React, { useRef, useState } from "react";
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
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
} from "@/shared";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

interface SkillsListInterface {
  name: string;
  src: string | React.ReactNode;
}

export const EXTRA_SPACE = 80;

const Skills = () => {
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

  const itemsContainerClass = "flex justify-center flex-wrap mb-8";

  const navigate = useNavigate();

  const renderItems = (list: SkillsListInterface[]) => {
    return list.map((item) => (
      <div
        key={item.name}
        className="flex gap-4 items-center justify-center w-[140px] flex-col"
      >
        <div className="h-[80px] flex items-center">
          {typeof item.src === "string" ? (
            <img src={item.src} alt="" width={50} className="rounded-lg" />
          ) : (
            item.src
          )}
        </div>
        <div>
          <p className="text-center h-[50px]">{item.name}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className={sectionPaddingClassnames}>
      <div className={sectionTitleContainerClassnames}>
        <h1>Skills</h1>
        {/* <div className="flex items-center gap-6">
          <Radio
            availableOptions={subsections}
            selectedOption={selectedSubsection}
            setSelectedOption={setSelectedSubsection}
          />
        </div> */}
      </div>
      <div className={boxContainerClassnames}>
        <Box
          key="mainTechStack"
          title="Main Tech Stack"
          isFoldable={true}
          childrenHeight={mtsContainerHeight - EXTRA_SPACE}
        >
          <div ref={mtsContainerRef} className={itemsContainerClass}>
            {renderItems(mts)}
          </div>
        </Box>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => navigate("/skills-list")}
          content="View full list of skills"
        />
      </div>
    </div>
  );
};

export default Skills;

// const pl = [
//   { name: "TypeScript", src: "/assets/pl-typescript.png" },
//   { name: "JavaScript", src: "/assets/pl-javascript.png" },
//   { name: "C", src: "/assets/pl-c.png" },
//   { name: "Python", src: "/assets/pl-python.png" },
//   { name: "Java", src: "/assets/pl-java.png" },
//   { name: "C#", src: "/assets/pl-csharp.png" },
//   { name: "PHP", src: "/assets/pl-php.png" },
// ];
// const wdFront = [
//   { name: "HTML", src: "/assets/wd-html.png" },
//   { name: "CSS", src: "/assets/wd-css.svg" },
//   { name: "SCSS", src: "/assets/wd-scss.svg" },
//   { name: "TypeScript", src: "/assets/pl-typescript.png" },
//   { name: "JavaScript", src: "/assets/pl-javascript.png" },
//   { name: "React", src: "/assets/wd-react.png" },
//   { name: "Flask", src: "/assets/wd-flask.png" },
//   {
//     name: "Next.js",
//     src: selectedTheme
//       ? "/assets/wd-nextjs-white.png"
//       : "/assets/wd-nextjs-black.svg",
//   },
// ];
// const wdBack = [
//   { name: "Node.js", src: "/assets/wd-node.webp" },
//   { name: "SQL", src: "/assets/wd-sql.png" },
//   { name: "NoSQL", src: "/assets/wd-nosql.png" },
//   { name: "MongoDB", src: "/assets/wd-mongodb.png" },
//   { name: "Express.js", src: "/assets/wd-expressjs.webp" },
//   { name: "Prisma", src: "/assets/wd-prisma.png" },
// ];
// const flt = [
//   { name: "React", src: "/assets/wd-react.png" },
//   { name: "Flask", src: "/assets/wd-flask.png" },
//   { name: "Django", src: "/assets/flt-django.png" },
//   { name: "jQuery", src: "/assets/flt-jquery.svg" },
//   { name: "Git", src: "/assets/flt-git.png" },
//   { name: "GitHub", src: "/assets/flt-github.png" },
//   { name: "Bitbucket", src: "/assets/flt-bitbucket.webp" },
//   { name: "Bootstrap", src: "/assets/flt-bootstrap.png" },
//   { name: "Tailwind CSS", src: "/assets/flt-tailwind.png" },
//   { name: "Figma", src: "/assets/flt-figma.png" },
//   { name: "Jupyter", src: "/assets/flt-jupyter.svg" },
//   { name: "MySQL Workbench", src: "/assets/flt-workbench.png" },
//   { name: "ASP.net", src: "/assets/flt-aspnet.png" },
//   { name: "Firebase", src: "/assets/flt-firebase.webp" },
//   { name: "Jira", src: "/assets/flt-jira.png" },
//   { name: "Storybook", src: "/assets/flt-storybook.png" },
// ];
// const cw = [
//   {
//     name: "Data Structures & Algorithms",
//     src: <TbBinaryTree size={50} className="text-purple" />,
//   },
//   {
//     name: "Web Development",
//     src: <FaCode size={50} className="text-purple" />,
//   },
//   {
//     name: "Machine Learning",
//     src: <LuBrainCircuit size={50} className="text-purple" />,
//   },
//   {
//     name: "Topic Modeling",
//     src: <AiOutlineCluster size={50} className="text-purple" />,
//   },
//   {
//     name: "Sentiment Analysis",
//     src: <MdOutlineSentimentSatisfied size={50} className="text-purple" />,
//   },
// ];

// const plContainerRef = useRef<HTMLDivElement | null>(null);
// const [plContainerHeight, setPlContainerHeight] = useState(0);
// useHeightResize({ ref: plContainerRef, setHeight: setPlContainerHeight });
// const wdContainerRef = useRef<HTMLDivElement | null>(null);
// const [wdContainerHeight, setWdContainerHeight] = useState(0);
// useHeightResize({ ref: wdContainerRef, setHeight: setWdContainerHeight });
// const fltContainerRef = useRef<HTMLDivElement | null>(null);
// const [fltContainerHeight, setFltContainerHeight] = useState(0);
// useHeightResize({ ref: fltContainerRef, setHeight: setFltContainerHeight });
// const cwContainerRef = useRef<HTMLDivElement | null>(null);
// const [cwContainerHeight, setCwContainerHeight] = useState(0);
// useHeightResize({ ref: cwContainerRef, setHeight: setCwContainerHeight });

{
  /* <>
  <Box
    key="programmingLanguages"
    title="Programming Languages"
    isFoldable={true}
    childrenHeight={plContainerHeight - EXTRA_SPACE}
  >
    <div ref={plContainerRef} className={itemsContainerClass}>
      {renderItems(pl)}
    </div>
  </Box>

  <Box
    key="webDevelopment"
    title="Web Development"
    isFoldable={true}
    childrenHeight={wdContainerHeight - EXTRA_SPACE}
  >
    <div ref={wdContainerRef} className="flex flex-col gap-8">
      <div>
        <h6 className="text-center">Frontend</h6>
        <div className={itemsContainerClass}>{renderItems(wdFront)}</div>
      </div>

      <div>
        <h6 className="text-center">Backend</h6>
        <div className={itemsContainerClass}>{renderItems(wdBack)}</div>
      </div>
    </div>
  </Box>

  <Box
    key="frameworksLibrariesAndTools"
    title="Frameworks, Libraries, and Tools"
    isFoldable={true}
    childrenHeight={fltContainerHeight - EXTRA_SPACE}
  >
    <div ref={fltContainerRef} className={itemsContainerClass}>
      {renderItems(flt)}
    </div>
  </Box>

  <Box
    key="coursework"
    title="Coursework"
    isFoldable={true}
    childrenHeight={cwContainerHeight - EXTRA_SPACE}
  >
    <div ref={cwContainerRef} className={itemsContainerClass}>
      {renderItems(cw)}
    </div>
  </Box>
</>; */
}
