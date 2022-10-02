import * as React from "react";
import NavItem from "./NavItem";
import styles from "../styles/Home.module.css";

const NAV_ITEMS = [
  { text: "PromptDB", href: "/" },
  { text: "About", href: "/about" },
  { text: "Browse", href: "/browse" },
  { text: "New prompt", href: "/new" },
];

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.text} text={item.text} href={item.href} />
      ))}
    </nav>
  );
};

export default NavBar;
