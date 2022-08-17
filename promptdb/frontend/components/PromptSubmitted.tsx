import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const PromptSubmitted = ({id}: {id: string}) => {
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

                <Link href={`/prompt/gpt3/${id}`}>
                    link
                </Link>

            </main>
        </>
    )
}

export default PromptSubmitted;
