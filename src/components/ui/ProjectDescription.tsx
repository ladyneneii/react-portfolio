import { ProjectsInterface } from "../Projects";
import Button from "./Button";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ReactNode, useContext, useState } from "react";
import Carousel from "./Carousel";
import {
  getConditionalSmoothTransition,
  getVariants,
  imgClassnames,
  redirectToNewPage,
} from "@/shared";
import { motion } from "framer-motion";
import { UserPrefContext } from "@/context/UserPrefContext";

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
  const { disableAnimations, selectedLanguage } = useContext(UserPrefContext);
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

  const Wrapper = disableAnimations ? "div" : motion.div;

  const getTechnologiesUsed = () => {
    let title = "Technologies Used";
    if (selectedLanguage === "Filipino") {
      title = "Mga teknolohiyang ginamit";
    } else if (selectedLanguage === "Bisaya") {
      title = "Mga teknolohiya nga gigamit";
    }

    return title;
  };

  const translatedDesc =
    typeof desc[selectedLanguage] === "string" ? (
      <h6>{desc[selectedLanguage]}</h6>
    ) : (
      desc[selectedLanguage]
    );

  const getLearnMore = () => {
    let title = "Learn more";
    if (selectedLanguage === "Filipino") {
      title = "Alamin pa";
    } else if (selectedLanguage === "Bisaya") {
      title = "Hibal-i pa";
    }

    return title;
  };

  const getVisitWebsite = () => {
    let title = "Visit website";
    if (selectedLanguage === "Filipino") {
      title = "Bisitahin ang website";
    } else if (selectedLanguage === "Bisaya") {
      title = "Bisita sa website";
    }

    return title;
  };

  const getviewPostOnLinkedIn = () => {
    let title = "View post on LinkedIn";
    if (selectedLanguage === "Filipino") {
      title = "Tingnan ang LinkedIn post";
    } else if (selectedLanguage === "Bisaya") {
      title = "Tan-awa ang LinkedIn post";
    }

    return title;
  };

  return (
    <>
      <Wrapper
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={getVariants()}
      >
        {upperContent}
        <div key={img} className="flex flex-col gap-4">
          <div
            className={`flex gap-8 items-center ${isTablet ? "flex-col" : ""}`}
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
              {translatedDesc}
              <div
                className={`flex ${
                  !isTablet || isPhone
                    ? "flex-col"
                    : "justify-between items-center"
                } gap-4`}
              >
                {techUsed && (
                  <div className="flex flex-col text-purple">
                    <p className="font-normal">{getTechnologiesUsed()}:</p>
                    <p className="italic">{techUsed}</p>
                  </div>
                )}
                {(websiteLink || learnMoreLink || linkedInLink) && (
                  <div
                    className={`flex ${
                      isPhone ? "flex-col gap-2 items-center" : "gap-4"
                    }`}
                  >
                    {learnMoreLink && (
                      <a href={learnMoreLink}>
                        <Button
                          onClick={() => {
                            // navigate(`${learnMoreLink}`);
                            // setTimeout(() => {
                            //   window.scrollTo(0, 0);
                            // }, 100);
                          }}
                          content={getLearnMore()}
                        />
                      </a>
                    )}
                    {websiteLink && (
                      <Button
                        onClick={() => redirectToNewPage(websiteLink)}
                        content={getVisitWebsite()}
                        isExternal={true}
                      />
                    )}
                    {linkedInLink && (
                      <Button
                        onClick={() => redirectToNewPage(linkedInLink)}
                        content={getviewPostOnLinkedIn()}
                        isExternal={true}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {lowerContent}
      </Wrapper>

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
