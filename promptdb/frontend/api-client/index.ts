import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1'

const submitPrompt = (
    text: string,
    sampleInput: string,
    sampleOutput: string,
    description: string,
    setSubmitted: (loading: boolean) => void,
    setId: (id: string) => void,
) => {
    axios.post(`${BASE_URL}/prompt/save`, {
        text,
        sampleInput,
        sampleOutput,
        description,
    }).then(response => {
        console.log(response.data);
        setSubmitted(true);
        setId(response.data.id)
    }).catch(err => {
        alert("Something went wrong, please try again later!")
    })
}

const getPrompt = async (id: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/prompt/get?id=${id}`)
        return response.data;
    } catch (err: any) {
        console.log(err);
        return null;
    }
}

export {submitPrompt, getPrompt};
