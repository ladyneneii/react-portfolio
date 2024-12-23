import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import { UserPrefContext } from "./context/UserPrefContext";
import Hero from "./components/Hero";
import { maxWidth, minWidth } from "./shared";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Resume from "./components/Resume";

const App = () => {
  const { selectedTheme } = useContext(UserPrefContext);

  return (
    <Router>
      <div
        className={`${minWidth} ${
          selectedTheme === "Dark"
            ? "bg-black text-white border-white"
            : "bg-white text-black border-black"
        }`}
      >
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <div
                  className={`${maxWidth} mx-auto border-2 border-red-500 px-4`}
                >
                  <Skills />
                  <Experience />
                </div>
              </div>
            }
          />

          <Route
            path="/cv"
            element={
              <Resume />
            }
          />

          <Route
            path="/skills-list"
            element={
              <div
                className={`${maxWidth} mx-auto border-2 border-red-500 px-4`}
              >
                <Skills />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
