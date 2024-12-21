import { UserPrefContext } from "@/context/UserPrefContext";
import { renderSmoothTransition } from "@/shared";
import { AvailableLanguagesType } from "@/types";
import { useContext } from "react";
import { IoRadioButtonOff, IoRadioButtonOn } from "react-icons/io5";

type Props = {
  availableOptions: AvailableLanguagesType[];
  selectedOption: AvailableLanguagesType;
  setSelectedOption: (value: AvailableLanguagesType) => void;
};

const Radio = ({
  availableOptions,
  selectedOption,
  setSelectedOption,
}: Props) => {
  const { disableAnimation } = useContext(UserPrefContext);

  return availableOptions.map((option) => (
    <div
      key={option}
      onClick={() => setSelectedOption(option)}
      className={`flex gap-2 items-center hover:cursor-pointer hover:underline hover:text-purple ${
        !disableAnimation ? renderSmoothTransition() : ""
      } ${selectedOption === option ? "text-purple" : ""}`}
    >
      {selectedOption === option ? (
        <IoRadioButtonOn size={25} />
      ) : (
        <IoRadioButtonOff size={25} />
      )}
      {option}
    </div>
  ));
};

export default Radio;
