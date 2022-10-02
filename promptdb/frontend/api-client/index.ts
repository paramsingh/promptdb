import axios from "axios";

const BASE_URL = "https://promptdb.param.codes/api/v1";

const submitPrompt = async (
  text: string,
  sampleInput: string,
  sampleOutput: string,
  description: string
) => {
  try {
    const response = await axios.post(`${BASE_URL}/prompt/save`, {
      text,
      sampleInput,
      sampleOutput,
      description,
    });
    return response.data.id;
  } catch (err) {
    alert("Something went wrong, please try again later!");
  }
};

const getPrompt = async (id: string) => {
  if (id === "undefined") {
    return null;
  }
  try {
    const response = await axios.get(`${BASE_URL}/prompt/get?id=${id}`);
    return response.data;
  } catch (err: any) {
    console.log(err);
    return null;
  }
};

const listPrompts = async (offset: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/prompt/browse?offset=${offset}`
    );
    return response.data.prompts;
  } catch (err: any) {
    console.log(err);
    return null;
  }
};

export { submitPrompt, getPrompt, listPrompts };
