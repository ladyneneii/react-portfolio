export type AvailableLanguagesType = "English" | "Filipino" | "Bisaya";

export interface UserPrefContextInterface {
  selectedLanguage: AvailableLanguagesType;
  setSelectedLanguage: (value: AvailableLanguagesType) => void;
  disableAnimation: boolean;
  setDisableAnimation: (value: boolean) => void;
}
