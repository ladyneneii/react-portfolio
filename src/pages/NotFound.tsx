import {
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
} from "@/shared";
import Button from "../components/ui/Button";
import { useContext, useEffect } from "react";
import { UserPrefContext } from "@/context/UserPrefContext";

const NotFound = () => {
  const { setSelectedSection } = useContext(UserPrefContext);

  useEffect(() => {
    setSelectedSection("");
  }, [setSelectedSection]);

  return (
    <div
      className={`${sectionPaddingClassnames} h-[100vh] justify-center`}
    >
      <div className={sectionTitleContainerClassnames}>
        <p>This page does not exist.</p>
      </div>
      <div className="flex justify-center">
        <Button onClick={() => window.history.back()} content="Go back" />
      </div>
    </div>
  );
};

export default NotFound;
