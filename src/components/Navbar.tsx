"use client";

import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import useMediaQuery from "../hooks/useMediaQuery";
import { RxHamburgerMenu } from "react-icons/rx";
import { maxWidth } from "../constants";
import { IoClose } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa6";

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
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (!isTablet) setShowNavbar(false);
  }, [isTablet]);

  const renderLinks = () => {
    return sections.map((section) => (
      <div
        key={section}
        className="hover:cursor-pointer hover:text-purple whitespace-nowrap transition-all duration-300"
      >
        {section}
      </div>
    ));
  };

  // LANGUAGE
  const languages = ["English", "Filipino", "Bisaya"];
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <>
      <div className="bg-black border-2 border-blue-500 fixed top-0 left-0 right-0">
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
            <FaMoon size={35} className="text-purple hover:cursor-pointer" />
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
        className={`fixed right-0 top-0 bottom-0 bg-black border-2 border-yellow-500 transition-all duration-500 flex flex-col justify-between ${
          showNavbar ? "w-1/2 p-8" : "w-0"
        }`}
      >
        <div>
          <div
            onClick={() => setShowNavbar(false)}
            className="flex justify-end hover:cursor-pointer mb-4 hover:text-purple transition-all duration-300"
          >
            <IoClose size={35} />
          </div>
          <div className="flex flex-col gap-16">{renderLinks()}</div>
        </div>
        <div className="border-2 border-red-500">
          <FaMoon size={35} className="text-purple hover:cursor-pointer mb-4" />
          <div className="flex justify-between items-center">
            {languages.map((language) => (
              <div
                key={language}
                onClick={() => setSelectedLanguage(language)}
                className={`flex gap-2 items-center hover:cursor-pointer hover:underline hover:text-purple transition-all duration-300 ${
                  selectedLanguage === language ? "text-purple" : ""
                }`}
              >
                <FaRegCircle size={25} />
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
