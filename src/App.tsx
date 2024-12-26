import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import { UserPrefContext } from "./context/UserPrefContext";
import Hero from "./components/Hero";
import { maxWidth, minWidth } from "./shared";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import SkillsList from "./pages/SkillsList";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import TaylorSwift from "./pages/TaylorSwift";

const App = () => {
  const { selectedTheme, disableTransitions } = useContext(UserPrefContext);

  const conditionalGlobalStyles = `
    html {
      scroll-behavior: ${disableTransitions ? "auto" : "smooth"};
    }
  `;

  return (
    <Router>
      <style>{conditionalGlobalStyles}</style>
      <div
        className={`${minWidth} ${
          selectedTheme === "Dark"
            ? "bg-black text-white"
            : "bg-white text-black"
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
                  <Projects />
                </div>
              </div>
            }
          />

          <Route
            path="/skills-list"
            element={
              <div
                className={`${maxWidth} mx-auto border-2 border-red-500 px-4`}
              >
                <SkillsList />
              </div>
            }
          />

          <Route
            path="/taylor-swift"
            element={
              <div
                className={`${maxWidth} mx-auto border-2 border-red-500 px-4`}
              >
                <TaylorSwift />
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
