import {
  boxContainerClassnames,
  EXTRA_HEIGHT,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
} from "@/shared";
import Button from "../components/ui/Button";
import Box from "../components/ui/Box";
import useHeightResize from "@/hooks/useHeightResize";
import { useContext, useEffect, useRef, useState } from "react";
import { UserPrefContext } from "@/context/UserPrefContext";
import VideoDescription, {
  VideoDescriptionInterface,
} from "@/components/ui/VideoDescription";
import useMediaQuery from "@/hooks/useMediaQuery";

const TaylorSwift = () => {
  const { setSelectedSection } = useContext(UserPrefContext);
  const plContainerRef = useRef<HTMLDivElement | null>(null);
  const [plContainerHeight, setPlContainerHeight] = useState(0);
  useHeightResize({ ref: plContainerRef, setHeight: setPlContainerHeight });
  const isTablet2 = useMediaQuery("(max-width: 880px)");

  useEffect(() => {
    setSelectedSection("");
  }, [setSelectedSection]);

  const responsiveNavbarInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/taymother/ts-navbar.mp4",
      altLink:
        "https://drive.google.com/file/d/18i9RS0hljEajKVjGc11Ih8y3oJOwfcxL/view?usp=sharing",
      desc: "Desktop & Tablet Screens",
    },
    {
      src: "/assets/taymother/mobile/ts-navbar-mobile-landscape.mp4",
      altLink:
        "https://drive.google.com/file/d/1ehjGuBVcUmCcV9NA5k9qk6C-fl7zTCyZ/view?usp=sharing",
      desc: "Phone Screens (Landscape)",
    },
    {
      src: "/assets/taymother/mobile/ts-navbar-mobile.mp4",
      altLink:
        "https://drive.google.com/file/d/1BAQiI4Y2ZmpeHSwz_8iKnimPBCB71NYL/view?usp=sharing",
      desc: "Phone Screens (Portrait)",
      isPortrait: true,
    },
  ];

  return (
    <div className={sectionPaddingClassnames}>
      <div className={sectionTitleContainerClassnames}>
        <h1>Taylor Swift's Discography</h1>
      </div>
      <div className={boxContainerClassnames}>
        <Box
          key="responsiveNavbar"
          title="Responsive Navbar"
          isFoldable={true}
          childrenHeight={plContainerHeight - EXTRA_HEIGHT}
        >
          <div
            ref={plContainerRef}
            className={`flex gap-8 items-center ${isTablet2 ? "flex-col" : ""}`}
          >
            <div
              className={`flex flex-col gap-8 border-2 border-yellow-500 ${
                isTablet2 ? "w-full" : "w-1/2"
              }`}
            >
              {responsiveNavbarInfo
                .slice(0, -1)
                .map(({ src, altLink, desc, isPortrait }) => (
                  <VideoDescription
                    key={src}
                    src={src}
                    altLink={altLink}
                    desc={desc}
                    isPortrait={isPortrait}
                    hasDiffScreenSizes={true}
                  />
                ))}
            </div>
            <div
              className={`flex-grow border-2 border-red-500 ${
                isTablet2 ? "w-full" : "w-1/2"
              }`}
            >
              <VideoDescription
                src={responsiveNavbarInfo[2].src}
                altLink={responsiveNavbarInfo[2].altLink}
                desc={responsiveNavbarInfo[2].desc}
                isPortrait={true}
                hasDiffScreenSizes={true}
              />
            </div>
          </div>
        </Box>
      </div>
      <div className="flex justify-center">
        <Button onClick={() => window.history.back()} content="Go back" />
      </div>
    </div>
  );
};

export default TaylorSwift;
