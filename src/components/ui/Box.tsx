import { UserPrefContext } from "@/context/UserPrefContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import { getConditionalSmoothTransition, NAVBAR_HEIGHT } from "@/shared";
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
  const { selectedTheme, disableTransitions } = useContext(UserPrefContext);
  const isPhone = useMediaQuery("(max-width: 660px)");
  const [unfold, setUnfold] = useState(true);

  const foldCondition = !isFoldable || (isFoldable && unfold);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && isFoldable) {
        const rect = headerRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= NAVBAR_HEIGHT);
      }
    };
    
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFoldable]);

  return (
    <div className={`rounded-lg shadow-custom-sm px-8 py-4`}>
      <div
        ref={headerRef}
        onClick={() => {
          if (isFoldable) setUnfold(!unfold);
        }}
        className={`flex justify-between gap-4 mb-8 py-4 ${
          isPhone ? "flex-col" : "items-center"
        } ${
          isFoldable ? "hover:text-purple" : ""
        } cursor-pointer ${getConditionalSmoothTransition(
          disableTransitions
        )} ${
          isSticky && unfold
            ? `sticky z-10 ${
                selectedTheme === "Dark" ? "bg-black" : "bg-white"
              }`
            : ""
        }`}
        style={{ top: NAVBAR_HEIGHT }}
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
        } ${getConditionalSmoothTransition(disableTransitions)}`}
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
