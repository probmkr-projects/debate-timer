import React from "react";
import Header from "./header";
import styles from "../styles/lib/Layout.module.scss";

const Layout: React.FC<{
  children?: React.ReactNode;
  noSidePadding?: boolean;
}> = ({ children, noSidePadding }) => {
  return (
    <>
      <Header />
      <main
        className={`${styles.main} ${noSidePadding ? styles.noPadding : ""}`}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
