import { useState } from "react";
import { useRouter } from "next/router";
import { getPrompt } from "../../../api-client";
import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import NotFound from "../../../components/NotFound";
import Footer from "../../../components/Footer";

const GPT3Prompt = () => {
  const [text, setText] = useState<string>("");
  const [sampleInput, setSampleInput] = useState<string>("");
  const [sampleOutput, setSampleOutput] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  const router = useRouter();
  const id: string = String(router.query.id);

  getPrompt(id).then((val) => {
    setLoading(false);
    if (val === null) {
      setNotFound(true);
      return;
    }
    setText(val.text);
    setSampleInput(val["sample_input"]);
    setSampleOutput(val["sample_output"]);
    setDescription(val.description);
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (notFound) {
    return <NotFound />;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Prompt details - PromptDB</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title} style={{ marginBottom: "50px" }}>
          Prompt details
        </h1>
        <p>Prompt text: {text}</p>
        <p>Sample Input: {sampleInput}</p>
        <p>Sample Output: {sampleOutput}</p>
        <p>Description: {description}</p>
      </main>
      <Footer />
    </div>
  );
};

export default GPT3Prompt;
