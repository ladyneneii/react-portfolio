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
import "@/fireflies.css";

const App = () => {
  const { selectedTheme, disableTransitions, disableAnimations } =
    useContext(UserPrefContext);

  const conditionalGlobalStyles = `
    :root,
    #root,
    html {
      --purple:  ${
        selectedTheme === "Dark" ? "rgb(200, 112, 255)" : "rgb(157, 0, 255)"
      };
      --shadow: 0 0 200px 50px ${
        selectedTheme === "Dark"
          ? "rgba(217, 156, 255, 0.25)"
          : "rgba(116, 54, 155, 0.25)"
      };
      --shadow-sm: rgba(217, 156, 255, 0.452) 0px 10px 36px 0px,
        rgba(217, 156, 255, 0.06) 0px 0px 0px 1px;
    }
    
    html {
      scroll-behavior: ${disableTransitions ? "auto" : "smooth"};
      color: ${selectedTheme === "Dark" ? "white" : "black"};
    }

    .font-extralight, p, h6 {
      font-weight: ${selectedTheme === "Dark" ? 200 : 400};
    }

    .font-normal, h2, h4, div, span {
      font-weight: ${selectedTheme === "Dark" ? 400 : 600};
    }

    .border-2 {
      border-width: ${selectedTheme === "Dark" ? "1px" : "2px"};
    }

    .firefly::before {
      background: ${selectedTheme === "Dark" ? "black" : "white"};
    }
  `;

  const numOfFireflies = 15;

  return (
    <Router>
      <style>{conditionalGlobalStyles}</style>
      <div
        className={`${minWidth} ${
          selectedTheme === "Dark" ? "bg-black" : "bg-purpleLight"
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
                  className={`${maxWidth} mx-auto px-4`}
                >
                  <Skills />
                  <Experience />
                  <Projects />
                  <Thesis />
                </div>
                <div className="bg-black">
                  <Testimonials />
                </div>
              </div>
            }
          />

          <Route
            path="/skills-list"
            element={
              <div
                className={`${maxWidth} mx-auto px-4`}
              >
                <SkillsList />
              </div>
            }
          />

          <Route
            path="/taylor-swift"
            element={
              <div
                className={`${maxWidth} mx-auto px-4`}
              >
                <TaylorSwift />
              </div>
            }
          />

          <Route
            path="/filpass-v2-table"
            element={
              <div
                className={`${maxWidth} mx-auto px-4`}
              >
                <Table />
              </div>
            }
          />

          <Route
            path="/padayon"
            element={
              <div
                className={`${maxWidth} mx-auto px-4`}
              >
                <Padayon />
              </div>
            }
          />

          <Route
            path="/calculators"
            element={
              <div
                className={`${maxWidth} mx-auto px-4`}
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
      {/* fireflies */}
      {!disableAnimations &&
        Array.from({ length: numOfFireflies }, (_, i) => (
          <div key={i} className="firefly"></div>
        ))}
    </Router>
  );
};

export default App;
