import { UserPrefContext } from "@/context/UserPrefContext";
import { renderSmoothTransition } from "@/shared";
import React, { useContext } from "react";

type Props = {
  content: string | React.ReactNode;
  onClick: () => void;
};

const Button = ({ content, onClick }: Props) => {
  const { selectedTheme, disableAnimation } = useContext(UserPrefContext);
  return (
    <div
      onClick={onClick}
      className={`border ${!disableAnimation ? renderSmoothTransition() : ""} ${
        selectedTheme === "Dark" ? "border-white" : "border-black"
      } px-8 py-4 rounded-lg cursor-pointer hover:border-purple hover:text-purple whitespace-nowrap w-max`}
    >
      {content}
    </div>
  );
};

export default Button;
