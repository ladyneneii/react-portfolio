import { NAVBAR_HEIGHT } from "@/shared";
import { SectionsType } from "@/types";
import { useEffect } from "react";

type Props = {
  ref: React.RefObject<HTMLDivElement | null>;
  setSection: (value: SectionsType) => void;
  section: SectionsType;
};

const useHighlightSection = ({ ref, setSection, section }: Props) => {
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= NAVBAR_HEIGHT) setSection(section);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useHighlightSection;
