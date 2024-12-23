import { boxContainerClassnames, sectionPaddingClassnames, sectionTitleContainerClassnames } from "@/shared";
import React, { useRef, useState } from "react";
import Box from "./ui/Box";
import useHeightResize from "@/hooks/useHeightResize";
import { EXTRA_SPACE } from "./Skills";

const Experience = () => {
  const fpContainerRef = useRef<HTMLDivElement | null>(null);
  const [fpContainerHeight, setFpContainerHeight] = useState(0);
  useHeightResize({ ref: fpContainerRef, setHeight: setFpContainerHeight });

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
        >
          <div ref={fpContainerRef}>
            asdfkjadks
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Experience;
