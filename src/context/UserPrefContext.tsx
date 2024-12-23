/* eslint-disable react-refresh/only-export-components */

import {
  AvailableLanguagesType,
  AvailableThemesType,
  SectionsType,
  UserPrefContextInterface,
} from "@/types";
import { createContext, useEffect, useState } from "react";

export const UserPrefContext = createContext<UserPrefContextInterface>({
  selectedLanguage: "English",
  setSelectedLanguage: () => {},
  disableTransitions: false,
  setDisableTransitions: () => {},
  disableAnimations: true,
  setDisableAnimations: () => {},
  selectedTheme: "Dark",
  setSelectedTheme: () => {},
  selectedSection: "Home",
  setSelectedSection: () => {},
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
  const [disableTransitions, setDisableTransitions] = useState<boolean>(
    localStorage.getItem("disableTransitions") === "true" || false
  );
  const [disableAnimations, setDisableAnimations] = useState<boolean>(
    localStorage.getItem("disableAnimations") === "true" || false
  );
  const [selectedTheme, setSelectedTheme] = useState<AvailableThemesType>(
    (localStorage.getItem("selectedTheme") as AvailableThemesType) || "Dark"
  );
  const [selectedSection, setSelectedSection] = useState<SectionsType>("Home");

  // CHANGE VALUE IN LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  useEffect(() => {
    localStorage.setItem("disableTransitions", String(disableTransitions));
  }, [disableTransitions]);

  useEffect(() => {
    localStorage.setItem("disableAnimations", String(disableAnimations));
  }, [disableAnimations]);

  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme);
  }, [selectedTheme]);

  return (
    <UserPrefContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
        disableTransitions,
        setDisableTransitions,
        disableAnimations,
        setDisableAnimations,
        selectedTheme,
        setSelectedTheme,
        selectedSection,
        setSelectedSection,
      }}
    >
      {children}
    </UserPrefContext.Provider>
  );
};
