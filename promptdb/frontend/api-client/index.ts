import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1'

const submitPrompt = (
    text: string,
    sampleInput: string,
    sampleOutput: string,
    description: string,
    setSubmitted: (loading: boolean) => void,
) => {
    axios.post(`${BASE_URL}/prompt/save`, {
        text,
        sampleInput,
        sampleOutput,
        description,
    }).then(response => {
        console.log(response.data);
        setSubmitted(false);
    }).catch(err => {
        alert("Something went wrong, please try again later!")
    })
}


export {submitPrompt};
