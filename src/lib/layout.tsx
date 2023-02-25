import React from "react";
import Header from "./header";
import styles from "../styles/lib/Layout.module.scss";

const Layout: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
