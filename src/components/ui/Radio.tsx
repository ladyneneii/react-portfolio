import { UserPrefContext } from "@/context/UserPrefContext";
import { getConditionalSmoothTransition } from "@/shared";
import { AvailableLanguagesType } from "@/types";
import { useContext } from "react";
import { IoRadioButtonOff, IoRadioButtonOn } from "react-icons/io5";

export type RadioDataTypes = AvailableLanguagesType 

type Props = {
  availableOptions: RadioDataTypes[];
  selectedOption: RadioDataTypes;
  setSelectedOption: (value: RadioDataTypes) => void;
};

const Radio = ({
  availableOptions,
  selectedOption,
  setSelectedOption,
}: Props) => {
  const { disableTransitions } = useContext(UserPrefContext);

  return availableOptions.map((option) => (
    <div
      key={option}
      onClick={() => setSelectedOption(option)}
      className={`flex gap-2 items-center hover:cursor-pointer hover:underline hover:text-purple ${getConditionalSmoothTransition(
        disableTransitions
      )} ${selectedOption === option ? "text-purple" : ""}`}
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
