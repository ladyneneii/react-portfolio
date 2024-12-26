import { UserPrefContext } from "@/context/UserPrefContext";
import useOutsideClick from "@/hooks/useOutsideClick";
import { getConditionalSmoothTransition } from "@/shared";
import React, { useContext, useRef, useState } from "react";

type Props = {
  trigger: React.ReactNode;
  content: React.ReactNode;
  position: string;
  dropdownHeight: number;
};

const Dropdown = ({ trigger, content, position, dropdownHeight }: Props) => {
  const { selectedTheme, disableTransitions } = useContext(UserPrefContext);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  useOutsideClick({ ref: contentRef, setVisibility: setShowDropdown });

  return (
    <div className="relative">
      <div onClick={() => setShowDropdown(!showDropdown)}>{trigger}</div>
      <div
        ref={contentRef}
        className={`absolute rounded-lg flex flex-col justify-center border-2 ${
          selectedTheme === "Dark"
            ? "bg-black border-white"
            : "bg-white border-black"
        } ${position} ${getConditionalSmoothTransition(disableTransitions)} ${
          showDropdown ? "p-2" : ""
        } ${showDropdown ? "opacity-100" : "opacity-0 invisible"}`}
        style={{ height: showDropdown ? dropdownHeight : 0 }}
      >
        {content}
      </div>
    </div>
  );
};

export default Dropdown;
