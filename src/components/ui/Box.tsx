import { UserPrefContext } from "@/context/UserPrefContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import { getConditionalSmoothTransition } from "@/shared";
import React, { useContext, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

type Props = {
  isFoldable?: boolean;
  title: string;
  children: React.ReactNode;
  childrenHeight?: number;
  companyName?: string;
  startAndEndDates?: string;
};

const Box = ({
  isFoldable,
  title,
  children,
  childrenHeight,
  companyName,
  startAndEndDates,
}: Props) => {
  const { disableAnimation } = useContext(UserPrefContext);
  const isPhone = useMediaQuery("(max-width: 660px)");
  const [unfold, setUnfold] = useState(true);

  const foldCondition = !isFoldable || (isFoldable && unfold);

  return (
    <div className={`rounded-lg shadow-custom p-4`}>
      <div
        className={`flex justify-between gap-4 mb-8 ${
          isPhone ? "flex-col" : "items-center"
        }`}
      >
        <div className="flex items-center gap-4">
          {isFoldable && (
            <div
              onClick={() => setUnfold(!unfold)}
              className={`cursor-pointer hover:text-purple ${getConditionalSmoothTransition(
                disableAnimation
              )}`}
            >
              {unfold ? <FaAngleUp size={25} /> : <FaAngleDown size={25} />}
            </div>
          )}
          <h4>{title}</h4>
        </div>
        {companyName && (
          <div className="flex flex-col">
            <p>{companyName}</p>
            <p className="font-extralight italic">{startAndEndDates}</p>
          </div>
        )}
      </div>
      <div
        className={`${
          foldCondition ? "opacity-100" : "opacity-0"
        } ${getConditionalSmoothTransition(disableAnimation)}`}
        style={{
          height: foldCondition ? childrenHeight : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Box;
