/* eslint-disable react-refresh/only-export-components */

import {
  AvailableLanguagesType,
  AvailableThemesType,
  UserPrefContextInterface,
} from "@/types";
import { createContext, useEffect, useState } from "react";

export const UserPrefContext = createContext<UserPrefContextInterface>({
  selectedLanguage: "English",
  setSelectedLanguage: () => {},
  disableAnimation: false,
  setDisableAnimation: () => {},
  selectedTheme: "System",
  setSelectedTheme: () => {},
});

export const UserPrefContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Initialize state from localStorage or default values
  const [selectedLanguage, setSelectedLanguage] =
    useState<AvailableLanguagesType>(
      (localStorage.getItem("selectedLanguage") as AvailableLanguagesType) ||
        "English"
    );
  const [disableAnimation, setDisableAnimation] = useState<boolean>(
    localStorage.getItem("disableAnimation") === "true" || false
  );
  const [selectedTheme, setSelectedTheme] = useState<AvailableThemesType>(
    (localStorage.getItem("selectedTheme") as AvailableThemesType) || "System"
  );

  // CHANGE VALUE IN LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  useEffect(() => {
    localStorage.setItem("disableAnimation", String(disableAnimation));
  }, [disableAnimation]);

  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme);
  }, [selectedTheme]);

  return (
    <UserPrefContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
        disableAnimation,
        setDisableAnimation,
        selectedTheme,
        setSelectedTheme,
      }}
    >
      {children}
    </UserPrefContext.Provider>
  );
};
