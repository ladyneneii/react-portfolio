import { UserPrefContext } from "@/context/UserPrefContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import { getConditionalSmoothTransition, NAVBAR_HEIGHT } from "@/shared";
import { AvailableThemesType } from "@/types";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

type Props = {
  isFoldable?: boolean;
  title: string | React.ReactNode;
  children: React.ReactNode;
  childrenHeight?: number;
  companyName?: string;
  startAndEndDates?: string;
  isUnfolded?: boolean;
  isSmall?: boolean;
  theme?: AvailableThemesType,
};

const Box = ({
  isFoldable,
  title,
  children,
  childrenHeight,
  companyName,
  startAndEndDates,
  isUnfolded = true,
  isSmall,
  theme,
}: Props) => {
  const { selectedTheme, disableTransitions } = useContext(UserPrefContext);
  const isPhone = useMediaQuery("(max-width: 660px)");
  const isLandscapePhone = useMediaQuery(
    "(max-device-width: 940px) and (orientation: landscape) and (min-aspect-ratio: 3/2)"
  );
  const [unfold, setUnfold] = useState<boolean>(isUnfolded);

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

  const getOuterDivPadding = () => {
    if (isSmall) return "";
    else return isPhone ? "py-2" : "py-4";
  };

  return (
    <div
      className={`rounded-lg shadow-custom-sm ${
        selectedTheme === "Dark" || theme === "Dark"
          ? "bg-black/50 text-white"
          : "bg-white/50 text-black"
      } ${getOuterDivPadding()}`}
    >
      <div
        ref={headerRef}
        onClick={() => {
          if (isFoldable) setUnfold(!unfold);
        }}
        className={`flex justify-between gap-4 rounded-bl-lg rounded-br-lg ${
          !isSmall ? "mb-8" : ""
        } py-4 ${isPhone ? "px-4 py-2" : "px-8 py-4"} ${
          isPhone ? "flex-col" : "items-center"
        } ${
          isFoldable ? "hover:text-purple group" : ""
        } cursor-pointer ${getConditionalSmoothTransition(
          disableTransitions
        )} ${
          isSticky && unfold && !isPhone && !isLandscapePhone
            ? `sticky z-10 ${
                selectedTheme === "Dark" || theme === "Dark"
                  ? "bg-black"
                  : "bg-purpleLight"
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
          {typeof title === "string" ? <h4>{title}</h4> : title}
        </div>
        {companyName && (
          <div className="flex flex-col">
            <p className="font-normal">{companyName}</p>
            <p className="italic">{startAndEndDates}</p>
          </div>
        )}
      </div>
      <div className={`${isPhone ? "px-4" : "px-8"}`}>
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
    </div>
  );
};

export default Box;
