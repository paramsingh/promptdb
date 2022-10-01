import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import NavBar from "../components/NavBar";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PromptDB - About</title>
      </Head>
      <NavBar />

      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>

        <p>
          PromptDB is a database for prompts for large language models like
          GPT-3.
        </p>

        <p>
          Come chat with{" "}
          <Link href="https://twitter.com/iliekcomputers">me</Link> if you want
          to help out!
        </p>
      </main>
    </div>
  );
};

export default About;
