import Button from "./ui/Button";
import { IoCheckboxOutline, IoMail } from "react-icons/io5";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  getConditionalSmoothTransition,
  languages,
  maxWidth,
  minWidth,
} from "@/shared";
import { useContext, useRef, useState } from "react";
import { UserPrefContext } from "@/context/UserPrefContext";
import { LuSquare } from "react-icons/lu";
import useMediaQuery from "@/hooks/useMediaQuery";
import Select from "./ui/Select";
import { AvailableLanguagesType } from "@/types";
import useHeightResize from "@/hooks/useHeightResize";

const Hero = () => {
  const {
    selectedLanguage,
    setSelectedLanguage,
    disableAnimation,
    setDisableAnimation,
    selectedTheme,
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
      <div className="flex flex-col gap-4">
        <h4>
          I am <span className="font-normal">Ernest Curativo</span>—a software
          engineer in{" "}
          <span className="whitespace-nowrap">Cebu, Philippines.</span>
        </h4>
        <Button onClick={() => console.log("lkdasf")} content="View CV" />
      </div>
    );
  };

  return (
    <div
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
        className={`absolute z-30 left-0 right-0 flex gap-16 px-4 justify-between top-1/2 -translate-y-1/2 ${
          !isTablet ? "" : "flex-col"
        } ${maxWidth} ${minWidth} mx-auto`}
      >
        <div className={"flex gap-16 flex-col max-w-[700px]"}>
          <h1>
            Transforming your ideas into{" "}
            <span className="text-purple font-extralight italic">elegant</span>{" "}
            code and{" "}
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
                  disableAnimation
                )}`}
              />
              <FaGithub
                size={25}
                className={`hover:cursor-pointer hover:text-purple ${getConditionalSmoothTransition(
                  disableAnimation
                )}`}
              />
              <FaLinkedin
                size={25}
                className={`hover:cursor-pointer hover:text-purple ${getConditionalSmoothTransition(
                  disableAnimation
                )}`}
              />
              <FaInstagram
                size={25}
                className={`hover:cursor-pointer hover:text-purple ${getConditionalSmoothTransition(
                  disableAnimation
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
              className={`flex gap-2 flex-col  ${
                !isTablet ? "items-center" : "justify-between"
              }`}
            >
              <div
                onClick={() => setDisableAnimation(!disableAnimation)}
                className={`flex gap-2 items-center hover:cursor-pointer hover:underline hover:text-purple ${getConditionalSmoothTransition(
                  disableAnimation
                )} ${disableAnimation ? "text-purple" : ""}`}
              >
                {disableAnimation ? (
                  <IoCheckboxOutline size={25} />
                ) : (
                  <LuSquare size={25} />
                )}
                Disable animations
              </div>
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
  );
};

export default Hero;
