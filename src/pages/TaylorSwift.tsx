import {
  boxContainerClassnames,
  EXTRA_HEIGHT,
  itemsContainerClass,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
} from "@/shared";
import Button from "../components/ui/Button";
import Box from "../components/ui/Box";
import useHeightResize from "@/hooks/useHeightResize";
import { useContext, useEffect, useRef, useState } from "react";
import { UserPrefContext } from "@/context/UserPrefContext";

const TaylorSwift = () => {
  const { setSelectedSection } = useContext(UserPrefContext);
  const plContainerRef = useRef<HTMLDivElement | null>(null);
  const [plContainerHeight, setPlContainerHeight] = useState(0);
  useHeightResize({ ref: plContainerRef, setHeight: setPlContainerHeight });

  useEffect(() => {
    setSelectedSection("");
  }, [setSelectedSection]);

  return (
    <div className={sectionPaddingClassnames}>
      <div className={sectionTitleContainerClassnames}>
        <h1>Taylor Swift's Discography</h1>
      </div>
      <div className={boxContainerClassnames}>
        <Box
          key="programmingLanguages"
          title="Programming Languages"
          isFoldable={true}
          childrenHeight={plContainerHeight - EXTRA_HEIGHT}
        >
          <div ref={plContainerRef} className={itemsContainerClass}></div>
        </Box>
      </div>
      <div className="flex justify-center">
        <Button onClick={() => window.history.back()} content="Go back" />
      </div>
    </div>
  );
};

export default TaylorSwift;
