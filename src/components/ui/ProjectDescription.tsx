import { useNavigate } from "react-router-dom";
import { ProjectsInterface } from "../Projects";
import Button from "./Button";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import Carousel from "./Carousel";

interface ProjectExtraInfo {
  index: number;
  carousel: string[];
}
type ProjectDescription = ProjectsInterface & ProjectExtraInfo;

const ProjectDescription = ({
  img,
  desc,
  techUsed,
  index,
  websiteLink,
  learnMoreLink,
  carousel,
}: ProjectDescription) => {
  const navigate = useNavigate();
  const isTablet = useMediaQuery("(max-width: 1020px)");
  const isPhone = useMediaQuery("(max-width: 620px)");
  const [showCarousel, setShowCarousel] = useState(false);
  const [imgIdx, setImgIdx] = useState(-1);

  return (
    <>
      <div key={img} className="flex flex-col gap-4">
        <div className={`flex gap-8 ${isTablet ? "flex-col " : ""}`}>
          <div
            className={`${isTablet ? "w-full" : "w-1/2"} ${
              index % 2 === 0 || isTablet ? "order-1" : "order-2"
            }`}
          >
            <img
              onClick={() => {
                setShowCarousel(true);
                setImgIdx(index);
              }}
              src={img}
              alt=""
              className="rounded-lg hover:cursor-pointer hover:outline-offset-4 hover:outline hover:outline-purple"
            />
          </div>
          <div
            className={`${
              isTablet ? "w-full" : "w-1/2"
            } flex flex-col justify-between gap-8 ${
              index % 2 === 1 || isTablet ? "order-1" : "order-2"
            }`}
          >
            <h6>{desc}</h6>
            <div
              className={`flex ${
                !isTablet || isPhone
                  ? "flex-col"
                  : "justify-between items-center"
              } gap-4`}
            >
              <div className="flex flex-col text-purple">
                <p>Technologies used:</p>
                <p className="font-extralight italic">{techUsed}</p>
              </div>
              {(websiteLink || learnMoreLink) && (
                <div
                  className={`flex ${
                    isPhone ? "flex-col gap-2 items-center" : "gap-4"
                  }`}
                >
                  {websiteLink && (
                    <Button
                      onClick={() => window.open(`${websiteLink}`, "_blank")}
                      content="Visit website"
                    />
                  )}
                  {learnMoreLink && (
                    <Button
                      onClick={() => {
                        navigate(`${learnMoreLink}`);
                        window.scrollTo(0, 0);
                      }}
                      content="Learn more"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Carousel
        imgIdx={imgIdx}
        setImgIdx={setImgIdx}
        carousel={carousel}
        showCarousel={showCarousel}
        setShowCarousel={setShowCarousel}
      />
    </>
  );
};

export default ProjectDescription;
