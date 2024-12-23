import {
  boxContainerClassnames,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
} from "@/shared";
import { useRef, useState } from "react";
import Box from "./ui/Box";
import useHeightResize from "@/hooks/useHeightResize";
import { EXTRA_SPACE } from "./Skills";
import { renderProjects } from "./functions/renderProjects";
import { useNavigate } from "react-router-dom";

export interface ProjectsInterface {
  img: string;
  desc: string;
  techUsed: string;
  websiteLink?: string;
  learnMoreLink?: string;
}

const Experience = () => {
  const fpContainerRef = useRef<HTMLDivElement | null>(null);
  const [fpContainerHeight, setFpContainerHeight] = useState(0);
  useHeightResize({ ref: fpContainerRef, setHeight: setFpContainerHeight });

  const projectsInfo: ProjectsInterface[] = [
    {
      img: "/assets/thumbnail-filpass.png",
      desc: "Worked full-time with a project manager, product owner, and a team of frontend developers and QA testers on Filpass v2.0.",
      techUsed: "Next.js, TypeScript, Tailwind CSS, Bitbucket, Jira",
      // websiteLink: "https://filpassv2.netlify.app/",
      // learnMoreLink: "/filpass-v2",
    },
    {
      img: "/assets/thumbnail-table.png",
      desc: "Created a dynamic & customizable table component with global & column filtering, date range filtering, simple & custom sorting, drag & drop, row selection, export, pagination, group by, dependent & independent actions, custom filters preset, and advanced filtering features with CRUD operations.",
      techUsed: "Next.js, TypeScript, Tailwind CSS, Bitbucket, Jira",
      // websiteLink: "https://filpassv2.netlify.app/ia/drm/applications",
      // learnMoreLink: "/filpass-v2-table",
    },
    {
      img: "/assets/thumbnail-verifierTemplate-transparent.png",
      desc: "Redesigned an old verifier and email templates.",
      techUsed:
        "Next.js, TypeScript, Tailwind CSS, Bitbucket, Jira, Handlebars",
      // websiteLink: "https://filpassv2.netlify.app/ia/drm/applications",
      // learnMoreLink: "/verifier-template",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className={sectionPaddingClassnames}>
      <div className={sectionTitleContainerClassnames}>
        <h1>Experience</h1>
      </div>
      <div className={boxContainerClassnames}>
        <Box
          key="frontendDeveloperIntern"
          title="Frontend Developer Intern"
          isFoldable={true}
          childrenHeight={fpContainerHeight - EXTRA_SPACE}
          companyName="BEfied (fka Edufied)"
          startAndEndDates="Sept 2024 - Dec 2024"
        >
          <div ref={fpContainerRef} className="mt-16 flex flex-col gap-12">
            {renderProjects(projectsInfo, navigate)}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Experience;
