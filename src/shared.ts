import { AvailableLanguagesType, SectionsType } from "./types";

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

export const getHoverStyles = (disableTransitions: boolean) => {
  return `hover:cursor-pointer hover:text-purple ${getConditionalSmoothTransition(
    disableTransitions
  )}`;
};

export const NAVBAR_HEIGHT = 65;
export const EXTRA_HEIGHT = 80; // extra height added to when a user unfolds a box
export const sectionPaddingClassnames = "py-16 flex flex-col gap-8";
export const sectionTitleContainerClassnames =
  "flex flex-col gap-2 items-center text-center";
export const boxContainerClassnames = "flex flex-col gap-4";
export const itemsContainerClass = "flex justify-center flex-wrap mb-8";
export const videosContainerClass = `flex gap-8 justify-center`;
export const imgClassnames =
  "rounded-lg hover:cursor-pointer hover:outline-offset-4 hover:outline hover:outline-purple";

export const viewCVLink =
  "https://drive.google.com/file/d/1ta_HLzIx5MN4DGbTTlYkPlWe12cfC23O/view?usp=sharing";
export const CVFilename = "Curativo-CV.pdf";
export const CVFilepath = `/src/data/${CVFilename}`;

export const redirectToNewPage = (href: string) => {
  window.open(href, "_blank", "noopener,noreferrer");
};

export const camelToTitleCase = (str: string): SectionsType => {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (match) => match.toUpperCase())
    .trim() as SectionsType;
};

export const getVariants = (index?: number) => {
  const indexExists = index !== undefined && index !== null;
  // return {
  //   hidden: {
  //     opacity: 0,
  //     transform: indexExists
  //       ? `translate3d(${index % 2 !== 0 ? "5%" : "-5%"}, 0, 0)`
  //       : "",
  //   },
  //   visible: {
  //     opacity: 1,
  //     transform: indexExists ? "translate3d(0, 0, 0)" : "",
  //   },
  // };
  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
};

export const translatedSections: Record<SectionsType, Record<AvailableLanguagesType, string>> = {
  Home: {
    English: "home",
    Filipino: "pahina",
    Bisaya: "panid",
  },
  Skills: {
    English: "skills",
    Filipino: "kasanayan",
    Bisaya: "abilidad",
  },
  Experience: {
    English: "experience",
    Filipino: "karera",
    Bisaya: "karera",
  },
  Projects: {
    English: "projects",
    Filipino: "mgaProyekto",
    Bisaya: "mgaProyekto",
  },
  Thesis: {
    English: "thesis",
    Filipino: "tesis",
    Bisaya: "tesis",
  },
  Testimonials: {
    English: "testimonials",
    Filipino: "mgaPatotoo",
    Bisaya: "mgaPatotoo",
  },
  "": {
    English: "",
    Filipino: "",
    Bisaya: "",
  }
};

// export const getSectionName = (
//   section: SectionsType,
//   currentLanguage: AvailableLanguagesType
// ) => {

//   return sections[section][currentLanguage];
// };
