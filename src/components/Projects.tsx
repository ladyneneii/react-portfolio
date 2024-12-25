import {
  boxContainerClassnames,
  EXTRA_HEIGHT,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
} from "@/shared";
import { MutableRefObject, useContext, useRef, useState } from "react";
import Box from "./ui/Box";
import useHeightResize from "@/hooks/useHeightResize";
import useHighlightSection from "@/hooks/useHighlightSection";
import { UserPrefContext } from "@/context/UserPrefContext";
import ProjectDescription from "./ui/ProjectDescription";

export interface ProjectsInterface {
  img: string;
  desc: string;
  techUsed: string;
  websiteLink?: string;
  learnMoreLink?: string;
}

interface BoxInfoInterface {
  title: string;
  ref: MutableRefObject<HTMLDivElement | null>;
  height: number;
}

type ProjectsWithTitleInterface = ProjectsInterface & BoxInfoInterface;

const Projects = () => {
  const { setSelectedSection } = useContext(UserPrefContext);

  const tsContainerRef = useRef<HTMLDivElement | null>(null);
  const [tsContainerHeight, setTsContainerHeight] = useState(0);
  useHeightResize({ ref: tsContainerRef, setHeight: setTsContainerHeight });

  const cContainerRef = useRef<HTMLDivElement | null>(null);
  const [cContainerHeight, setCContainerHeight] = useState(0);
  useHeightResize({ ref: cContainerRef, setHeight: setCContainerHeight });

  const pContainerRef = useRef<HTMLDivElement | null>(null);
  const [pContainerHeight, setPContainerHeight] = useState(0);
  useHeightResize({ ref: pContainerRef, setHeight: setPContainerHeight });

  const fasContainerRef = useRef<HTMLDivElement | null>(null);
  const [fasContainerHeight, setFasContainerHeight] = useState(0);
  useHeightResize({ ref: fasContainerRef, setHeight: setFasContainerHeight });

  const projectsInfo: ProjectsWithTitleInterface[] = [
    {
      title: "Taylor Swift's Discography",
      img: "/assets/thumbnail-taylor-swift.png",
      desc: "Created and deployed a website about Taylor Swift's discography.",
      techUsed: "React TypeScript, Cloudflare, SCSS",
      websiteLink: "https://taymother.pages.dev/",
      learnMoreLink: "/taylor-swift",
      ref: tsContainerRef,
      height: tsContainerHeight,
    },
    {
      title: "Calculators",
      img: "/assets/collage-calculators.png",
      desc: "Created and deployed a Flask website of calculators using CPU scheduling, page replacement, disk scheduling, and cryptographic algorithms.",
      techUsed: "Python, Flask, Vanilla Javascript",
      websiteLink: "https://calculators-flask.onrender.com/",
      learnMoreLink: "/calculators",
      ref: cContainerRef,
      height: cContainerHeight,
    },
    {
      title: "Padayon;",
      img: "/assets/thumbnail-padayon.png",
      desc: "Created a full-stack app with the following features: user authentication, profile viewing & sorting according to location, a forum with multi-tiered/infinitely nested comments and replies, private and group messaging, a global map, and different permissions and privileges depending on user type.",
      techUsed: "React TypeScript, Node.js, Express.js, Firebase, Bootstrap",
      learnMoreLink: "/padayon",
      ref: pContainerRef,
      height: pContainerHeight,
    },
    {
      title: "FM-AM Synthesizer",
      img: "/assets/thumbnail-synthesizer.png",
      desc: "Designed an FM-AM Synthesizer with mobile (portrait & landscape) responsiveness.",
      techUsed: "React TypeScript, Node.js, Express.js, Firebase, Bootstrap",
      websiteLink: "https://noodlesushi.github.io/FM-AM-Synth/",
      ref: fasContainerRef,
      height: fasContainerHeight,
    },
  ];

  const renderProjectBox = (
    title: string,
    img: string,
    desc: string,
    techUsed: string,
    websiteLink: string | undefined,
    learnMoreLink: string | undefined,
    index: number,
    ref: MutableRefObject<HTMLDivElement | null>,
    height: number
  ) => {
    return (
      <Box
        key={title}
        title={title}
        isFoldable={true}
        childrenHeight={height - EXTRA_HEIGHT}
      >
        <div ref={ref} className="flex flex-col gap-12">
          <ProjectDescription
            img={img}
            desc={desc}
            techUsed={techUsed}
            index={index}
            websiteLink={websiteLink}
            learnMoreLink={learnMoreLink}
            carousel={projectsInfo.map(({ img }) => img)}
          />
        </div>
      </Box>
    );
  };

  const projectsRef = useRef<HTMLDivElement | null>(null);
  useHighlightSection({
    ref: projectsRef,
    setSection: setSelectedSection,
    section: "Projects",
  });

  return (
    <div ref={projectsRef} id="projects" className={sectionPaddingClassnames}>
      <div className={sectionTitleContainerClassnames}>
        <h1>Projects</h1>
      </div>
      <div className={boxContainerClassnames}>
        {projectsInfo.map(
          (
            {
              title,
              img,
              desc,
              techUsed,
              websiteLink,
              learnMoreLink,
              ref,
              height,
            }: ProjectsWithTitleInterface,
            index
          ) =>
            renderProjectBox(
              title,
              img,
              desc,
              techUsed,
              websiteLink,
              learnMoreLink,
              index,
              ref,
              height
            )
        )}
      </div>
    </div>
  );
};

export default Projects;
