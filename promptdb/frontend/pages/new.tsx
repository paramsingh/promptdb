import type { NextPage } from "next";
import Head from "next/head";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";

import { useState } from "react";
import { submitPrompt } from "../api-client";
import PromptSubmitted from "../components/PromptSubmitted";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const NewPrompt: NextPage = () => {
  const [id, setId] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [sampleOutput, setSampleOutput] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    submitPrompt(text, "", sampleOutput, description).then(
      (createdPromptId) => {
        setId(createdPromptId);
        setSubmitted(true);
      }
    );
  };

  const onInput = (e: any, fn: (s: string) => void): void => {
    e.preventDefault();
    const text = e.target.value.trim();
    fn(text);
  };

  if (submitted) {
    return <PromptSubmitted id={id} />;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>New prompt</title>
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Create a new prompt</h1>

        <Form
          className={styles.grid}
          style={{ marginTop: "40px" }}
          onSubmit={onSubmit}
        >
          <Form.Label>Your prompt text</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              size="lg"
              as="textarea"
              onChange={(e) => onInput(e, setText)}
              required={true}
            />
          </InputGroup>

          <Form.Label>Output</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              size="lg"
              as="textarea"
              onChange={(e) => onInput(e, setSampleOutput)}
              required={true}
            />
          </InputGroup>

          <Form.Label>Description</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              as="textarea"
              size="lg"
              onChange={(e) => onInput(e, setDescription)}
            />
          </InputGroup>
          <Button className={styles.button} onClick={onSubmit} type="submit">
            Submit
          </Button>
        </Form>
      </main>
      <Footer />
    </div>
  );
};

export default NewPrompt;
