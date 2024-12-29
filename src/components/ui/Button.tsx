import { UserPrefContext } from "@/context/UserPrefContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import { getConditionalSmoothTransition } from "@/shared";
import React, { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  content: string | React.ReactNode;
  onClick: () => void;
  isExternal?: boolean;
};

const Button = ({ content, onClick, isExternal }: Props) => {
  const { selectedTheme, disableTransitions } = useContext(UserPrefContext);
  const isPhone = useMediaQuery("(max-width: 660px)");
  const isLandscapePhone = useMediaQuery(
    "(max-device-width: 940px) and (orientation: landscape) and (min-aspect-ratio: 3/2)"
  );

  const getPadding = () => {
    let padding = "";
    if (isExternal) {
      padding = "py-1 px-2";
    } else {
      padding = isPhone || isLandscapePhone ? "px-6 py-3" : "px-8 py-4";
    }

    return padding;
  };

  const getUniqueStyles = () => {
    if (isExternal) return "border-b-2";
    else return `border-2 rounded-lg`;
  };

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 ${getUniqueStyles()} ${getConditionalSmoothTransition(
        disableTransitions
      )} ${
        selectedTheme === "Dark" ? "border-white" : "border-black"
      } cursor-pointer hover:border-purple hover:text-purple whitespace-nowrap w-max ${getPadding()} ${
        isPhone || isLandscapePhone ? "text-[14px]" : ""
      }`}
    >
      {content}
      {isExternal && <FiExternalLink size={20} />}
    </div>
  );
};

export default Button;
