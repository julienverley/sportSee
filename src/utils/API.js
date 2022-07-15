import axios from "axios";

/* const getUserData = () => {
  const baseURL = "http://localhost:3100/user/18";
  axios.get(baseURL).then((response) => {
    return response.data;
  });
}; */

export const getUserData = async () => {
  try {
    const data = await axios.get("http://localhost:3100/user/12");

    return data;
  } catch (error) {
    // console.error("error", error);
  }
};
