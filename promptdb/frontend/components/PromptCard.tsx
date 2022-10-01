import * as React from "react";
import Link from "next/link";

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
      <div
        className="card"
        style={{ width: "18rem", margin: "10px 10px 10px 10px" }}
      >
        <h5 className="card-title">Prompt</h5>
        <p className="card-text">{text}</p>

        {sampleInput && (
          <>
            <h5 className="card-title">Sample Input</h5>
            <p className="card-text">{sampleInput}</p>
          </>
        )}

        {sampleOutput && (
          <>
            <h5 className="card-title">Sample Output</h5>
            <p className="card-text">{sampleOutput}</p>
          </>
        )}

        {description && (
          <>
            <h5 className="card-title">Description</h5>
            <p className="card-text">{description}</p>
          </>
        )}
      </div>
    </Link>
  );
};

export default PromptCard;
