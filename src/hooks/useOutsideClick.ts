import { useEffect } from "react";

type Props = {
  ref: React.RefObject<HTMLElement | null>;
  refLeft?: React.RefObject<HTMLDivElement | null>;
  refRight?: React.RefObject<HTMLDivElement | null>;
  circlesRef?: React.RefObject<HTMLDivElement | null>;
  setVisibility?: (value: boolean) => void;
  setVisibilityString?: (value: string) => void;
  setVisibilityNumber?: (value: number) => void;
};

const useOutsideClick = ({
  ref,
  refLeft,
  refRight,
  setVisibility,
  setVisibilityString,
  setVisibilityNumber,
}: Props) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function listener(event: any) {
      if (refLeft && refRight) {
        if (!refLeft.current || refLeft.current.contains(event.target)) {
          return;
        }
        if (!refRight.current || refRight.current.contains(event.target)) {
          return;
        }
      }
      
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      if (setVisibility) {
        setVisibility(false);
      }

      if (setVisibilityString) {
        setVisibilityString("");
      }

      if (setVisibilityNumber) {
        setVisibilityNumber(-1);
      }
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, setVisibility, setVisibilityString, setVisibilityNumber]);
};

export default useOutsideClick;
