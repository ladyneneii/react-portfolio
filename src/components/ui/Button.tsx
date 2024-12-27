import { UserPrefContext } from "@/context/UserPrefContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import { getConditionalSmoothTransition } from "@/shared";
import React, { useContext } from "react";

type Props = {
  content: string | React.ReactNode;
  onClick: () => void;
};

const Button = ({ content, onClick }: Props) => {
  const { selectedTheme, disableTransitions } = useContext(UserPrefContext);
  const isPhone = useMediaQuery("(max-width: 660px)");
  const isLandscapePhone = useMediaQuery(
    "(max-device-width: 940px) and (orientation: landscape) and (min-aspect-ratio: 3/2)"
  );

  return (
    <div
      onClick={onClick}
      className={`border ${getConditionalSmoothTransition(
        disableTransitions
      )} ${
        selectedTheme === "Dark" ? "border-white" : "border-black"
      } rounded-lg cursor-pointer hover:border-purple hover:text-purple whitespace-nowrap w-max ${
        isPhone || isLandscapePhone ? "text-[14px] px-6 py-3" : "px-8 py-4"
      }`}
    >
      {content}
    </div>
  );
};

export default Button;
