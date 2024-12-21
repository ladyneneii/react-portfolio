
import { AvailableLanguagesType } from "@/types";
import { IoRadioButtonOff, IoRadioButtonOn } from "react-icons/io5";

type Props = {
  availableOptions: AvailableLanguagesType[];
  selectedOption: AvailableLanguagesType;
  setSelectedOption: (value: AvailableLanguagesType) => void;
};

const Radio = ({availableOptions, selectedOption, setSelectedOption}: Props) => {
  return availableOptions.map((option) => (
    <div
      key={option}
      onClick={() => setSelectedOption(option)}
      className={`flex gap-2 items-center hover:cursor-pointer hover:underline hover:text-purple transition-all duration-300 ${
        selectedOption === option ? "text-purple" : ""
      }`}
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
