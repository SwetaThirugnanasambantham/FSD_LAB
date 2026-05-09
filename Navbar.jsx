import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(SettingsContext);

  return (
    <div className="navbar">
      <h1>⚡ Pro Dashboard</h1>

      <button
        className="theme-btn"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Navbar;