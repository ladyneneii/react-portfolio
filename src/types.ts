export type AvailableLanguagesType = "English" | "Filipino" | "Bisaya";
export type AvailableThemesType = "System" | "Dark" | "Light";

export interface UserPrefContextInterface {
  selectedLanguage: AvailableLanguagesType;
  setSelectedLanguage: (value: AvailableLanguagesType) => void;
  disableAnimation: boolean;
  setDisableAnimation: (value: boolean) => void;
  selectedTheme: AvailableThemesType;
  setSelectedTheme: (value: AvailableThemesType) => void;
}
