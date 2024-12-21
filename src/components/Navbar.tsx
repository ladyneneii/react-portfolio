"use client";

import { useContext, useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import useMediaQuery from "../hooks/useMediaQuery";
import { RxHamburgerMenu } from "react-icons/rx";
import { maxWidth } from "../constants";
import { IoClose } from "react-icons/io5";
import { LuSquare } from "react-icons/lu";
import { IoCheckboxOutline } from "react-icons/io5";
import { UserPrefContext } from "@/context/UserPrefContext";
import { AvailableLanguagesType } from "@/types";
import Radio from "./ui/Radio";
import Toggle from "./ui/Toggle";

const Navbar = () => {
  const sections = [
    "Home",
    "Skills",
    "Experience",
    "Projects",
    "Education & Thesis",
    "Testimonials",
  ];

  const isTablet = useMediaQuery("(max-width: 1020px)");
  const isPhone = useMediaQuery("(max-width: 620px)");
  const isLandscapePhone = useMediaQuery(
    "(max-device-width: 940px) and (orientation: landscape) and (min-aspect-ratio: 3/2)"
  );
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (!isTablet) setShowNavbar(false);
  }, [isTablet]);

  const renderLinks = () => {
    return sections.map((section) => (
      <div
        key={section}
        className="hover:cursor-pointer hover:text-purple transition-all duration-300"
      >
        {section}
      </div>
    ));
  };

  const handleShowNavbar = () => {
    let retVal;
    if (showNavbar) {
      retVal = `p-8 ${isPhone || isLandscapePhone ? "w-full" : "w-1/2"}`;
    } else {
      retVal = "w-0";
    }

    return retVal;
  };

  // LANGUAGE & DISABLE ANIMATIONS
  const languages: AvailableLanguagesType[] = ["English", "Filipino", "Bisaya"];
  const {
    selectedLanguage,
    setSelectedLanguage,
    disableAnimation,
    setDisableAnimation,
    selectedTheme,
    setSelectedTheme,
  } = useContext(UserPrefContext);

  return (
    <div className="whitespace-nowrap">
      <div
        className={`${
          selectedTheme === "Dark" ? "bg-black" : "bg-white"
        } border-2 border-blue-500 fixed top-0 left-0 right-0 transition-all duration-300`}
      >
        <div
          className={`${maxWidth} px-4 py-2 border-2 border-red-500 flex justify-between items-center mx-auto relative`}
        >
          <div>
            <img
              src={"/assets/logo-transparent.png"}
              alt=""
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
          </div>
          {!isTablet && (
            <div
              className={`flex gap-16 border-2 border-yellow-500 transition-all duration-300 items-center`}
            >
              {renderLinks()}
            </div>
          )}
          {!isTablet ? (
            // <FaMoon size={35} className="text-purple hover:cursor-pointer" />
            <Toggle
              firstOption={{ label: <FaMoon />, value: "Dark" }}
              secondOption={{ label: <FiSun />, value: "Light" }}
              selectedOption={selectedTheme}
              setSelectedOption={setSelectedTheme}
            />
          ) : (
            <RxHamburgerMenu
              onClick={() => setShowNavbar(!showNavbar)}
              size={35}
              className="hover:cursor-pointer hover:text-purple transition-all duration-300"
            />
          )}
        </div>
      </div>

      {/* SMALLER SCREENS */}
      <div
        className={`fixed right-0 top-0 bottom-0 border-2 border-yellow-500 transition-all duration-500 flex flex-col justify-between overflow-auto gap-16 ${
          selectedTheme === "Dark" ? "bg-black" : "bg-white"
        } ${handleShowNavbar()}`}
      >
        <div>
          <div
            onClick={() => setShowNavbar(false)}
            className="flex justify-end hover:cursor-pointer mb-8 hover:text-purple transition-all duration-300"
          >
            <IoClose size={35} />
          </div>
          <div
            className={`flex flex-col border-2 border-red-500 flex-wrap ${
              isPhone || isLandscapePhone ? "gap-8" : "gap-12"
            } ${isLandscapePhone ? "h-[100px] flex-wrap" : ""}`}
          >
            {renderLinks()}
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <Toggle
            firstOption={{ label: <FaMoon />, value: "Dark" }}
            secondOption={{ label: <FiSun />, value: "Light" }}
            selectedOption={selectedTheme}
            setSelectedOption={setSelectedTheme}
          />
          <div className="flex flex-col gap-4">
            <div className="flex justify-between flex-wrap gap-4 gap-y-2">
              <Radio
                availableOptions={languages}
                selectedOption={selectedLanguage}
                setSelectedOption={setSelectedLanguage}
              />
            </div>
            <div
              onClick={() => setDisableAnimation(!disableAnimation)}
              className={`flex gap-2 items-center hover:cursor-pointer hover:underline hover:text-purple transition-all duration-300 ${
                disableAnimation ? "text-purple" : ""
              }`}
            >
              {disableAnimation ? (
                <IoCheckboxOutline size={25} />
              ) : (
                <LuSquare size={25} />
              )}
              Disable animations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
