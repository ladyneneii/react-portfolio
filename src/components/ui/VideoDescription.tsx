import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useEffect, useRef } from "react";
import Button from "./Button";

export interface VideoDescriptionInterface {
  src: string;
  desc?: string;
  altLink: string;
  isPortrait?: boolean;
  hasDiffScreenSizes?: boolean;
}

const VideoDescription = ({
  src,
  desc,
  altLink,
  isPortrait,
  hasDiffScreenSizes,
}: VideoDescriptionInterface) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isTablet = useMediaQuery("(max-width: 1020px)");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0; 
    }
  }, []);

  return (
    <div
      className={`flex flex-col gap-2 items-center text-center 
          ${!isTablet && !hasDiffScreenSizes ? "w-[45%]" : "w-[100%]"}
        `}
    >
      <video
        controls
        muted
        className="rounded-lg hover:outline-offset-4 hover:outline hover:outline-purple"
        width={isPortrait ? "50%" : "100%"}
      >
        <source src={src} type="video/mp4" />
        <div className="flex flex-col gap-4 items-center">
          <p>
            Your browser does not support the video tag.<br />You can view the video
            here instead:
          </p>
          <Button
            onClick={() => window.open(`${altLink}`, "_blank")}
            content="Watch video"
          />
        </div>
      </video>
      <p>{desc}</p>
    </div>
  );
};

export default VideoDescription;
