import { UserPrefContext } from "@/context/UserPrefContext";
import { getConditionalSmoothTransition } from "@/shared";
import { useCallback, useContext, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useOutsideClick from "@/hooks/useOutsideClick";

type Props = {
  imgIdx: number;
  setImgIdx: React.Dispatch<React.SetStateAction<number>>;
  carousel: string[];
  showCarousel: boolean;
  setShowCarousel: (value: boolean) => void;
};

const Carousel = ({
  imgIdx,
  setImgIdx,
  carousel,
  showCarousel,
  setShowCarousel,
}: Props) => {
  const { disableTransitions } = useContext(UserPrefContext);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const refLeft = useRef<HTMLDivElement | null>(null);
  const refRight = useRef<HTMLDivElement | null>(null);
  useOutsideClick({
    ref: imgRef,
    setVisibility: setShowCarousel,
    refLeft: refLeft,
    refRight: refRight,
  });

  useEffect(() => {
    if (showCarousel) {
      document.body.classList.add("modal-open");
    } else {
      // Delay the removal of the class
      const timeoutId = setTimeout(() => {
        document.body.classList.remove("modal-open");
      }, 600); // Delay in milliseconds (adjust as needed)

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showCarousel]);

  const handlePrev = useCallback(() => {
    setImgIdx((prev) => (prev === 0 ? carousel.length - 1 : prev - 1));
  }, [carousel.length, setImgIdx]);

  const handleNext = useCallback(() => {
    setImgIdx((prev) => (prev + 1) % carousel.length);
  }, [carousel.length, setImgIdx]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        setShowCarousel(false); // Close on ESC
      }
    },
    [setShowCarousel, handleNext, handlePrev]
  );

  useEffect(() => {
    if (showCarousel) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showCarousel, handleKeyDown]);

  const textHoverClassnames = `hover:cursor-pointer hover:text-purple ${getConditionalSmoothTransition(
    disableTransitions
  )}`;
  const buttonContainer = "rounded-full bg-black/90 p-3";

  return (
    showCarousel && (
      // has to be z-[1000] so it goes above the modal-open (pointer-events: none) class in the body
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/90 z-[1000] flex items-center justify-center pointer-events-auto">
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
          <FaChevronLeft onClick={handlePrev} size={30} />
        </div>
        <div
          ref={refRight}
          className={`absolute top-1/2 transform -translate-y-1/2 z-[200] right-2 ${buttonContainer} ${textHoverClassnames}`}
        >
          <FaChevronRight onClick={handleNext} size={30} />
        </div>
      </div>
    )
  );
};

export default Carousel;
