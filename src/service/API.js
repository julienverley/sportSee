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
export const getUserDataPerformance = async () => {
  return fetch(
    `${process.env.REACT_APP_SERVER_URL}/user/${process.env.REACT_APP_USER_ID}/performance`
  )
    .then((response) => response.json())
    .then((jsonResponse) => {
      const transformedData = jsonResponse.data.data.map((perf) => {
        perf.kind =
          jsonResponse.data.kind[perf.kind][0].toUpperCase() +
          jsonResponse.data.kind[perf.kind].slice(1);
        return perf;
      });
      return transformedData;
    })
    .catch((error) => {
      alert("Désolé, une erreur est survenue !");
    })
    .catch((error) => {
      alert(
        "Désolé, une erreur est survenue lors du traitement de votre performance !"
      );
    });
};
