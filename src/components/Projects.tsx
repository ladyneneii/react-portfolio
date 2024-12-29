import {
  boxContainerClassnames,
  camelToTitleCase,
  EXTRA_HEIGHT,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
  translatedSections,
} from "@/shared";
import React, { MutableRefObject, useContext, useRef, useState } from "react";
import Box from "./ui/Box";
import useHeightResize from "@/hooks/useHeightResize";
import useHighlightSection from "@/hooks/useHighlightSection";
import { UserPrefContext } from "@/context/UserPrefContext";
import ProjectDescription from "./ui/ProjectDescription";
import { AvailableLanguagesType } from "@/types";

export interface ProjectsInterface {
  img: string;
  desc: Record<AvailableLanguagesType, string | React.ReactNode>;
  techUsed: string;
  websiteLink?: string;
  learnMoreLink?: string;
  linkedInLink?: string;
  isDescLong?: boolean;
  extraImgs?: string[];
}

interface BoxInfoInterface {
  title: string;
  ref: MutableRefObject<HTMLDivElement | null>;
  height: number;
}

type ProjectsWithTitleInterface = ProjectsInterface & BoxInfoInterface;

const Projects = () => {
  const { setSelectedSection, selectedLanguage } = useContext(UserPrefContext);

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
      img: "/assets/thumbnails/thumbnail-taylor-swift.png",
      desc: {
        English:
          "Created and deployed a website about Taylor Swift's discography.",
        Filipino:
          "Lumikha at nag-deploy ng isang website tungkol sa discography ni Taylor Swift.",
        Bisaya:
          "Naghimo ug nag-deploy og usa ka website bahin sa discography ni Taylor Swift.",
      },
      techUsed: "React TypeScript, Cloudflare, SCSS",
      websiteLink: "https://taymother.pages.dev/",
      learnMoreLink: "/taylor-swift",
      ref: tsContainerRef,
      height: tsContainerHeight,
    },
    {
      title: "Calculators",
      img: "/assets/thumbnails/thumbnail-calculators.png",
      desc: {
        English:
          "Created and deployed a Flask website of calculators using CPU scheduling, page replacement, disk scheduling, and cryptographic algorithms.",
        Filipino:
          "Lumikha at nag-deploy ng isang Flask website ng mga calculator gamit ang CPU scheduling, page replacement, disk scheduling, at cryptographic algorithms.",
        Bisaya:
          "Naghimo ug nag-deploy og usa ka Flask website sa mga calculator gamit ang CPU scheduling, page replacement, disk scheduling, ug cryptographic algorithms.",
      },
      techUsed: "Python, Flask, Vanilla Javascript",
      websiteLink: "https://calculators-flask.onrender.com/",
      learnMoreLink: "/calculators",
      ref: cContainerRef,
      height: cContainerHeight,
      isDescLong: true,
    },
    {
      title: "Padayon;",
      img: "/assets/thumbnails/thumbnail-padayon.png",
      desc: {
        English:
          "Created a full-stack app with the following features: user authentication, profile viewing & sorting according to location, a forum with multi-tiered/infinitely nested comments and replies, private and group messaging, a global map, and different permissions and privileges depending on user type.",
        Filipino:
          "Lumikha ng isang full-stack app na may mga sumusunod na tampok: user authentication, pag-view ng profile at pag-sort ayon sa lokasyon, isang forum na may multi-tiered/infinitely nested na mga komento at sagot, private at group messaging, isang global map, at iba't ibang permissions at privileges depende sa uri ng user.",
        Bisaya:
          "Naghimo ug usa ka full-stack app nga adunay mga sumusunod nga feature: user authentication, pagtan-aw sa profile ug pag-sort base sa lokasyon, usa ka forum nga adunay multi-tiered/infinitely nested nga mga komento ug tubag, private ug group messaging, usa ka global map, ug lain-laing permissions ug privileges depende sa klase sa user.",
      },
      techUsed: "React TypeScript, Node.js, Express.js, Firebase, Bootstrap",
      learnMoreLink: "/padayon",
      ref: pContainerRef,
      height: pContainerHeight,
      isDescLong: true,
    },
    {
      title: "FM-AM Synthesizer",
      img: "/assets/thumbnails/thumbnail-synthesizer.png",
      desc: {
        English:
          "Designed an FM-AM Synthesizer with mobile (portrait & landscape) responsiveness.",
        Filipino:
          "Idinisenyo ang FM-AM Synthesizer na may mobile (portrait at landscape) responsiveness.",
        Bisaya:
          "Gidisenyo ang FM-AM Synthesizer nga adunay mobile (portrait ug landscape) responsiveness.",
      },
      techUsed: "React TypeScript, Tailwind CSS",
      websiteLink: "https://noodlesushi.github.io/FM-AM-Synth/",
      ref: fasContainerRef,
      height: fasContainerHeight,
    },
  ];

  const renderProjectBox = (
    title: string,
    img: string,
    desc: Record<AvailableLanguagesType, string | React.ReactNode>,
    techUsed: string,
    websiteLink: string | undefined,
    learnMoreLink: string | undefined,
    index: number,
    ref: MutableRefObject<HTMLDivElement | null>,
    height: number,
    isDescLong?: boolean
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
            isDescLong={isDescLong}
          />
        </div>
      </Box>
    );
  };

  const sectionId = translatedSections.Projects[selectedLanguage];

  const projectsRef = useRef<HTMLDivElement | null>(null);
  useHighlightSection({
    ref: projectsRef,
    setSection: setSelectedSection,
    section: camelToTitleCase(sectionId),
    selectedLanguage,
  });

  return (
    <div ref={projectsRef} id={sectionId} className={sectionPaddingClassnames}>
      <div className={sectionTitleContainerClassnames}>
        <h2>{camelToTitleCase(sectionId)}</h2>
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
              isDescLong,
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
              height,
              isDescLong
            )
        )}
      </div>
    </div>
  );
};

export default Projects;
