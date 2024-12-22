import { useEffect } from "react";

type Props = {
  ref: React.RefObject<HTMLDivElement | null>;
  setHeight: (value: number) => void;
};

const useHeightResize = ({
  ref,
  setHeight
}: Props) => {
  useEffect(() => {
    const VERTICAL_PADDING = 100;
    const resizeObserver = new ResizeObserver(() => {
      if (ref.current) {
        setHeight(
          ref.current.getBoundingClientRect().height +
            VERTICAL_PADDING
        );
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);
};

export default useHeightResize;
