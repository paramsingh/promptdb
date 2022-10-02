import * as React from "react";
import Link from "next/link";
import TextPrompt from "./TextPrompt";

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
    <Link href={`/prompt/gpt3/${id}`}>
      <a style={{ textDecoration: "none", color: "inherit" }}>
        <div
          className="card"
          style={{ width: "18rem", margin: "10px 10px 10px 10px" }}
        >
          <div style={{ margin: "10px 10px 10px 10px" }}>
            <TextPrompt text={text} output={sampleOutput} />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PromptCard;
