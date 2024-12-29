import { NAVBAR_HEIGHT } from "@/shared";
import { AvailableLanguagesType, SectionsType } from "@/types";
import { useEffect } from "react";

type Props = {
  ref: React.RefObject<HTMLDivElement | null>;
  setSection: (value: SectionsType) => void;
  section: SectionsType;
  selectedLanguage: AvailableLanguagesType;
};

const useHighlightSection = ({ ref, setSection, section, selectedLanguage }: Props) => {
  const VALUE_FOR_EARLY_HIGHLIGHT = 200
  
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= NAVBAR_HEIGHT + VALUE_FOR_EARLY_HIGHLIGHT) setSection(section);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, setSection, section, selectedLanguage]);
};

export default useHighlightSection;
