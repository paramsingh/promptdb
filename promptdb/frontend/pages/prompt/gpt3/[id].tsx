import { useState } from "react";
import { useRouter } from "next/router";
import { getPrompt } from "../../../api-client";

const GPT3Prompt = () => {
    const [text, setText] = useState<string>('');
    const [sampleInput, setSampleInput] = useState<string>('');
    const [sampleOutput, setSampleOutput] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    const router = useRouter();
    const id: string = String(router.query.id);

    getPrompt(id).then(val => {
        if (val == null) {
            return;
        }
        console.log(val);
        setText(val.text);
        setSampleInput(val["sample_input"]);
        setSampleOutput(val["sample_output"]);
        setDescription(val.description);
        setLoading(false);
    });

    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <p>{id}</p>
            <p>{text}</p>
            <p>{sampleInput}</p>
            <p>{sampleOutput}</p>
            <p>{description}</p>
        </>
    );
}

export default GPT3Prompt;
