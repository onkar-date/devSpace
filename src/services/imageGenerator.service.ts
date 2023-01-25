import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

const generateImage = async (desc: string) => {
  console.log(import.meta.env);

  const url = `${BASE_URL}/image/generate`;
  return await axios.post(url, { desc });
};

export default {
  generateImage,
};
