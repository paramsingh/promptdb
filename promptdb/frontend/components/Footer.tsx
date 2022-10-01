import * as React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://twitter.com/iliekcomputers">Created by Param.</a>
    </footer>
  );
};

export default Footer;
