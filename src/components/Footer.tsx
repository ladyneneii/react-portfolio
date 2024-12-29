import {
  CVFilename,
  CVFilepath,
  getHoverStyles,
  minWidth,
  viewCVLink,
} from "@/shared";
import { renderSocials } from "./functions/renderSocials";
import { useContext } from "react";
import { UserPrefContext } from "@/context/UserPrefContext";
import { getDownloadCVLabel, getViewCVLabel } from "@/data/getHeroData";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const { disableTransitions, selectedLanguage } = useContext(UserPrefContext);
  const currentYear = new Date().getFullYear();

  const colItemsCenter = "flex flex-col items-center";

  const renderLinks = (classes?: string) => {
    return (
      <div className={classes}>
        <div className={`${colItemsCenter} gap-2`}>
          {renderSocials(disableTransitions)}
          <div className={colItemsCenter}>
            <a
              href="mailto:ernestcurativo@gmail.com"
              className={getHoverStyles(disableTransitions)}
            >
              ernestcurativo@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <a
                href={viewCVLink}
                target="_blank"
                rel="noopener noreferrer"
                className={getHoverStyles(disableTransitions)}
              >
                {getViewCVLabel(selectedLanguage)}
              </a>
              <p>|</p>
              <a
                href={CVFilepath}
                download={CVFilename}
                className={getHoverStyles(disableTransitions)}
              >
                {getDownloadCVLabel(selectedLanguage)}
              </a>
            </div>
          </div>
          <p>
            Fireflies animation {selectedLanguage === "English" ? "by" : "ni"}{" "}
            <a
              href="https://codepen.io/mikegolus/pen/Jegvym"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-normal ${getHoverStyles(disableTransitions)}`}
            >
              Mike Golus
            </a>
          </p>
          <div
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: disableTransitions ? "auto" : "smooth",
              });
            }}
            className={`p-2 mt-4 flex items-center justify-center rounded-full border-2 hover:border-purple border-white ${getHoverStyles(
              disableTransitions
            )}`}
          >
            <FaArrowUp />
          </div>
        </div>
      </div>
    );
  };

  const getFooterNotesTrans = () => {
    let trans = (
      <>
        <div className={`${colItemsCenter} mt-16 gap-2`}>
          <p>
            Loosely designed in Figma and translated into code by yours truly ♡.
          </p>
          <p>
            <span className="whitespace-nowrap">
              &copy; {currentYear} Ernest Joseph S. Curativo.
            </span>{" "}
            <span className="whitespace-nowrap">All rights reserved.</span>
          </p>
          <p>Website last updated on the 29th of December, 2024.</p>
        </div>
      </>
    );

    if (selectedLanguage === "Filipino") {
      trans = (
        <>
          <div className={`${colItemsCenter} mt-16 gap-2`}>
            <p>Dinisenyo sa Figma at isinalin sa code ng iyong lingkod ♡.</p>
            <p>
              <span className="whitespace-nowrap">
                &copy; {currentYear} Ernest Joseph S. Curativo.
              </span>{" "}
              <span className="whitespace-nowrap">All rights reserved.</span>
            </p>
            <p>Huling na-update ang website noong ika-29 ng Disyembre, 2024.</p>
          </div>
        </>
      );
    } else if (selectedLanguage === "Bisaya") {
      trans = (
        <>
          <div className={`${colItemsCenter} mt-16 gap-2`}>
            <p>
              Gidisenyo sa Figma ug gitranslate ngadto sa code sa inyong alagad
              ♡.
            </p>
            <p>
              <span className="whitespace-nowrap">
                &copy; {currentYear} Ernest Joseph S. Curativo.
              </span>{" "}
              <span className="whitespace-nowrap">All rights reserved.</span>
            </p>
            <p>
              Ang website kay huling gi-update sa ika-29 sa Disyembre, 2024.
            </p>
          </div>
        </>
      );
    }

    return trans;
  };

  return (
    <div
      className={`p-8 bg-black text-white ${minWidth} mx-auto flex justify-center items-center text-center`}
    >
      <div className="flex flex-col justify-between items-center gap-16">
        <div className={`${colItemsCenter} mt-16 gap-2`}>
          {getFooterNotesTrans()}
        </div>
        {renderLinks()}
      </div>
    </div>
  );
};

export default Footer;
