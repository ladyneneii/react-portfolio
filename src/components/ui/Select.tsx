import useOutsideClick from "@/hooks/useOutsideClick";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


type Props = {
  bgColor?: string;
  selectedOption: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

const Select = ({
  bgColor,
  selectedOption: defaultSelectedValue,
  options,
  onChange,
}: Props) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  useOutsideClick({ ref: selectRef, setVisibility: setShowDropdown });

  const [selectedOption, setSelectedOption] =
    useState<string>(defaultSelectedValue);

  useEffect(() => {
    setSelectedOption(defaultSelectedValue);
  }, [defaultSelectedValue]);

  return (
    <div ref={selectRef} className="relative">
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className={`px-2 py-1 w-[10rem] rounded-lg cursor-pointer flex items-center justify-between ${
          showDropdown
            ? `outline outline-2 outline-offset-2 outline-purple`
            : ""
        } ${bgColor}`}
      >
        {options.find((option) => option.value === selectedOption)?.label ||
          "Select an option"}
        {showDropdown ? <FaAngleUp /> : <FaAngleDown />}
      </div>

      {showDropdown && (
        <div
          className={`absolute left-0 right-0 top-9 py-1 rounded-lg shadow-sm z-10 shadow-purple ${bgColor}`}
        >
          <div className="overflow-auto">
            {options.map(({ value, label }) => (
              <div
                key={value}
                onClick={() => {
                  onChange(value);
                  setSelectedOption(value);
                  setShowDropdown(false);
                }}
                className={`hover:cursor-pointer px-2 ${bgColor} 
                  hover:gray
                  `}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
