import React from "react";
import styles from "./Layout.module.css";

const Layout = (props) => (
  <>
    <div>Toolbar, Side Drawer and backdrop</div>
    <main className={styles.content}>{props.children}</main>
  </>
);

export default Layout;
