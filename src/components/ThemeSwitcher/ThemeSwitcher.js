import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../../App";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <label className="ThemeSwitcher">
        <span className="ThemeSwitcher--day">Light theme</span>
        <Switch
          onChange={changeTheme}
          checked={theme.title === "dark" ? true : false}
        />
        <span className="ThemeSwitcher--night">Dark theme</span>
      </label>
    </>
  );
};

export default ThemeSwitcher;
