"use client";

import { useContext, useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import useMediaQuery from "../hooks/useMediaQuery";
import { RxHamburgerMenu } from "react-icons/rx";
import { getConditionalSmoothTransition, languages, maxWidth } from "../shared";
import { IoClose } from "react-icons/io5";
import { UserPrefContext } from "@/context/UserPrefContext";
import Radio from "./ui/Radio";
import Toggle from "./ui/Toggle";
import { SectionsType } from "@/types";
import SingleCheckbox from "./ui/SingleCheckbox";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // LANGUAGE & DISABLE TRANSITIONS
  const {
    selectedLanguage,
    setSelectedLanguage,
    disableTransitions,
    setDisableTransitions,
    disableAnimations,
    setDisableAnimations,
    selectedTheme,
    setSelectedTheme,
    selectedSection,
    setSelectedSection,
  } = useContext(UserPrefContext);

  const sections: SectionsType[] = [
    "Home",
    "Skills",
    "Experience",
    "Projects",
    "Thesis",
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

  const navigate = useNavigate();

  const navigateToSection = (section: SectionsType) => {
    const sectionHash = `#${
      section.charAt(0).toLowerCase() + section.slice(1)
    }`;

    // this should come BEFORE navigate() so currentUrl gets the url of the non-root page
    const currentUrl = window.location.href;
    console.log(currentUrl);
    const delay = currentUrl.includes("/#") ? 100 : 1000;

    navigate(`/${sectionHash}`); // Navigate to root with hash
    setSelectedSection(section);
    setShowNavbar(false);

    // Delay scroll to allow page navigation
    setTimeout(() => {
      const targetSection = document.getElementById(sectionHash.slice(1));

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: disableTransitions ? "auto" : "smooth",
        });
      }
    }, delay); // Longer delay to allow resizing to finish so it is able to navigate to the right section
  };

  const renderLinks = () => {
    return sections.map((section) => (
      <div
        key={section}
        onClick={() => navigateToSection(section)}
        className={`hover:cursor-pointer hover:text-purple ${
          selectedSection === section ? "text-purple" : ""
        } ${getConditionalSmoothTransition(disableTransitions)}`}
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

  return (
    <div className="whitespace-nowrap">
      <div
        className={`${
          selectedTheme === "Dark" ? "bg-black" : "bg-white"
        } fixed top-0 left-0 right-0 z-[100] ${getConditionalSmoothTransition(
          disableTransitions
        )}`}
      >
        <div
          className={`${maxWidth} px-4 py-2 flex justify-between items-center mx-auto relative`}
        >
          <div>
            <img
              onClick={() => navigateToSection("Home")}
              src={"/assets/logo-transparent.png"}
              alt=""
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
          </div>
          {!isTablet && (
            <div
              className={`flex gap-16 ${getConditionalSmoothTransition(
                disableTransitions
              )} items-center`}
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
              className={`hover:cursor-pointer hover:text-purple ${getConditionalSmoothTransition(
                disableTransitions
              )}`}
            />
          )}
        </div>
      </div>

      {/* SMALLER SCREENS */}
      <div
        className={`fixed right-0 top-0 bottom-0 ${
          !disableTransitions ? "transition-all duration-500" : ""
        } flex flex-col justify-between overflow-auto gap-16 z-[100] ${
          selectedTheme === "Dark" ? "bg-black" : "bg-white"
        } ${handleShowNavbar()}`}
      >
        <div>
          <div className={`flex justify-between items-center mb-8`}>
            <Toggle
              firstOption={{ label: <FaMoon />, value: "Dark" }}
              secondOption={{ label: <FiSun />, value: "Light" }}
              selectedOption={selectedTheme}
              setSelectedOption={setSelectedTheme}
            />
            <IoClose
              onClick={() => setShowNavbar(false)}
              size={35}
              className={`hover:cursor-pointer hover:text-purple ${getConditionalSmoothTransition(
                disableTransitions
              )}`}
            />
          </div>
          <div
            className={`flex flex-col flex-wrap ${
              isPhone || isLandscapePhone ? "gap-8" : "gap-12"
            } ${isLandscapePhone ? "h-[100px] flex-wrap" : ""}`}
          >
            {renderLinks()}
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between flex-wrap gap-4 gap-y-2">
              <Radio
                availableOptions={languages}
                selectedOption={selectedLanguage}
                setSelectedOption={setSelectedLanguage}
              />
            </div>
            <div className="flex flex-col gap-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
