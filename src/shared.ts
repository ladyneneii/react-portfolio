import { AvailableLanguagesType } from "./types";

export const maxWidth = "max-w-[1280px]";
export const minWidth = "min-w-[300px]";

export const renderSmoothTransition = (seconds?: number) => {
  const duration = seconds ? `duration-${seconds * 100}` : "duration-300";

  return `transition-all ${duration}`;
};

export const getConditionalSmoothTransition = (disableTransitions: boolean) => {
  return !disableTransitions ? renderSmoothTransition() : "";
};

export const languages: AvailableLanguagesType[] = [
  "English",
  "Filipino",
  "Bisaya",
];

export const sectionPaddingClassnames = "py-16 flex flex-col gap-8";
export const sectionTitleContainerClassnames =
  "flex flex-col gap-2 items-center";
export const boxContainerClassnames = "flex flex-col gap-4";


