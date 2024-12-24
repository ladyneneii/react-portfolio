import { UserPrefContext } from "@/context/UserPrefContext";
import { getConditionalSmoothTransition } from "@/shared";
import { useContext, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useOutsideClick from "@/hooks/useOutsideClick";

type Props = {
  currentImgIdx: number;
  carousel: string[];
  showCarousel: boolean;
  setShowCarousel: (value: boolean) => void;
};

const Carousel = ({
  currentImgIdx,
  carousel,
  showCarousel,
  setShowCarousel,
}: Props) => {
  const { disableTransitions } = useContext(UserPrefContext);
  const [imgIdx, setImgIdx] = useState(currentImgIdx);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const refLeft = useRef<HTMLDivElement | null>(null);
  const refRight = useRef<HTMLDivElement | null>(null);
  useOutsideClick({
    ref: imgRef,
    setVisibility: setShowCarousel,
    refLeft: refLeft,
    refRight: refRight,
  });

  const textHoverClassnames = `hover:cursor-pointer hover:text-purple ${getConditionalSmoothTransition(
    disableTransitions
  )}`;
  const buttonContainer = "rounded-full bg-black/90 p-3";

  return (
    showCarousel && (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/90 z-[200] flex items-center justify-center">
        <div
          className={`absolute top-2 right-2 ${buttonContainer} ${textHoverClassnames}`}
        >
          <IoClose onClick={() => setShowCarousel(false)} size={35} />
        </div>

        <div className="select-none h-[100vh] flex items-center justify-center">
          <img
            ref={imgRef}
            src={carousel[imgIdx]}
            alt=""
            className="max-h-full max-w-full"
          />
        </div>

        <div
          ref={refLeft}
          className={`absolute top-1/2 transform -translate-y-1/2 z-[200] left-2 ${buttonContainer} ${textHoverClassnames}`}
        >
          <FaChevronLeft
            onClick={() => setImgIdx((imgIdx + 1) % carousel.length)}
            size={30}
          />
        </div>
        <div
          ref={refRight}
          className={`absolute top-1/2 transform -translate-y-1/2 z-[200] right-2 ${buttonContainer} ${textHoverClassnames}`}
        >
          <FaChevronRight
            onClick={() =>
              setImgIdx(imgIdx === 0 ? carousel.length - 1 : imgIdx - 1)
            }
            size={30}
          />
        </div>
      </div>
    )
  );
};

export default Carousel;
