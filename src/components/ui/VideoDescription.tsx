import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

export interface VideoDescriptionInterface {
  src: string;
  desc?: string | React.ReactNode;
  altLink: string;
  isPortrait?: boolean;
  hasDiffScreenSizes?: boolean;
  thumbnail?: string;
}

const VideoDescription = ({
  src,
  desc,
  altLink,
  // isPortrait,
  hasDiffScreenSizes,
  thumbnail,
}: VideoDescriptionInterface) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); // State to handle fading out
  const isTablet = useMediaQuery("(max-width: 1020px)");

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

  return (
    <div
      className={`flex flex-col gap-2 items-center text-center ${
        isTablet || hasDiffScreenSizes ? "w-[100%]" : "w-[45%]"
      }`}
    >
      <div className={`relative ${"w-full"}`}>
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
              onClick={() => window.open(`${altLink}`, "_blank")}
              content="Watch video"
            />
          </div>
        </video>

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
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default VideoDescription;
