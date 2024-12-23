import { useNavigate } from "react-router-dom";
import { ProjectsInterface } from "../Projects";
import Button from "./Button";
import useMediaQuery from "@/hooks/useMediaQuery";

type ProjectDescription = ProjectsInterface & { index: number };

const ProjectDescription = ({
  img,
  desc,
  techUsed,
  index,
  websiteLink,
  learnMoreLink,
}: ProjectDescription) => {
  const navigate = useNavigate();
  const isTablet = useMediaQuery("(max-width: 1020px)");
  const isPhone = useMediaQuery("(max-width: 620px)");

  return (
    <div key={img} className="flex flex-col gap-4">
      <div className={`flex gap-8 ${isTablet ? "flex-col " : ""}`}>
        <div
          className={`${isTablet ? "w-full" : "w-1/2"} ${
            index % 2 === 0 || isTablet ? "order-1" : "order-2"
          }`}
        >
          <img src={img} alt="" className="rounded-lg" />
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
              !isTablet || isPhone ? "flex-col" : "justify-between items-center"
            } gap-4`}
          >
            <div className="flex flex-col text-purple">
              <p>Technologies used:</p>
              <p className="font-extralight italic">{techUsed}</p>
            </div>
            {(websiteLink || learnMoreLink) && (
              <div className={`flex ${isPhone ? "flex-col gap-2 items-center" : "gap-4"}`}>
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
  );
};

export default ProjectDescription;
