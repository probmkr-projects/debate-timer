import Link from "next/link";
import React from "react";
import styles from "../styles/lib/Header.module.scss";
import DarkModeButton from "./dark-mode-button";
import headerContents from "./header-contents";

const Header: React.FC<Record<string, never>> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Debate Timer</div>
      <div className={styles.menu}>
        <DarkModeButton />
        <nav className={styles.nav}>
          <ul>
            {headerContents.map((value, idx) => {
              return (
                <li key={idx}>
                  <Link href={value.url}>{value.name}</Link>
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
