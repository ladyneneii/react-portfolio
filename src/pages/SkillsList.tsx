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
  const { selectedTheme, setSelectedSection, disableAnimations } =
    useContext(UserPrefContext);

  useEffect(() => {
    setSelectedSection("");
  }, [setSelectedSection]);

  const pl = [
    { name: "TypeScript", src: "/assets/skills/pl-typescript.png" },
    { name: "JavaScript", src: "/assets/skills/pl-javascript.png" },
    { name: "C", src: "/assets/skills/pl-c.png" },
    { name: "Python", src: "/assets/skills/pl-python.png" },
    { name: "Java", src: "/assets/skills/pl-java.png" },
    { name: "C#", src: "/assets/skills/pl-csharp.png" },
    { name: "PHP", src: "/assets/skills/pl-php.png" },
  ];
  const wdFront = [
    { name: "HTML", src: "/assets/skills/wd-html.png" },
    { name: "CSS", src: "/assets/skills/wd-css.svg" },
    { name: "SCSS", src: "/assets/skills/wd-scss.svg" },
    { name: "TypeScript", src: "/assets/skills/pl-typescript.png" },
    { name: "JavaScript", src: "/assets/skills/pl-javascript.png" },
    { name: "React", src: "/assets/skills/wd-react.png" },
    { name: "Flask", src: "/assets/skills/wd-flask.png" },
    {
      name: "Next.js",
      src: selectedTheme
        ? "/assets/skills/wd-nextjs-white.png"
        : "/assets/skills/wd-nextjs-black.svg",
    },
  ];
  const wdBack = [
    { name: "Node.js", src: "/assets/skills/wd-node.webp" },
    { name: "SQL", src: "/assets/skills/wd-sql.png" },
    { name: "NoSQL", src: "/assets/skills/wd-nosql.png" },
    { name: "MongoDB", src: "/assets/skills/wd-mongodb.png" },
    { name: "Express.js", src: "/assets/skills/wd-expressjs.webp" },
    { name: "Prisma", src: "/assets/skills/wd-prisma.png" },
  ];
  const flt = [
    { name: "React", src: "/assets/skills/wd-react.png" },
    { name: "Flask", src: "/assets/skills/wd-flask.png" },
    { name: "Django", src: "/assets/skills/flt-django.png" },
    { name: "jQuery", src: "/assets/skills/flt-jquery.svg" },
    { name: "Git", src: "/assets/skills/flt-git.png" },
    { name: "GitHub", src: "/assets/skills/flt-github.png" },
    { name: "Bitbucket", src: "/assets/skills/flt-bitbucket.webp" },
    { name: "Bootstrap", src: "/assets/skills/flt-bootstrap.png" },
    { name: "Tailwind CSS", src: "/assets/skills/flt-tailwind.png" },
    { name: "Figma", src: "/assets/skills/flt-figma.png" },
    { name: "Jupyter", src: "/assets/skills/flt-jupyter.svg" },
    { name: "MySQL Workbench", src: "/assets/skills/flt-workbench.png" },
    { name: "ASP.net", src: "/assets/skills/flt-aspnet.png" },
    { name: "Firebase", src: "/assets/skills/flt-firebase.webp" },
    { name: "Jira", src: "/assets/skills/flt-jira.png" },
    { name: "Storybook", src: "/assets/skills/flt-storybook.png" },
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
        <h2>All Skills</h2>
      </div>
      <div className={boxContainerClassnames}>
        <Box
          key="programmingLanguages"
          title="Programming Languages"
          isFoldable={true}
          childrenHeight={plContainerHeight - EXTRA_HEIGHT}
        >
          <div ref={plContainerRef} className={itemsContainerClass}>
            {renderSkills(pl, disableAnimations)}
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
              <h6 className="text-center font-normal">Frontend</h6>
              <div className={itemsContainerClass}>
                {renderSkills(wdFront, disableAnimations)}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h6 className="text-center font-normal">Backend</h6>
              <div className={itemsContainerClass}>
                {renderSkills(wdBack, disableAnimations)}
              </div>
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
            {renderSkills(flt, disableAnimations)}
          </div>
        </Box>
        <Box
          key="coursework"
          title="Coursework"
          isFoldable={true}
          childrenHeight={cwContainerHeight - EXTRA_HEIGHT}
        >
          <div ref={cwContainerRef} className={itemsContainerClass}>
            {renderSkills(cw, disableAnimations)}
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
