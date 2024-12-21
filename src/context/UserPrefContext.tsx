/* eslint-disable react-refresh/only-export-components */

import { AvailableLanguagesType, UserPrefContextInterface } from "@/types";
import { createContext, useState } from "react";

export const UserPrefContext = createContext<UserPrefContextInterface>({
  selectedLanguage: "English",
  setSelectedLanguage: () => {},
  disableAnimation: false,
  setDisableAnimation: () => {},
});

export const UserPrefContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<AvailableLanguagesType>("English");
  const [disableAnimation, setDisableAnimation] = useState(false);

  return (
    <UserPrefContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
        disableAnimation,
        setDisableAnimation,
      }}
    >
      {children}
    </UserPrefContext.Provider>
  );
};
