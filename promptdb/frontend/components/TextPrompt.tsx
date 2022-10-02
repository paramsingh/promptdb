import * as React from "react";

const TextPrompt = ({ text, output }: { text: string; output: string }) => {
  return (
    <div style={{ whiteSpace: "pre-line" }}>
      <div>{text}</div>
      <span style={{ backgroundColor: "#D2F4D3" }}>{output}</span>
    </div>
  );
};

export default TextPrompt;
