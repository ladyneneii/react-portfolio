import { getHoverStyles, redirectToNewPage } from "@/shared";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const renderSocials = (disableTransitions: boolean) => {
  return (
    <div className="flex gap-3 justify-center">
      <a href="mailto:ernestcurativo@gmail.com">
        <IoMail size={25} className={getHoverStyles(disableTransitions)} />
      </a>
      <FaGithub
        onClick={() => redirectToNewPage("https://github.com/ladyneneii")}
        size={25}
        className={getHoverStyles(disableTransitions)}
      />
      <FaLinkedin
        onClick={() =>
          redirectToNewPage("https://www.linkedin.com/in/ernest-curativo/")
        }
        size={25}
        className={getHoverStyles(disableTransitions)}
      />
      <FaInstagram
        onClick={() =>
          redirectToNewPage("https://www.instagram.com/ladyneneii/")
        }
        size={25}
        className={getHoverStyles(disableTransitions)}
      />
    </div>
  );
};
