import {
  boxContainerClassnames,
  EXTRA_HEIGHT,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
} from "@/shared";
import Button from "../components/ui/Button";
import Box from "../components/ui/Box";
import useHeightResize from "@/hooks/useHeightResize";
import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { UserPrefContext } from "@/context/UserPrefContext";
import VideoDescription, {
  VideoDescriptionInterface,
} from "@/components/ui/VideoDescription";
import useMediaQuery from "@/hooks/useMediaQuery";

interface FeaturesList {
  title: string;
  height: number;
  ref: MutableRefObject<HTMLDivElement | null>;
  featureInfo: VideoDescriptionInterface[];
}

const TaylorSwift = () => {
  const { setSelectedSection } = useContext(UserPrefContext);
  const isTablet2 = useMediaQuery("(max-width: 880px)");

  useEffect(() => {
    setSelectedSection("");
  }, [setSelectedSection]);

  const rnContainerRef = useRef<HTMLDivElement | null>(null);
  const [rnContainerHeight, setRnContainerHeight] = useState(0);
  useHeightResize({ ref: rnContainerRef, setHeight: setRnContainerHeight });

  const ctContainerRef = useRef<HTMLDivElement | null>(null);
  const [ctContainerHeight, setCtContainerHeight] = useState(0);
  useHeightResize({ ref: ctContainerRef, setHeight: setCtContainerHeight });

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

  const changeThemeInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/taymother/ts-change-theme.mp4",
      altLink:
        "https://drive.google.com/file/d/1ZMEy53dvNd82uJuSQVD1huSig_XgMHOj/view?usp=sharing",
      desc: "Desktop & Tablet Screens",
    },
    {
      src: "/assets/taymother/mobile/ts-change-theme-mobile-landscape.mp4",
      altLink:
        "https://drive.google.com/file/d/1MjzO2fsjgkY-rNzsBbobaQnRh2pMNrI8/view?usp=sharing",
      desc: "Phone Screens (Landscape)",
    },
    {
      src: "/assets/taymother/mobile/ts-change-theme-mobile.mp4",
      altLink:
        "https://drive.google.com/file/d/1Pvm6jeZMJjuKglmF4iZrK37xNgNEhd_M/view?usp=sharing",
      desc: "Phone Screens (Portrait)",
      isPortrait: true,
    },
  ];

  const renderTsFeatureVids = (
    ref: MutableRefObject<HTMLDivElement | null>,
    featureInfo: VideoDescriptionInterface[],
    index: number
  ) => {
    return (
      <div
        ref={ref}
        className={`flex gap-8 items-center ${isTablet2 ? "flex-col" : ""}`}
      >
        <div
          className={`flex flex-col gap-8 justify-center ${
            isTablet2 ? "w-full" : "w-1/2"
          } ${index % 2 === 0 || isTablet2 ? "order-1" : "order-2"}`}
        >
          {featureInfo
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
          className={`${isTablet2 ? "w-full" : "w-1/2"} ${
            index % 2 === 1 || isTablet2 ? "order-1" : "order-2"
          }`}
        >
          <VideoDescription
            src={featureInfo[2].src}
            altLink={featureInfo[2].altLink}
            desc={featureInfo[2].desc}
            isPortrait={true}
            hasDiffScreenSizes={true}
          />
        </div>
      </div>
    );
  };

  const featuresList: FeaturesList[] = [
    {
      title: "Responsive Navbar",
      height: rnContainerHeight,
      ref: rnContainerRef,
      featureInfo: responsiveNavbarInfo,
    },
    {
      title: "Theme Changes",
      height: ctContainerHeight,
      ref: ctContainerRef,
      featureInfo: changeThemeInfo,
    },
  ];

  const renderTsBoxes = () => {
    return featuresList.map(({ title, height, ref, featureInfo }, index) => (
      <Box
        key={title}
        title={title}
        isFoldable={true}
        childrenHeight={height - EXTRA_HEIGHT}
      >
        {renderTsFeatureVids(ref, featureInfo, index)}
      </Box>
    ));
  };

  return (
    <div className={sectionPaddingClassnames}>
      <div className={sectionTitleContainerClassnames}>
        <h1>Taylor Swift's Discography</h1>
      </div>
      <div className={boxContainerClassnames}>{renderTsBoxes()}</div>
      <div className="flex justify-center">
        <Button onClick={() => window.history.back()} content="Go back" />
      </div>
    </div>
  );
};

export default TaylorSwift;
