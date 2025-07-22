import { useEffect } from "react";
import "../style/abstract/base.scss";
import "../style/abstract/styles.scss";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import { useDarkMode } from "./ThemeContext";

const Main: React.FC = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <main>
      <Header />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Main;
