import {
  boxContainerClassnames,
  camelToTitleCase,
  EXTRA_HEIGHT,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
  translatedSections,
} from "@/shared";
import { useContext, useRef, useState } from "react";
import Box from "./ui/Box";
import useHeightResize from "@/hooks/useHeightResize";
import ProjectDescription from "./ui/ProjectDescription";
import useHighlightSection from "@/hooks/useHighlightSection";
import { UserPrefContext } from "@/context/UserPrefContext";
import { ProjectsInterface } from "./Projects";
import useMediaQuery from "@/hooks/useMediaQuery";

const Experience = () => {
  const { setSelectedSection, selectedLanguage } = useContext(UserPrefContext);
  const fpContainerRef = useRef<HTMLDivElement | null>(null);
  const [fpContainerHeight, setFpContainerHeight] = useState(0);
  useHeightResize({ ref: fpContainerRef, setHeight: setFpContainerHeight });
  const isTablet = useMediaQuery("(max-width: 1020px)");

  const experienceInfo: ProjectsInterface[] = [
    {
      img: "/assets/thumbnails/thumbnail-filpass.png",
      desc: {
        English:
          "Worked full-time with a project manager, product owner, and a team of frontend developers and QA testers on Filpass v2.0.",
        Filipino:
          "Nagtrabaho ng full-time kasama ang isang project manager, product owner, at isang team ng mga frontend developers at QA testers sa Filpass v2.0.",
        Bisaya:
          "Nagtrabaho og full-time uban ang project manager, product owner, ug team sa mga frontend developers ug QA testers sa Filpass v2.0.",
      },
      techUsed: "Next.js, TypeScript, Tailwind CSS, Bitbucket, Jira",
      // websiteLink: "https://filpassv2.netlify.app/",
      // learnMoreLink: "/filpass-v2",
    },
    {
      img: "/assets/thumbnails/thumbnail-table.png",
      desc: {
        English:
          "Created a dynamic & customizable table component with global & column filtering, date range filtering, simple & custom sorting, drag & drop, row selection, export, pagination, group by, dependent & independent actions, custom filters preset, and advanced filtering features with CRUD operations.",
        Filipino:
          "Gumawa ng dynamic at customizable na table component na may global at column filtering, date range filtering, simpleng at custom na sorting, drag & drop, row selection, export, pagination, group by, dependent at independent na actions, custom na preset ng filters, at advanced filtering features na may CRUD operations.",
        Bisaya:
          "Naghimo og dynamic ug customizable nga table component nga adunay global ug column filtering, date range filtering, simpleng ug custom nga sorting, drag & drop, row selection, export, pagination, group by, dependent ug independent nga actions, custom nga preset sa filters, ug advanced filtering features nga adunay CRUD operations.",
      },
      techUsed: "Next.js, TypeScript, Tailwind CSS, Bitbucket, Jira",
      // websiteLink: "https://filpassv2.netlify.app/ia/drm/applications",
      learnMoreLink: "/filpass-v2-table",
      isDescLong: true,
    },
    {
      img: "/assets/thumbnails/thumbnail-verifierTemplate-transparent.png",
      desc: {
        English: "Redesigned an old verifier and email templates.",
        Filipino:
          "Ibinago ang disenyo ng isang lumang verifier at mga email template.",
        Bisaya: "Gidesign ang daan nga verifier ug email templates.",
      },
      techUsed:
        "Next.js, TypeScript, Tailwind CSS, Bitbucket, Jira, Handlebars",
      // websiteLink: "https://filpassv2.netlify.app/ia/drm/applications",
      // learnMoreLink: "/verifier-template",
    },
  ];


  const sectionId = translatedSections.Experience[selectedLanguage];

  const experienceRef = useRef<HTMLDivElement | null>(null);
  useHighlightSection({
    ref: experienceRef,
    setSection: setSelectedSection,
    section: camelToTitleCase(sectionId),
    selectedLanguage,
  });

  const getStartAndEndDates = () => {
    let title = "Sept 2024 - Dec 2024";
    if (selectedLanguage === "Filipino" || selectedLanguage === "Bisaya") {
      title = "Set 2024 - Dis 2024";
    }

    return title;
  };

  return (
    <div
      ref={experienceRef}
      id={sectionId}
      className={sectionPaddingClassnames}
    >
      <div className={sectionTitleContainerClassnames}>
        <h2>{camelToTitleCase(sectionId)}</h2>
      </div>
      <div className={boxContainerClassnames}>
        <Box
          key="frontendDeveloperIntern"
          title="Frontend Developer Intern"
          isFoldable={true}
          childrenHeight={fpContainerHeight - EXTRA_HEIGHT}
          companyName="BEfied (fka Edufied)"
          startAndEndDates={getStartAndEndDates()}
        >
          <div
            ref={fpContainerRef}
            className={`mt-16 flex flex-col ${isTablet ? "gap-16" : "gap-12"}`}
          >
            {experienceInfo.map(
              (
                {
                  img,
                  desc,
                  techUsed,
                  websiteLink,
                  learnMoreLink,
                  isDescLong,
                }: ProjectsInterface,
                index
              ) => (
                <ProjectDescription
                  key={img}
                  img={img}
                  desc={desc}
                  techUsed={techUsed}
                  index={index}
                  websiteLink={websiteLink}
                  learnMoreLink={learnMoreLink}
                  carousel={experienceInfo.map(({ img }) => img)}
                  isDescLong={isDescLong}
                />
              )
            )}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Experience;
