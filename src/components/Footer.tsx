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
            Fireflies animation by{" "}
            <a
              href="https://codepen.io/mikegolus/pen/Jegvym"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-normal ${getHoverStyles(disableTransitions)}`}
            >
              Mike Golus
            </a>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`p-8 border-2 border-pink-500 bg-black text-white ${minWidth} mx-auto flex justify-center items-center text-center`}
    >
      <div className="flex flex-col justify-between items-center gap-16">
        <div className={`${colItemsCenter} mt-16 gap-2`}>
          <p>
            Loosely designed in Figma and translated into code by yours truly ♡.
          </p>
          <p>
            &copy; {currentYear} Ernest Joseph S. Curativo. All rights reserved.
          </p>
          <p>Website last updated on the 29th of December, 2024.</p>
        </div>
        {renderLinks()}
      </div>
    </div>
  );
};

export default Footer;
