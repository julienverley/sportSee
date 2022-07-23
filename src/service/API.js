import axios from "axios";

// Get user data
export const getUserData = async () => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/user/${process.env.REACT_APP_USER_ID}`
    );
    return data;
  } catch (error) {
    alert("Désolé, une erreur est survenue !");
  }
};

// Get Activity data
export const getUserDataActivity = async () => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/user/${process.env.REACT_APP_USER_ID}/activity`
    );
    return data;
  } catch (error) {
    alert("Désolé, une erreur est survenue !");
  }
};

// Get Average sessions data
export const getUserDataAverageSessions = async () => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/user/${process.env.REACT_APP_USER_ID}/average-sessions`
    );
    return data;
  } catch (error) {
    alert("Désolé, une erreur est survenue !");
  }
};

// Get Performance data
// export const getUserDataPerformance = async () => {
//   try {
//     const data = await axios.get("http://localhost:3100/user/12/performance");
//     return data;
//   } catch (error) {}
// };
// ou bien :
//
//
// ----> Ajouter un try catch pour le fetch ----> alert("Désolé, une erreur est survenue !");
//
export const getUserDataPerformanceFetch = async () => {
  return fetch(
    `${process.env.REACT_APP_SERVER_URL}/user/${process.env.REACT_APP_USER_ID}/performance`
  )
    .then((response) => response.json())
    .then((jsonResponse) => {
      const transformedData = jsonResponse.data.data.map((perf) => {
        perf.kind = jsonResponse.data.kind[perf.kind];
        return perf;
      });
      return transformedData;
    });
};
