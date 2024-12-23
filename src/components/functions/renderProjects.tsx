import { NavigateFunction } from "react-router-dom";
import Button from "../ui/Button";

export const renderProjects = (
  img: string,
  desc: string,
  techUsed: string,
  index: number,
  navigate: NavigateFunction,
  websiteLink?: string,
  learnMoreLink?: string
) => {
  return (
    <div key={img} className="flex flex-col gap-4">
      <div className="flex gap-8">
        <div className={`w-1/2 ${index % 2 === 0 ? "order-1" : "order-2"}`}>
          <img src={img} alt="" className="rounded-lg" />
        </div>
        <div
          className={`w-1/2 flex flex-col justify-between gap-8 ${
            index % 2 === 1 ? "order-1" : "order-2"
          }`}
        >
          <h6>{desc}</h6>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col text-purple">
              <p>Technologies used:</p>
              <p className="font-extralight italic">{techUsed}</p>
            </div>
            {(websiteLink || learnMoreLink) && (
              <div className="flex gap-4">
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
