import Button from "./ui/Button";
import {
  camelToTitleCase,
  CVFilename,
  CVFilepath,
  getVariants,
  languages,
  maxWidth,
  minWidth,
  redirectToNewPage,
  translatedSections,
  viewCVLink,
} from "@/shared";
import { useContext, useRef, useState } from "react";
import { UserPrefContext } from "@/context/UserPrefContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import Select from "./ui/Select";
import { AvailableLanguagesType } from "@/types";
import useHeightResize from "@/hooks/useHeightResize";
import SingleCheckbox from "./ui/SingleCheckbox";
import useHighlightSection from "@/hooks/useHighlightSection";
import { renderSocials } from "./functions/renderSocials";
import { motion } from "framer-motion";
import {
  getAnimationsLabel,
  getDownloadCVLabel,
  getIntro,
  getTransitionsLabel,
  getValueProp,
  getViewCVLabel,
} from "@/data/getHeroData";
import Carousel from "./ui/Carousel";

const Hero = () => {
  const {
    selectedLanguage,
    setSelectedLanguage,
    disableTransitions,
    setDisableTransitions,
    disableAnimations,
    setDisableAnimations,
    selectedTheme,
    setSelectedSection,
  } = useContext(UserPrefContext);
  const marginTop = "mt-[66px]"; // navbar height
  const isTablet = useMediaQuery("(max-width: 1020px)");
  const isTablet2 = useMediaQuery("(max-width: 800px)");
  const isPhone = useMediaQuery("(max-width: 660px)");
  const isLandscapePhone = useMediaQuery(
    "(max-device-width: 940px) and (orientation: landscape) and (min-aspect-ratio: 3/2)"
  );

  const heroInfoContainerRef = useRef<HTMLDivElement | null>(null);
  const [heroImageHeight, setHeroImageHeight] = useState(700);
  useHeightResize({ ref: heroInfoContainerRef, setHeight: setHeroImageHeight });

  const getCVButtonsStyles = () => {
    let style = "";
    if (selectedLanguage !== "English" && isTablet) style = "flex-col";
    if (isTablet2) style = "";
    if (isPhone) style = "flex-col items-center";

    return style;
  };

  const renderIntroduction = () => {
    return (
      <div
        className={`flex flex-col gap-4 ${
          isTablet2 ? "items-center text-center" : ""
        }`}
      >
        {getIntro(selectedLanguage)}
        <div className={`flex gap-2 ${getCVButtonsStyles()}`}>
          <a href={CVFilepath} download={CVFilename}>
            <Button
              onClick={() => null}
              content={getDownloadCVLabel(selectedLanguage)}
            />
          </a>
          <Button
            onClick={() => redirectToNewPage(viewCVLink)}
            content={getViewCVLabel(selectedLanguage)}
            isExternal={true}
          />
        </div>
      </div>
    );
  };

  const sectionId = translatedSections.Home[selectedLanguage];

  const homeRef = useRef<HTMLDivElement | null>(null);
  useHighlightSection({
    ref: homeRef,
    setSection: setSelectedSection,
    section: camelToTitleCase(sectionId),
    selectedLanguage,
  });

  const Wrapper = disableAnimations ? "div" : motion.div;

  const [showCarousel, setShowCarousel] = useState(false);
  const [imgIdx, setImgIdx] = useState(-1);
  const heroProfileImg = "/assets/hero/hero-me.jpg";

  return (
    <>
      <div
        id={sectionId}
        className={`border-[0.5px] ${
          selectedTheme === "Dark" ? "border-black" : "border-white"
        }`}
      >
        <div
          ref={homeRef}
          className={`relative ${marginTop} ${minWidth}`}
          style={{
            backgroundImage: `url(${
              selectedTheme === "Dark"
                ? "/assets/hero/background-transparent-black.png"
                : "/assets/hero/background-transparent-purple-light.png"
            })`,
            backgroundSize: "cover",
            // backgroundSize: "auto",
            // backgroundRepeat: "repeat",
            backgroundPosition: "center",
            height: heroImageHeight,
          }}
        >
          <div
            ref={heroInfoContainerRef}
            className={`absolute z-30 left-0 right-0 gap-12 flex px-4 justify-between top-1/2 -translate-y-1/2 ${
              !isTablet ? "" : "flex-col"
            } ${maxWidth} ${minWidth} mx-auto`}
          >
            <Wrapper
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={getVariants()}
              className={`flex gap-16 flex-col ${
                isTablet2 ? "text-center" : "max-w-[800px]"
              }`}
            >
              {getValueProp(selectedLanguage)}
              {!isTablet && renderIntroduction()}
            </Wrapper>

            <Wrapper
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={getVariants()}
              className={`flex ${
                !isTablet || isTablet2
                  ? "flex-col justify-between items-center gap-12"
                  : "gap-24"
              } flex-shrink-0`}
            >
              <div className="flex flex-col gap-4 flex-shrink-0">
                <img
                  onClick={() => {
                    setShowCarousel(true);
                    setImgIdx(0);
                  }}
                  src={heroProfileImg}
                  alt=""
                  width={!isPhone && !isLandscapePhone ? 300 : 250}
                  height={!isPhone && !isLandscapePhone ? 300 : 250}
                  className="rounded-full shadow-custom hover:cursor-pointer"
                />
                {renderSocials(disableTransitions)}
              </div>

              <div
                className={`flex flex-col ${
                  !isTablet ? "items-center" : "justify-between"
                } gap-24`}
              >
                {isTablet && renderIntroduction()}
                <div
                  className={`flex gap-2 flex-col ${
                    isTablet && !isTablet2 ? "" : "items-center"
                  }`}
                >
                  <SingleCheckbox
                    state={disableTransitions}
                    setState={setDisableTransitions}
                    label={getTransitionsLabel(selectedLanguage)}
                  />
                  <SingleCheckbox
                    state={disableAnimations}
                    setState={setDisableAnimations}
                    label={getAnimationsLabel(selectedLanguage)}
                  />
                  <Select
                    selectedOption={selectedLanguage}
                    options={languages.map((language) => ({
                      label: language,
                      value: language,
                    }))}
                    onChange={(value) =>
                      setSelectedLanguage(value as AvailableLanguagesType)
                    }
                  />
                </div>
              </div>
            </Wrapper>
          </div>
        </div>
      </div>

      <Carousel
        imgIdx={imgIdx}
        setImgIdx={setImgIdx}
        carousel={[heroProfileImg]}
        showCarousel={showCarousel}
        setShowCarousel={setShowCarousel}
      />
    </>
  );
};

export default Hero;
