import { useEffect } from "react";

type Props = {
  ref: React.RefObject<HTMLDivElement | null>;
  setHeight: (value: number) => void;
  customVerticalPadding?: number;
};

const useHeightResize = ({ ref, setHeight, customVerticalPadding }: Props) => {
  useEffect(() => {
    const VERTICAL_PADDING = customVerticalPadding ? customVerticalPadding : 100;

    const resizeObserver = new ResizeObserver(() => {
      if (ref.current) {
        setHeight(
          ref.current.getBoundingClientRect().height + VERTICAL_PADDING
        );
      }
    });

    // Ensure the observer works even if the element isn't initially in the DOM.
    const observe = () => {
      if (ref.current) {
        resizeObserver.observe(ref.current);
      }
    };

    // Check if ref exists on mount and observe, else defer observation until it exists
    if (ref.current) {
      observe();
    } else {
      // If ref doesn't exist initially, wait for it to be added
      const interval = setInterval(() => {
        if (ref.current) {
          observe();
          clearInterval(interval); // Stop checking once the ref exists
        }
      }, 50);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, setHeight]); // Add `ref` and `setHeight` as dependencies
};

export default useHeightResize;
