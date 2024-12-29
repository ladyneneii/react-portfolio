"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import useMediaQuery from "../hooks/useMediaQuery";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  camelToTitleCase,
  getConditionalSmoothTransition,
  getHoverStyles,
  languages,
  maxWidth,
  translatedSections,
} from "../shared";
import { IoClose } from "react-icons/io5";
import { UserPrefContext } from "@/context/UserPrefContext";
import Radio from "./ui/Radio";
import Toggle from "./ui/Toggle";
import SingleCheckbox from "./ui/SingleCheckbox";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import Dropdown from "./ui/Dropdown";
import { getAnimationsLabel, getTransitionsLabel } from "@/data/getHeroData";
import useOutsideClick from "@/hooks/useOutsideClick";

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

  const sections = Object.values(translatedSections)
    .map((translations) => translations[selectedLanguage])
    .slice(0, -1);

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

  const navigateToSection = (section: string) => {
    // const sectionHash = `#${
    //   section.charAt(0).toLowerCase() + section.slice(1)
    // }`;
    const sectionHash = `#${section}`;

    // this should come BEFORE navigate() so currentUrl gets the url of the non-root page
    const currentUrl = window.location.href;
    const delay = currentUrl.includes("/#") ? 100 : 800;

    navigate(`/${sectionHash}`); // Navigate to root with hash
    setSelectedSection(camelToTitleCase(section));
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
        className={`${getHoverStyles(disableTransitions)} ${
          selectedSection === camelToTitleCase(section) ? "text-purple" : ""
        }`}
      >
        {camelToTitleCase(section)}
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

  const renderExtraFeatures = () => {
    return (
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
            label={getTransitionsLabel(selectedLanguage)}
          />
          <SingleCheckbox
            state={disableAnimations}
            setState={setDisableAnimations}
            label={getAnimationsLabel(selectedLanguage)}
          />
        </div>
      </div>
    );
  };

  const mobNavbarRef = useRef<HTMLDivElement>(null);
  useOutsideClick({ ref: mobNavbarRef, setVisibility: setShowNavbar });

  const getNavbarColor = (isMobile?: boolean) => {
    if ((isPhone || isLandscapePhone) && !isMobile)
      return selectedTheme === "Dark" ? "bg-black/50" : "bg-purpleLight-half";
    return selectedTheme === "Dark" ? "bg-black" : "bg-purpleLight";
  };

  return (
    <div className="whitespace-nowrap">
      <div
        className={`${getNavbarColor()} fixed top-0 left-0 right-0 z-[100] ${getConditionalSmoothTransition(
          disableTransitions
        )}`}
      >
        <div
          className={`${maxWidth} px-4 py-2 flex justify-between items-center mx-auto relative`}
        >
          <div>
            {window.location.pathname === "/" ? (
              <img
                onClick={() => navigateToSection("home")}
                src={
                  selectedTheme === "Dark"
                    ? "/assets/navbar/logo-transparent-light.png"
                    : "/assets/navbar/logo-transparent-dark.png"
                }
                alt=""
                width={50}
                height={50}
                className="hover:cursor-pointer"
              />
            ) : (
              <div
                className={`rounded-full w-[50px] h-[50px] border-2 ${
                  selectedTheme === "Dark" ? "border-white" : "border-black"
                } flex justify-center items-center ${getHoverStyles(
                  disableTransitions
                )} hover:border-purple`}
              >
                <IoArrowBack onClick={() => window.history.back()} size={25} />
              </div>
            )}
          </div>
          {!isTablet && (
            <div
              className={`flex gap-16 ${getConditionalSmoothTransition(
                disableTransitions
              )} items-center justify-between`}
            >
              {renderLinks()}
            </div>
          )}
          {!isTablet ? (
            <div className="flex gap-2 items-center">
              <Toggle
                firstOption={{ label: <FaMoon />, value: "Dark" }}
                secondOption={{ label: <FiSun />, value: "Light" }}
                selectedOption={selectedTheme}
                setSelectedOption={setSelectedTheme}
              />
              <Dropdown
                trigger={
                  <BsThreeDotsVertical
                    size={35}
                    className={getHoverStyles(disableTransitions)}
                  />
                }
                content={renderExtraFeatures()}
                position="right-2 top-12"
                dropdownHeight={190}
              />
            </div>
          ) : (
            <RxHamburgerMenu
              onClick={() => setShowNavbar(!showNavbar)}
              size={35}
              className={getHoverStyles(disableTransitions)}
            />
          )}
        </div>
      </div>

      {/* SMALLER SCREENS */}
      <div
        ref={mobNavbarRef}
        className={`fixed right-0 top-0 bottom-0 ${
          !disableTransitions ? "transition-all duration-500" : ""
        } flex flex-col justify-between overflow-auto gap-16 z-[100] ${getNavbarColor(
          true
        )} ${handleShowNavbar()}`}
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
              className={getHoverStyles(disableTransitions)}
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

        <div className="flex flex-col gap-12">{renderExtraFeatures()}</div>
      </div>
    </div>
  );
};

export default Navbar;
