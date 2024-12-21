import { useContext } from "react";
import Navbar from "./components/Navbar";
import { UserPrefContext } from "./context/UserPrefContext";

const App = () => {
  const { selectedTheme } = useContext(UserPrefContext);

  return (
    <div
      className={`${
        selectedTheme === "Dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />
    </div>
  );
};

export default App;
