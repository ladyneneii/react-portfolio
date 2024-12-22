import { AvailableLanguagesType } from "./types";

export const maxWidth = "max-w-[1280px]";
export const minWidth = "min-w-[300px]";

export const renderSmoothTransition = (seconds?: number) => {
  const duration = seconds ? `duration-${seconds * 100}` : "duration-300";

  return `transition-all ${duration}`;
};

export const getConditionalSmoothTransition = (disableAnimation: boolean) => {
  return !disableAnimation ? renderSmoothTransition() : "";
};

export const languages: AvailableLanguagesType[] = [
  "English",
  "Filipino",
  "Bisaya",
];
