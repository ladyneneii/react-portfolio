import Button from "./ui/Button";
import { IoCheckboxOutline, IoMail } from "react-icons/io5";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { languages, renderSmoothTransition } from "@/shared";
import { useContext } from "react";
import { UserPrefContext } from "@/context/UserPrefContext";
import { LuSquare } from "react-icons/lu";
import useMediaQuery from "@/hooks/useMediaQuery";
import Select from "./ui/Select";
import { AvailableLanguagesType } from "@/types";

const Hero = () => {
  const {
    selectedLanguage,
    setSelectedLanguage,
    disableAnimation,
    setDisableAnimation,
  } = useContext(UserPrefContext);
  const marginTop = "mt-[66px]";
  const isTablet = useMediaQuery("(max-width: 1020px)");

  const renderIntroduction = () => {
    return (
      <div className="flex flex-col gap-4">
        <h2 className={`font-extralight text-[28px]`}>
          I am <span className="font-normal">Ernest Curativo</span>—a software
          engineer in{" "}
          <span className="whitespace-nowrap">Cebu, Philippines.</span>
        </h2>
        <Button onClick={() => console.log("lkdasf")} content="View CV" />
      </div>
    );
  };

  return (
    <div className={`border-2 border-red-500 relative ${marginTop}`}>
      <img
        src="/assets/background.png"
        className={`opacity-10 w-[2040px] ${
          !isTablet ? "min-h-[700px]" : "min-h-[1200px]"
        } object-cover`}
      />
      <div
        className={`border-2 border-yellow-500 absolute z-30 left-0 right-0 flex gap-16 px-4 justify-between ${
          !isTablet ? "top-1/2 -translate-y-1/2" : "flex-col top-0"
        }`}
      >
        <div
          className={
            "border-2 border-blue-500 flex gap-16 flex-col max-w-[700px]"
          }
        >
          <h1 className={`text-[60px]`}>
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
          className={`border-2 border-pink-500 flex ${
            !isTablet ? "flex-col justify-between" : ""
          } gap-16 flex-shrink-0`}
        >
          <div className="flex flex-col gap-4">
            <img
              src="/assets/hero-me.jpg"
              alt=""
              width={300}
              height={300}
              className="rounded-full"
            />
            <div className="flex gap-3 justify-center border-2 border-red-500">
              <IoMail
                size={25}
                className={`hover:cursor-pointer hover:text-purple ${
                  !disableAnimation ? renderSmoothTransition() : ""
                }`}
              />
              <FaGithub
                size={25}
                className={`hover:cursor-pointer hover:text-purple ${
                  !disableAnimation ? renderSmoothTransition() : ""
                }`}
              />
              <FaLinkedin
                size={25}
                className={`hover:cursor-pointer hover:text-purple ${
                  !disableAnimation ? renderSmoothTransition() : ""
                }`}
              />
              <FaInstagram
                size={25}
                className={`hover:cursor-pointer hover:text-purple ${
                  !disableAnimation ? renderSmoothTransition() : ""
                }`}
              />
            </div>
          </div>

          <div
            className={`flex flex-col ${
              !isTablet ? "items-center" : "justify-between"
            } gap-4 border-2 border-yellow-500`}
          >
            {isTablet && renderIntroduction()}
            <div className={`flex gap-2 ${!isTablet ? "flex-col items-center" : "justify-between"}`}>
              <div
                onClick={() => setDisableAnimation(!disableAnimation)}
                className={`flex gap-2 items-center hover:cursor-pointer hover:underline hover:text-purple ${
                  !disableAnimation ? renderSmoothTransition() : ""
                } ${disableAnimation ? "text-purple" : ""}`}
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
