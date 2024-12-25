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

  const gContainerRef = useRef<HTMLDivElement | null>(null);
  const [gContainerHeight, setGContainerHeight] = useState(0);
  useHeightResize({ ref: gContainerRef, setHeight: setGContainerHeight });

  const sContainerRef = useRef<HTMLDivElement | null>(null);
  const [sContainerHeight, setSContainerHeight] = useState(0);
  useHeightResize({ ref: sContainerRef, setHeight: setSContainerHeight });

  const cContainerRef = useRef<HTMLDivElement | null>(null);
  const [cContainerHeight, setCContainerHeight] = useState(0);
  useHeightResize({ ref: cContainerRef, setHeight: setCContainerHeight });

  const mContainerRef = useRef<HTMLDivElement | null>(null);
  const [mContainerHeight, setMContainerHeight] = useState(0);
  useHeightResize({ ref: mContainerRef, setHeight: setMContainerHeight });

  const responsiveNavbarInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/taymother/ts-navbar.mp4",
      altLink:
        "https://drive.google.com/file/d/18i9RS0hljEajKVjGc11Ih8y3oJOwfcxL/view?usp=sharing",
      desc: "Desktop & Tablet Screens",
      thumbnail: "/assets/taymother/thumbnails/ts-navbar-thumbnail.png",
    },
    {
      src: "/assets/taymother/mobile/ts-navbar-mobile-landscape.mp4",
      altLink:
        "https://drive.google.com/file/d/1ehjGuBVcUmCcV9NA5k9qk6C-fl7zTCyZ/view?usp=sharing",
      desc: "Phone Screens (Landscape)",
      thumbnail:
        "/assets/taymother/thumbnails/ts-navbar-mobile-landscape-thumbnail.PNG",
    },
    {
      src: "/assets/taymother/mobile/ts-navbar-mobile.mp4",
      altLink:
        "https://drive.google.com/file/d/1BAQiI4Y2ZmpeHSwz_8iKnimPBCB71NYL/view?usp=sharing",
      desc: "Phone Screens (Portrait)",
      thumbnail: "/assets/taymother/thumbnails/ts-navbar-mobile-thumbnail.PNG",
      isPortrait: true,
    },
  ];

  const changeThemeInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/taymother/ts-change-theme.mp4",
      altLink:
        "https://drive.google.com/file/d/1ZMEy53dvNd82uJuSQVD1huSig_XgMHOj/view?usp=sharing",
      desc: "Desktop & Tablet Screens",
      thumbnail: "/assets/taymother/thumbnails/ts-change-theme-thumbnail.png",
    },
    {
      src: "/assets/taymother/mobile/ts-change-theme-mobile-landscape.mp4",
      altLink:
        "https://drive.google.com/file/d/1MjzO2fsjgkY-rNzsBbobaQnRh2pMNrI8/view?usp=sharing",
      desc: "Phone Screens (Landscape)",
      thumbnail:
        "/assets/taymother/thumbnails/ts-change-theme-mobile-landscape-thumbnail.PNG",
    },
    {
      src: "/assets/taymother/mobile/ts-change-theme-mobile.mp4",
      altLink:
        "https://drive.google.com/file/d/1Pvm6jeZMJjuKglmF4iZrK37xNgNEhd_M/view?usp=sharing",
      desc: "Phone Screens (Portrait)",
      thumbnail:
        "/assets/taymother/thumbnails/ts-change-theme-mobile-thumbnail.PNG",
      isPortrait: true,
    },
  ];

  const gridInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/taymother/ts-grid.mp4",
      altLink:
        "https://drive.google.com/file/d/19FqVDIgC-AuJqM4ldOWBYxqzA8fBvMxq/view?usp=sharing",
      desc: "Desktop & Tablet Screens",
      thumbnail: "/assets/taymother/thumbnails/ts-grid-thumbnail.png",
    },
    {
      src: "/assets/taymother/mobile/ts-grid-mobile-landscape.mp4",
      altLink:
        "https://drive.google.com/file/d/13fO8dliczui7tL3YXetXubTcdORouhn9/view?usp=sharing",
      desc: "Phone Screens (Landscape)",
      thumbnail:
        "/assets/taymother/thumbnails/ts-grid-mobile-landscape-thumbnail.PNG",
    },
    {
      src: "/assets/taymother/mobile/ts-grid-mobile.mp4",
      altLink:
        "https://drive.google.com/file/d/10CTQgrtY-JWlwKCfH4mBOhlPemdaUrcy/view?usp=sharing",
      desc: "Phone Screens (Portrait)",
      thumbnail: "/assets/taymother/thumbnails/ts-grid-mobile-thumbnail.PNG",
      isPortrait: true,
    },
  ];

  const searchInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/taymother/ts-search.mp4",
      altLink:
        "https://drive.google.com/file/d/1PP2oeh_S0hAxJlHjzQfW9JzXae2LDzwM/view?usp=sharing",
      desc: (
        <p>
          Desktop & Tablet Screens
          <br />
          <span className="text-sm font-extralight">
            The up and down arrow keys can also be used in navigating through
            the search results, while the Enter key can be used for selecting a
            song.
          </span>
        </p>
      ),
      thumbnail: "/assets/taymother/thumbnails/ts-search-thumbnail.png",
    },
    {
      src: "/assets/taymother/mobile/ts-search-mobile-landscape.mp4",
      altLink:
        "https://drive.google.com/file/d/1ehjGuBVcUmCcV9NA5k9qk6C-fl7zTCyZ/view?usp=sharing",
      desc: "Phone Screens (Landscape)",
      thumbnail:
        "/assets/taymother/thumbnails/ts-search-mobile-landscape-thumbnail.PNG",
    },
    {
      src: "/assets/taymother/mobile/ts-search-mobile.mp4",
      altLink:
        "https://drive.google.com/file/d/1BAQiI4Y2ZmpeHSwz_8iKnimPBCB71NYL/view?usp=sharing",
      desc: "Phone Screens (Portrait)",
      thumbnail: "/assets/taymother/thumbnails/ts-search-mobile-thumbnail.PNG",
      isPortrait: true,
    },
  ];

  const carouselInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/taymother/ts-carousel.mp4",
      altLink:
        "https://drive.google.com/file/d/1hbT9GTCUfHIZ19nbiU2ey5oGAPvesIsU/view?usp=sharing",
      desc: "Desktop & Tablet Screens",
      thumbnail: "/assets/taymother/thumbnails/ts-carousel-thumbnail.png",
    },
    {
      src: "/assets/taymother/mobile/ts-carousel-mobile-landscape.mp4",
      altLink:
        "https://drive.google.com/file/d/1BZ6BhdF1RqDVqO4r7xWIADDoutyAUW7p/view?usp=sharing",
      desc: "Phone Screens (Landscape)",
      thumbnail:
        "/assets/taymother/thumbnails/ts-carousel-mobile-landscape-thumbnail.PNG",
    },
    {
      src: "/assets/taymother/mobile/ts-carousel-mobile.mp4",
      altLink:
        "https://drive.google.com/file/d/1fAiNs0GTbVucxw8FhSZdcEYrtNQbwC15/view?usp=sharing",
      desc: "Phone Screens (Portrait)",
      thumbnail:
        "/assets/taymother/thumbnails/ts-carousel-mobile-thumbnail.PNG",
      isPortrait: true,
    },
  ];

  const modalInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/taymother/ts-modal.mp4",
      altLink:
        "https://drive.google.com/file/d/1hP1l9gYo04x64Oxpd0ydiXC96FwHZ3x5/view?usp=sharing",
      desc: (
        <p>
          Desktop & Tablet Screens
          <br />
          <span className="text-sm font-extralight">
            The entire photo is always displayed no matter the screen size.
          </span>
        </p>
      ),
      thumbnail: "/assets/taymother/thumbnails/ts-modal-thumbnail.png",
    },
    {
      src: "/assets/taymother/mobile/ts-modal-mobile-landscape.mp4",
      altLink:
        "https://drive.google.com/file/d/173ui6F6BYkSNbGSjBJBtnFl91qdFMs7F/view?usp=sharing",
      desc: "Phone Screens (Landscape)",
      thumbnail:
        "/assets/taymother/thumbnails/ts-modal-mobile-landscape-thumbnail.PNG",
    },
    {
      src: "/assets/taymother/mobile/ts-modal-mobile.mp4",
      altLink:
        "https://drive.google.com/file/d/1oWlyqpZBFd5iJ0ncTE2IgsyhSXjP256E/view?usp=sharing",
      desc: "Phone Screens (Portrait)",
      thumbnail: "/assets/taymother/thumbnails/ts-modal-mobile-thumbnail.PNG",
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
            .map(({ src, altLink, desc, thumbnail, isPortrait }) => (
              <VideoDescription
                key={src}
                src={src}
                altLink={altLink}
                desc={desc}
                thumbnail={thumbnail}
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
            thumbnail={featureInfo[2].thumbnail}
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
    {
      title: "Animated Grid",
      height: gContainerHeight,
      ref: gContainerRef,
      featureInfo: gridInfo,
    },
    {
      title: "Songs Search",
      height: sContainerHeight,
      ref: sContainerRef,
      featureInfo: searchInfo,
    },
    {
      title: "Carousel",
      height: cContainerHeight,
      ref: cContainerRef,
      featureInfo: carouselInfo,
    },
    {
      title: "Responsive Modal",
      height: mContainerHeight,
      ref: mContainerRef,
      featureInfo: modalInfo,
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
