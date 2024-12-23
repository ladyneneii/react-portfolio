import { UserPrefContext } from "@/context/UserPrefContext";
import { getConditionalSmoothTransition } from "@/shared";
import { useContext } from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import { LuSquare } from "react-icons/lu";

type Props = {
  state: boolean;
  setState: (value: boolean) => void;
  label: string;
};

const SingleCheckbox = ({ state, setState, label }: Props) => {
  const {
      disableTransitions,
    } = useContext(UserPrefContext);

  return (
    <div
      onClick={() => setState(!state)}
      className={`flex gap-2 items-center hover:cursor-pointer hover:underline hover:text-purple ${getConditionalSmoothTransition(
        disableTransitions
      )} ${state ? "text-purple" : ""}`}
    >
      {state ? <IoCheckboxOutline size={25} /> : <LuSquare size={25} />}
      {label}
    </div>
  );
};

export default SingleCheckbox;
