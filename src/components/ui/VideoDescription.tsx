import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { getVariants, imgClassnames, redirectToNewPage } from "@/shared";
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import { UserPrefContext } from "@/context/UserPrefContext";

export interface VideoDescriptionInterface {
  src: string;
  desc?: string | React.ReactNode;
  altLink: string;
  isPortrait?: boolean;
  hasDiffScreenSizes?: boolean;
  thumbnail?: string;
  isImg?: boolean;
  index?: number;
  carousel?: string[];
}

const VideoDescription = ({
  src,
  desc,
  altLink,
  // isPortrait,
  hasDiffScreenSizes,
  thumbnail,
  isImg,
  index,
  carousel,
}: VideoDescriptionInterface) => {
  const { disableAnimations } = useContext(UserPrefContext);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); // State to handle fading out
  const isTablet2 = useMediaQuery("(max-width: 880px)");
  const [showCarousel, setShowCarousel] = useState(false);
  const [imgIdx, setImgIdx] = useState(-1);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0;
    }
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setIsFadingOut(false); // Ensure the pause icon is visible initially
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setIsFadingOut(false); // Ensure the play icon is visible immediately on pause
    }
  };

  // Effect to fade out the pause icon immediately after play starts
  useEffect(() => {
    if (isPlaying) {
      setIsFadingOut(false); // Start with visible pause button
      setTimeout(() => {
        setIsFadingOut(true); // Fade out pause icon after 2 seconds
      }, 0); // Start immediately without delay
    } else {
      setIsFadingOut(false); // Ensure play button is visible right away on pause
    }
  }, [isPlaying]);

  const Wrapper = disableAnimations ? "div" : motion.div;

  return (
    <>
      <Wrapper
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: index ? index * 0.2 : 0, duration: 0.5 }}
        variants={getVariants(index)}
        className={`flex flex-col gap-2 items-center text-center ${
          isTablet2 || hasDiffScreenSizes ? "w-[100%]" : "w-[45%]"
        }`}
      >
        <div className={`relative ${"w-full"}`}>
          {!isImg ? (
            <video
              ref={videoRef}
              className="rounded-lg hover:outline-offset-4 hover:outline hover:outline-purple flex-grow"
              controls
              onPlay={handlePlay}
              onPause={handlePause}
              // poster={thumbnail}
              poster={thumbnail}
            >
              <source src={src} type="video/mp4" />
              <div className="flex flex-col gap-4 items-center">
                <p>
                  Your browser does not support the video tag.
                  <br />
                  You can view the video here instead:
                </p>
                <Button
                  onClick={() => redirectToNewPage(altLink)}
                  content="Watch video"
                />
              </div>
            </video>
          ) : (
            <img
              onClick={() => {
                if (index !== undefined && index !== null) {
                  setShowCarousel(true);
                  setImgIdx(index);
                }
              }}
              src={src}
              alt={altLink}
              className={imgClassnames}
            />
          )}

          {!isImg && (
            <div
              className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-purple transition-opacity cursor-pointer ${
                isFadingOut ? "opacity-0" : "opacity-100"
              }`}
              onClick={isPlaying ? handlePause : handlePlay}
            >
              {!isPlaying ? (
                <FaPlayCircle size={35} />
              ) : (
                <FaPauseCircle size={35} />
              )}
            </div>
          )}
        </div>
        {typeof desc === "string" ? <p className="font-normal">{desc}</p> : desc}
      </Wrapper>
      <Carousel
        imgIdx={imgIdx}
        setImgIdx={setImgIdx}
        carousel={carousel ? carousel : []}
        showCarousel={showCarousel}
        setShowCarousel={setShowCarousel}
      />
    </>
  );
};

export default VideoDescription;
