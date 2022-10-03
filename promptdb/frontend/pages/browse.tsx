import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { listPrompts } from "../api-client";
import PromptCard from "../components/PromptCard";
import NavBar from "../components/NavBar";
import { FormControl, InputGroup } from "react-bootstrap";
import { debounce } from "lodash";

const BrowsePrompts: NextPage = () => {
  const [prompts, setPrompts] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [filteredPrompts, setFilteredPrompts] = useState<any[]>([]);

  useEffect(() => {
    listPrompts(0).then((prompts) => {
      console.log(prompts);
      setPrompts(prompts);
      setFilteredPrompts(prompts);
    });
  }, []);

  const onFilterChange = (e: any) => {
    e.preventDefault();
    const filterString = e.target.value.trim();
    setFilter(filter);
    const filtered = prompts.filter(
      (prompt) => prompt.text.indexOf(filterString) != -1
    );
    setFilteredPrompts(filtered);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Browse prompts</title>
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Browse prompts</h1>

        <InputGroup style={{ maxWidth: "750px" }}>
          <FormControl
            size="lg"
            placeholder="Search"
            onChange={(e) => debounce(onFilterChange, 20)(e)}
          />
        </InputGroup>

        <div>
          {filteredPrompts?.map((prompt) => (
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
