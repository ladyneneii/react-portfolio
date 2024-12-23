import { RadioDataTypes } from "./components/ui/Radio";

export type AvailableLanguagesType = "English" | "Filipino" | "Bisaya";
export type AvailableThemesType = "Dark" | "Light";
export type SectionsType = "Home" | "Skills" | "Experience" | "Projects" | "Education & Thesis" | "Testimonials";

export interface UserPrefContextInterface {
  selectedLanguage: AvailableLanguagesType;
  setSelectedLanguage: (value: RadioDataTypes) => void;
  disableTransitions: boolean;
  setDisableTransitions: (value: boolean) => void;
  selectedTheme: AvailableThemesType;
  setSelectedTheme: (value: AvailableThemesType) => void;
  selectedSection: SectionsType;
  setSelectedSection: (value: SectionsType) => void;
}
