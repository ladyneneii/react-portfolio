import { UserPrefContext } from "@/context/UserPrefContext";
import useOutsideClick from "@/hooks/useOutsideClick";
import { getConditionalSmoothTransition } from "@/shared";
import { useContext, useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

type Props = {
  selectedOption: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

const Select = ({
  selectedOption: defaultSelectedValue,
  options,
  onChange,
}: Props) => {
  const { selectedTheme, disableAnimation } = useContext(UserPrefContext);

  const selectRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  useOutsideClick({ ref: selectRef, setVisibility: setShowDropdown });

  const [selectedOption, setSelectedOption] =
    useState<string>(defaultSelectedValue);

  useEffect(() => {
    setSelectedOption(defaultSelectedValue);
  }, [defaultSelectedValue]);

  const renderBorderColor = () => {
    let retVal;

    if (showDropdown) {
      retVal = "border-purple";
    } else {
      retVal = selectedTheme === "Dark" ? "border-white" : "border-black";
    }

    return retVal;
  };

  // const OPTION_HEIGHT = 24;
  // const DROPDOWN_VERTICAL_PADDING = 8;

  // const dropdownHeight = `h-[${
  //   options.length * OPTION_HEIGHT + DROPDOWN_VERTICAL_PADDING * 2
  // }px]`;

  return (
    <div ref={selectRef} className="relative w-max">
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className={`px-2 py-1 w-[11rem] rounded-lg cursor-pointer flex items-center justify-between border-2 hover:border-purple ${renderBorderColor()} ${
          getConditionalSmoothTransition(disableAnimation)
        }`}
      >
        {options.find((option) => option.value === selectedOption)?.label ||
          "Select an option"}
        {showDropdown ? <FaAngleUp /> : <FaAngleDown />}
      </div>

      <div
        className={`absolute left-0 right-0 top-10 rounded-lg border-purple ${
          showDropdown ? `h-[84px] py-2 border-2` : "h-0 py-0"
        } ${getConditionalSmoothTransition(disableAnimation)}`}
      >
        {showDropdown && (
          <div className="overflow-auto flex flex-col">
            {options.map(
              ({ value, label }) =>
                value !== selectedOption && (
                  <div
                    key={value}
                    onClick={() => {
                      onChange(value);
                      setSelectedOption(value);
                      setShowDropdown(false);
                    }}
                    className={`hover:cursor-pointer px-2 py-1 hover:bg-purple`}
                  >
                    {label}
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
