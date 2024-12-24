import { useContext, useEffect, useRef, useState } from "react";
import Box from "../components/ui/Box";
import useHeightResize from "@/hooks/useHeightResize";
import { TbBinaryTree } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { AiOutlineCluster } from "react-icons/ai";
import { MdOutlineSentimentSatisfied } from "react-icons/md";
import {
  boxContainerClassnames,
  EXTRA_HEIGHT,
  itemsContainerClass,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
} from "@/shared";
import Button from "../components/ui/Button";
import { renderSkills } from "../components/functions/renderSkills";
import { UserPrefContext } from "@/context/UserPrefContext";

const SkillsList = () => {
  const { selectedTheme, setSelectedSection } = useContext(UserPrefContext);

  useEffect(() => {
    setSelectedSection("");
  }, [setSelectedSection]);

  const pl = [
    { name: "TypeScript", src: "/assets/pl-typescript.png" },
    { name: "JavaScript", src: "/assets/pl-javascript.png" },
    { name: "C", src: "/assets/pl-c.png" },
    { name: "Python", src: "/assets/pl-python.png" },
    { name: "Java", src: "/assets/pl-java.png" },
    { name: "C#", src: "/assets/pl-csharp.png" },
    { name: "PHP", src: "/assets/pl-php.png" },
  ];
  const wdFront = [
    { name: "HTML", src: "/assets/wd-html.png" },
    { name: "CSS", src: "/assets/wd-css.svg" },
    { name: "SCSS", src: "/assets/wd-scss.svg" },
    { name: "TypeScript", src: "/assets/pl-typescript.png" },
    { name: "JavaScript", src: "/assets/pl-javascript.png" },
    { name: "React", src: "/assets/wd-react.png" },
    { name: "Flask", src: "/assets/wd-flask.png" },
    {
      name: "Next.js",
      src: selectedTheme
        ? "/assets/wd-nextjs-white.png"
        : "/assets/wd-nextjs-black.svg",
    },
  ];
  const wdBack = [
    { name: "Node.js", src: "/assets/wd-node.webp" },
    { name: "SQL", src: "/assets/wd-sql.png" },
    { name: "NoSQL", src: "/assets/wd-nosql.png" },
    { name: "MongoDB", src: "/assets/wd-mongodb.png" },
    { name: "Express.js", src: "/assets/wd-expressjs.webp" },
    { name: "Prisma", src: "/assets/wd-prisma.png" },
  ];
  const flt = [
    { name: "React", src: "/assets/wd-react.png" },
    { name: "Flask", src: "/assets/wd-flask.png" },
    { name: "Django", src: "/assets/flt-django.png" },
    { name: "jQuery", src: "/assets/flt-jquery.svg" },
    { name: "Git", src: "/assets/flt-git.png" },
    { name: "GitHub", src: "/assets/flt-github.png" },
    { name: "Bitbucket", src: "/assets/flt-bitbucket.webp" },
    { name: "Bootstrap", src: "/assets/flt-bootstrap.png" },
    { name: "Tailwind CSS", src: "/assets/flt-tailwind.png" },
    { name: "Figma", src: "/assets/flt-figma.png" },
    { name: "Jupyter", src: "/assets/flt-jupyter.svg" },
    { name: "MySQL Workbench", src: "/assets/flt-workbench.png" },
    { name: "ASP.net", src: "/assets/flt-aspnet.png" },
    { name: "Firebase", src: "/assets/flt-firebase.webp" },
    { name: "Jira", src: "/assets/flt-jira.png" },
    { name: "Storybook", src: "/assets/flt-storybook.png" },
  ];
  const cw = [
    {
      name: "Data Structures & Algorithms",
      src: <TbBinaryTree size={50} className="text-purple" />,
    },
    {
      name: "Web Development",
      src: <FaCode size={50} className="text-purple" />,
    },
    {
      name: "Machine Learning",
      src: <LuBrainCircuit size={50} className="text-purple" />,
    },
    {
      name: "Topic Modeling",
      src: <AiOutlineCluster size={50} className="text-purple" />,
    },
    {
      name: "Sentiment Analysis",
      src: <MdOutlineSentimentSatisfied size={50} className="text-purple" />,
    },
  ];

  const plContainerRef = useRef<HTMLDivElement | null>(null);
  const [plContainerHeight, setPlContainerHeight] = useState(0);
  useHeightResize({ ref: plContainerRef, setHeight: setPlContainerHeight });
  const wdContainerRef = useRef<HTMLDivElement | null>(null);
  const [wdContainerHeight, setWdContainerHeight] = useState(0);
  useHeightResize({ ref: wdContainerRef, setHeight: setWdContainerHeight });
  const fltContainerRef = useRef<HTMLDivElement | null>(null);
  const [fltContainerHeight, setFltContainerHeight] = useState(0);
  useHeightResize({ ref: fltContainerRef, setHeight: setFltContainerHeight });
  const cwContainerRef = useRef<HTMLDivElement | null>(null);
  const [cwContainerHeight, setCwContainerHeight] = useState(0);
  useHeightResize({ ref: cwContainerRef, setHeight: setCwContainerHeight });

  return (
    <div className={sectionPaddingClassnames}>
      <div className={sectionTitleContainerClassnames}>
        <h1>All Skills</h1>
      </div>
      <div className={boxContainerClassnames}>
        <Box
          key="programmingLanguages"
          title="Programming Languages"
          isFoldable={true}
          childrenHeight={plContainerHeight - EXTRA_HEIGHT}
        >
          <div ref={plContainerRef} className={itemsContainerClass}>
            {renderSkills(pl)}
          </div>
        </Box>
        <Box
          key="webDevelopment"
          title="Web Development"
          isFoldable={true}
          childrenHeight={wdContainerHeight - EXTRA_HEIGHT}
        >
          <div ref={wdContainerRef} className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h6 className="text-center">Frontend</h6>
              <div className={itemsContainerClass}>{renderSkills(wdFront)}</div>
            </div>

            <div className="flex flex-col gap-4">
              <h6 className="text-center">Backend</h6>
              <div className={itemsContainerClass}>{renderSkills(wdBack)}</div>
            </div>
          </div>
        </Box>
        <Box
          key="frameworksLibrariesAndTools"
          title="Frameworks, Libraries, and Tools"
          isFoldable={true}
          childrenHeight={fltContainerHeight - EXTRA_HEIGHT}
        >
          <div ref={fltContainerRef} className={itemsContainerClass}>
            {renderSkills(flt)}
          </div>
        </Box>
        <Box
          key="coursework"
          title="Coursework"
          isFoldable={true}
          childrenHeight={cwContainerHeight - EXTRA_HEIGHT}
        >
          <div ref={cwContainerRef} className={itemsContainerClass}>
            {renderSkills(cw)}
          </div>
        </Box>
      </div>
      <div className="flex justify-center">
        <Button onClick={() => window.history.back()} content="Go back" />
      </div>
    </div>
  );
};

export default SkillsList;
