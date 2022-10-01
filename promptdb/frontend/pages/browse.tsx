import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { listPrompts } from "../api-client";
import PromptCard from "../components/PromptCard";

const BrowsePrompts: NextPage = () => {
  const [prompts, setPrompts] = useState<any[]>([]);

  useEffect(() => {
    listPrompts(0).then((prompts) => {
      console.log(prompts);
      setPrompts(prompts);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Browse prompts</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Browse prompts</h1>

        <div className={styles.grid}>
          {prompts?.map((prompt) => (
            <PromptCard
              key={prompt.uuid}
              id={prompt.uuid}
              text={prompt.text}
              sampleInput={prompt.sample_input}
              sampleOutput={prompt.sample_output}
              description={prompt.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default BrowsePrompts;
