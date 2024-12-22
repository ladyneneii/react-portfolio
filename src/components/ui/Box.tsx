import { UserPrefContext } from "@/context/UserPrefContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import { getConditionalSmoothTransition } from "@/shared";
import React, { useContext, useEffect, useRef, useState } from "react";
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
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const NAVBAR_HEIGHT = 66

  const handleScroll = () => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      console.log(rect.top);
      setIsSticky(rect.top <= NAVBAR_HEIGHT);
    }
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`rounded-lg shadow-custom-sm p-4`}>
      <div
        ref={headerRef}
        onClick={() => {
          if (isFoldable) setUnfold(!unfold);
        }}
        className={`flex justify-between gap-4 mb-8 ${
          isPhone ? "flex-col" : "items-center"
        } ${
          isFoldable ? "hover:text-purple" : ""
        } cursor-pointer ${getConditionalSmoothTransition(disableAnimation)} ${
          isSticky && unfold ? "sticky top-[65px] z-10 bg-black py-4" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          {isFoldable && (
            <div>
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
          foldCondition ? "opacity-100" : "opacity-0 invisible"
        } ${getConditionalSmoothTransition(disableAnimation)}`}
        style={
          isFoldable && childrenHeight
            ? {
                height: foldCondition ? childrenHeight : 0,
              }
            : {}
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Box;
