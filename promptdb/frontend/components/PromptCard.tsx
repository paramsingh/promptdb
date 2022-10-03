import * as React from "react";
import Link from "next/link";
import TextPrompt from "./TextPrompt";
import styles from "../styles/Home.module.css";

const PromptCard = ({
  text,
  sampleInput,
  sampleOutput,
  description,
  id,
}: {
  text: string;
  sampleInput: string;
  sampleOutput: string;
  description: string;
  id: string;
}) => {
  return (
    <div className={styles.card} style={{ maxWidth: "750px" }}>
      <Link href={`/prompt/gpt3/${id}`}>
        <a style={{ textDecoration: "none", color: "inherit" }}>
          <TextPrompt text={text} output={sampleOutput} />
        </a>
      </Link>
    </div>
  );
};

export default PromptCard;
