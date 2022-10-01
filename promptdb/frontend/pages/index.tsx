import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PromptDB</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to PromptDB!</h1>

        <p className={styles.description}>
          PromptDB is the open database to store and share prompts for models
          like GPT-3, Dall-E, Midjourney and StableDiffusion.
        </p>

        <div className={styles.grid}>
          <Link href="/new">
            <div className={styles.card}>
              <h2>New prompt &rarr;</h2>
              <p>Add a new prompt to PromptDB</p>
            </div>
          </Link>

          <Link href="/browse">
            <div className={styles.card}>
              <h2>Browse &rarr;</h2>
              <p>Look through the prompts in PromptDB</p>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
