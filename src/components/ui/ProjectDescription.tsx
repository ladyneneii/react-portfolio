import { ProjectsInterface } from "../Projects";
import Button from "./Button";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ReactNode, useState } from "react";
import Carousel from "./Carousel";
import { getConditionalSmoothTransition, imgClassnames } from "@/shared";

interface ProjectExtraInfo {
  index: number;
  carousel: string[];
  upperContent?: ReactNode;
  lowerContent?: ReactNode;
}
type ProjectDescription = ProjectsInterface & ProjectExtraInfo;

const ProjectDescription = ({
  img, // can be set to ""
  desc,
  techUsed,
  index,
  websiteLink,
  learnMoreLink,
  linkedInLink,
  carousel,
  // isDescLong,
  upperContent,
  lowerContent,
  extraImgs,
}: ProjectDescription) => {
  const isTablet = useMediaQuery("(max-width: 1020px)");
  const isPhone = useMediaQuery("(max-width: 620px)");
  const [showCarousel, setShowCarousel] = useState(false);
  const [imgIdx, setImgIdx] = useState(-1);

  const renderImg = (idx: number, img: string) => {
    return (
      <img
        key={img}
        onClick={() => {
          setShowCarousel(true);
          setImgIdx(idx);
        }}
        src={img}
        alt=""
        className={`${imgClassnames} ${getConditionalSmoothTransition}`}
      />
    );
  };

  return (
    <>
      <div>
        {upperContent}
        <div key={img} className="flex flex-col gap-4">
          <div
            className={`flex gap-8 items-center ${
              isTablet ? "flex-col" : ""
            }`}
          >
            <div
              className={`${
                isTablet ? "w-full flex justify-center" : "w-1/2"
              } ${index % 2 === 0 || isTablet ? "order-1" : "order-2"}`}
            >
              {img && renderImg(index, img)}
              <div className="flex flex-col gap-4">
                {extraImgs &&
                  extraImgs.map((xtraImg, idx) => renderImg(idx, xtraImg))}
              </div>
            </div>
            <div
              className={`${
                isTablet ? "w-full" : "w-1/2"
              } flex flex-col justify-between gap-8 ${
                index % 2 === 1 || isTablet ? "order-1" : "order-2"
              }`}
            >
              {typeof desc === "string" ? <h6>{desc}</h6> : desc}
              <div
                className={`flex ${
                  !isTablet || isPhone
                    ? "flex-col"
                    : "justify-between items-center"
                } gap-4`}
              >
                {techUsed && (
                  <div className="flex flex-col text-purple">
                    <p className="font-normal">Technologies used:</p>
                    <p className="italic">{techUsed}</p>
                  </div>
                )}
                {(websiteLink || learnMoreLink || linkedInLink) && (
                  <div
                    className={`flex ${
                      isPhone ? "flex-col gap-2 items-center" : "gap-4"
                    }`}
                  >
                    {websiteLink && (
                      <Button
                        onClick={() =>
                          window.open(
                            `${websiteLink}`,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        content="Visit website"
                      />
                    )}
                    {learnMoreLink && (
                      <a href={learnMoreLink}>
                        <Button
                          onClick={() => {
                            // navigate(`${learnMoreLink}`);
                            // setTimeout(() => {
                            //   window.scrollTo(0, 0);
                            // }, 100);
                          }}
                          content="Learn more"
                        />
                      </a>
                    )}
                    {linkedInLink && (
                      <Button
                        onClick={() =>
                          window.open(
                            `${linkedInLink}`,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        content="View post on LinkedIn"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {lowerContent}
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
