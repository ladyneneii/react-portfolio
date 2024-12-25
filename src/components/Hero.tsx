import Button from "./ui/Button";
import { IoMail } from "react-icons/io5";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  getConditionalSmoothTransition,
  languages,
  maxWidth,
  minWidth,
} from "@/shared";
import { useContext, useRef, useState } from "react";
import { UserPrefContext } from "@/context/UserPrefContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import Select from "./ui/Select";
import { AvailableLanguagesType } from "@/types";
import useHeightResize from "@/hooks/useHeightResize";
import SingleCheckbox from "./ui/SingleCheckbox";
import useHighlightSection from "@/hooks/useHighlightSection";

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
  const marginTop = "mt-[66px]";
  const isTablet = useMediaQuery("(max-width: 1020px)");
  const isTablet2 = useMediaQuery("(max-width: 800px)");
  const isPhone = useMediaQuery("(max-width: 660px)");
  const isLandscapePhone = useMediaQuery(
    "(max-device-width: 940px) and (orientation: landscape) and (min-aspect-ratio: 3/2)"
  );

  const heroInfoContainerRef = useRef<HTMLDivElement | null>(null);
  const [heroImageHeight, setHeroImageHeight] = useState(700);
  useHeightResize({ ref: heroInfoContainerRef, setHeight: setHeroImageHeight });

  const renderIntroduction = () => {
    return (
      <div
        className={`flex flex-col gap-4 ${
          isTablet2 ? "items-center text-center" : ""
        }`}
      >
        <h4 className="font-extralight">
          I am <span className="font-normal">Ernest Curativo</span>—a{" "}
          <span className="text-purple">software engineer</span> in{" "}
          <span className="whitespace-nowrap">Cebu, Philippines.</span>
        </h4>
        <div className={`flex gap-2 ${isPhone ? "flex-col items-center" : ""}`}>
          <Button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1ta_HLzIx5MN4DGbTTlYkPlWe12cfC23O/view?usp=sharing",
                "_blank"
              )
            }
            content="View CV"
          />
          <a
            href="/src/data/Curativo-CV.pdf" // Path to the PDF file
            download="Curativo-CV.pdf" // File name for the download
          >
            <Button onClick={() => null} content="Download CV" />
          </a>
        </div>
      </div>
    );
  };

  const homeRef = useRef<HTMLDivElement | null>(null);
  useHighlightSection({
    ref: homeRef,
    setSection: setSelectedSection,
    section: "Home",
  });

  return (
    <div id="home" className="border-[0.5px] border-black">
      <div
        ref={homeRef}
        className={`relative ${marginTop} ${minWidth}`}
        style={{
          backgroundImage: `url(${
            selectedTheme === "Dark"
              ? "/assets/background-transparent-black.png"
              : "/assets/background-transparent-white.png"
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
          <div
            className={`flex gap-16 flex-col ${isTablet2 ? "text-center" : ""}`}
          >
            <h1>
              Transforming your ideas into{" "}
              <span className="text-purple font-extralight italic">
                elegant
              </span>{" "}
              <span className="whitespace-nowrap">code and</span>{" "}
              <span className="text-purple font-extralight italic">
                meaningful
              </span>{" "}
              creations
            </h1>

            {!isTablet && renderIntroduction()}
          </div>

          <div
            className={`flex ${
              !isTablet || isTablet2
                ? "flex-col justify-between items-center gap-12"
                : "gap-24"
            } flex-shrink-0`}
          >
            <div className="flex flex-col gap-4 flex-shrink-0">
              <img
                src="/assets/hero-me.jpg"
                alt=""
                width={!isPhone && !isLandscapePhone ? 300 : 250}
                height={!isPhone && !isLandscapePhone ? 300 : 250}
                className="rounded-full shadow-custom"
              />
              <div className="flex gap-3 justify-center">
                <IoMail
                  size={25}
                  className={`hover:cursor-pointer hover:text-purple ${getConditionalSmoothTransition(
                    disableTransitions
                  )}`}
                />
                <FaGithub
                  size={25}
                  className={`hover:cursor-pointer hover:text-purple ${getConditionalSmoothTransition(
                    disableTransitions
                  )}`}
                />
                <FaLinkedin
                  size={25}
                  className={`hover:cursor-pointer hover:text-purple ${getConditionalSmoothTransition(
                    disableTransitions
                  )}`}
                />
                <FaInstagram
                  size={25}
                  className={`hover:cursor-pointer hover:text-purple ${getConditionalSmoothTransition(
                    disableTransitions
                  )}`}
                />
              </div>
            </div>

            <div
              className={`flex flex-col ${
                !isTablet ? "items-center" : "justify-between"
              } gap-24`}
            >
              {isTablet && renderIntroduction()}
              <div
                className={`flex gap-2 flex-col ${
                  isTablet2 ? "items-center" : ""
                }`}
              >
                <SingleCheckbox
                  state={disableTransitions}
                  setState={setDisableTransitions}
                  label="Disable transitions"
                />
                <SingleCheckbox
                  state={disableAnimations}
                  setState={setDisableAnimations}
                  label="Disable animations"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
