import type { NextPage } from 'next'
import Head from 'next/head';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import styles from '../styles/Home.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { submitPrompt } from '../api-client';
import PromptSubmitted from '../components/PromptSubmitted';

const NewPrompt: NextPage = () => {

  const [id, setId] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [sampleInput, setSampleInput] = useState<string>('');
  const [sampleOutput, setSampleOutput] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    submitPrompt(text, sampleInput, sampleOutput, description).then(createdPromptId => {
      setId(createdPromptId);
      setSubmitted(true);
    });
  };

  const onInput = (e: any, fn: (s: string) => void): void => {
    e.preventDefault();
    const text = e.target.value.trim();
    fn(text)
  }

  if (submitted) {
    return <PromptSubmitted id={id}/>
  }

  return (
    <div className={styles.container}>
      <Head>
          <title>New prompt</title>
      </Head>
      <main className={styles.main}>
          <h1 className={styles.title}>
              Create a new prompt
          </h1>

          <div className={styles.grid} style={{marginTop: '40px'}}>
            <Form.Label>Your prompt text</Form.Label>
            <InputGroup className="mb-3">
              <FormControl size="lg" as="textarea" onChange={(e) => onInput(e, setText)}/>
            </InputGroup>

            <Form.Label>Sample Input</Form.Label>
            <InputGroup className="mb-3">
              <FormControl size="lg" as="textarea" onChange={(e) => onInput(e, setSampleInput)}/>
            </InputGroup>

            <Form.Label>Sample Output</Form.Label>
            <InputGroup className="mb-3">
              <FormControl size="lg" as="textarea" onChange={(e) => onInput(e, setSampleOutput)}/>
            </InputGroup>

            <Form.Label>Description</Form.Label>
            <InputGroup className="mb-3">
              <FormControl as="textarea" size="lg" onChange={(e) => onInput(e, setDescription)}/>
            </InputGroup>
            <Button className={styles.button} onClick={onSubmit}>Submit</Button>
          </div>

      </main>
    </div>
  )
}

export default NewPrompt;
