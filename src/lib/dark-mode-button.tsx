import React from "react";
import styles from "../styles/lib/DarkModeButton.module.scss";

const toggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
  const body = document.body;
  if (event.target.checked) {
    body?.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body?.classList.remove("dark-mode");
    localStorage.setItem("theme", "nothing");
  }
};

const DarkModeButton: React.FC<Record<string, never>> = () => {
  React.useEffect(() => {
    const strage = localStorage.getItem("theme");
    const useDark =
      strage === "dark" ||
      (strage === null && matchMedia("(prefers-color-scheme: dark)"));
    if (useDark) {
      document.body.classList.add("dark-mode");
      const button = document.getElementById("darkModeSwitchButton");
      if (button instanceof HTMLInputElement) {
        button.checked = true;
      }
    }
  }, []);

  return (
    <div className={styles.darkModeButton}>
      <input
        type="checkbox"
        id="darkModeSwitchButton"
        className={styles.darkModeSwitchInput}
        onChange={toggleDarkMode}
      />
      <label htmlFor="darkModeSwitchButton"></label>
    </div>
  );
};

export default DarkModeButton;
