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
                <h1 className={styles.title} style={{marginBottom: "20px"}}>
                    Create a new prompt
                </h1>

                <h2>Submitted!{' '}(

                    <Link href={`/prompt/gpt3/${id}`}>
                        Link
                    </Link>)
                </h2>

            </main>
        </>
    )
}

export default PromptSubmitted;
