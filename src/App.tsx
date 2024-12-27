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
import Table from "./pages/Table";
import NotFound from "./pages/NotFound";
import Padayon from "./pages/Padayon";
import Calculators from "./pages/Calculators";
import Thesis from "./components/Thesis";
import Testimonials from "./components/Testimonials";

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
                  <Thesis />
                  <Testimonials />
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

          <Route
            path="/filpass-v2-table"
            element={
              <div
                className={`${maxWidth} mx-auto border-2 border-red-500 px-4`}
              >
                <Table />
              </div>
            }
          />

          <Route
            path="/padayon"
            element={
              <div
                className={`${maxWidth} mx-auto border-2 border-red-500 px-4`}
              >
                <Padayon />
              </div>
            }
          />

          <Route
            path="/calculators"
            element={
              <div
                className={`${maxWidth} mx-auto border-2 border-red-500 px-4`}
              >
                <Calculators />
              </div>
            }
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
