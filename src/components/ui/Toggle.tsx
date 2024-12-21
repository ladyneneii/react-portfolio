import { UserPrefContext } from "@/context/UserPrefContext";
import { renderSmoothTransition } from "@/shared";
import { AvailableThemesType } from "@/types";
import React, { useContext } from "react";

interface ToggleOptionInterface {
  label: React.ReactNode;
  value: AvailableThemesType;
}

type Props = {
  firstOption: ToggleOptionInterface;
  secondOption: ToggleOptionInterface;
  selectedOption: AvailableThemesType;
  setSelectedOption: (value: AvailableThemesType) => void;
};

const Toggle = ({
  firstOption,
  secondOption,
  selectedOption,
  setSelectedOption,
}: Props) => {
  const { disableAnimation } = useContext(UserPrefContext);

  return (
    <div
      onClick={() =>
        setSelectedOption(
          selectedOption === firstOption.value
            ? secondOption.value
            : firstOption.value
        )
      }
      className="bg-purple py-1 px-[10px] relative rounded-[48px] w-16 h-9 cursor-pointer flex items-center justify-between"
    >
      <div
        className={`rounded-full w-7 h-7 bg-white absolute top-1/2 -translate-y-1/2 flex justify-center items-center ${!disableAnimation ? renderSmoothTransition() : ""} ${
          selectedOption === firstOption.value ? "left-1" : "left-8"
        }`}
      ></div>
      <div className="text-purple z-[100]">{firstOption.label}</div>
      <div className="text-purple z-[100]">{secondOption.label}</div>
    </div>
  );
};

export default Toggle;
