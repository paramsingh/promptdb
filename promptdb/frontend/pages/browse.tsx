import type { NextPage } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import Head from "next/head";

const BrowsePrompts: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Browse prompts</title>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Browse prompts
                </h1>
            </main>
        </div>
    )
}


export default BrowsePrompts;
