import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css'

const PromptSubmitted = () => {
    return (
        <>
            <div className={styles.container}>
                <Head><title>New Prompt</title></Head>
            </div>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Create a new prompt
                </h1>

                Submitted!

            </main>
        </>
    )
}

export default PromptSubmitted;
