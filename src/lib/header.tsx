import React from "react";
import styles from "../styles/lib/Header.module.scss";
import headerContents from "./header-contents";

const Header: React.FC<Record<string, never>> = () => {
  console.log(styles);
  return (
    <header className={styles.header}>
      <div className={styles.title}>Debate Timer</div>
      <div className={styles.menu}>
        <div className={styles.darkModeButton}></div>
        <nav className={styles.nav}>
          <ul>
            {headerContents.map((value, idx) => {
              return (
                <li key={idx}>
                  <a href={value.url}>{value.name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
