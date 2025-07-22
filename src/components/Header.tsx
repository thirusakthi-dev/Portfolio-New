import { useEffect } from "react";
import "../style/blocks/header.scss";
import { ModelIcons } from "../utils/Icons";
import { useDarkMode } from "./ThemeContext";

const Header = () => {
  const { darkMode, toggleTheme } = useDarkMode();

  const [darkIcon, lightIcon] = ModelIcons;

  useEffect(() => {
    console.log(ModelIcons[0].icon);
  }, []);
  return (
    <section className="header-section">
      <nav className="header-nav">
        <p className="header-title">&lt;Portfolio/&gt; </p>
        <img
          src={darkMode ? lightIcon.icon : darkIcon.icon}
          className="theme"
          style={{ width: 24, height: 24 }}
          onClick={toggleTheme}
        ></img>
      </nav>
    </section>
  );
};

export default Header;
