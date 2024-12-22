import { useContext } from "react";
import Navbar from "./components/Navbar";
import { UserPrefContext } from "./context/UserPrefContext";
import Hero from "./components/Hero";
import { maxWidth, minWidth } from "./shared";

const App = () => {
  const { selectedTheme } = useContext(UserPrefContext);

  return (
    <div
      className={`${
        selectedTheme === "Dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />
        <Hero />
      <div className={`${maxWidth} ${minWidth} mx-auto`}>
      </div>
    </div>
  );
};

export default App;
