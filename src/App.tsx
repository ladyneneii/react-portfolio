import { useContext } from "react";
import Navbar from "./components/Navbar";
import { UserPrefContext } from "./context/UserPrefContext";
import Hero from "./components/Hero";
import { maxWidth, minWidth } from "./shared";
import Skills from "./components/Skills";

const App = () => {
  const { selectedTheme } = useContext(UserPrefContext);

  return (
    <div
      className={`${minWidth} ${
        selectedTheme === "Dark"
          ? "bg-black text-white border-white"
          : "bg-white text-black border-black"
      }`}
    >
      <Navbar />
      <Hero />
      <div className={`${maxWidth} mx-auto border-2 border-red-500 px-4`}>
        <Skills />
      </div>
    </div>
  );
};

export default App;
