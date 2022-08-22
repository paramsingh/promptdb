import { useState } from "react";
import { useRouter } from "next/router";
import { getPrompt } from "../../../api-client";
import NotFound from "../../../components/NotFound";

const GPT3Prompt = () => {
    const [text, setText] = useState<string>('');
    const [sampleInput, setSampleInput] = useState<string>('');
    const [sampleOutput, setSampleOutput] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [notFound, setNotFound] = useState<boolean>(false);

    const router = useRouter();
    const id: string = String(router.query.id);

    getPrompt(id).then(val => {
        setLoading(false);
        if (val === null) {
            setNotFound(true);
            return;
        }
        console.log(val);
        setText(val.text);
        setSampleInput(val["sample_input"]);
        setSampleOutput(val["sample_output"]);
        setDescription(val.description);
    });

    if (loading) {
        return <p>Loading...</p>;
    }
    if (notFound) {
        return <NotFound />
    }
    return (
        <>
            <p>ID: {id}</p>
            <p>prompt text: {text}</p>
            <p>sample input: {sampleInput}</p>
            <p>sample output: {sampleOutput}</p>
            <p>description: {description}</p>
        </>
    );
}

export default GPT3Prompt;
