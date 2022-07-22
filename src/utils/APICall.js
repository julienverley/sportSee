import axios from "axios";

/* const getUserData = () => {
  const baseURL = "http://localhost:3100/user/18";
  axios.get(baseURL).then((response) => {
    return response.data;
  });
}; */

// Get user data
export const getUserData = async () => {
  try {
    const data = await axios.get("http://localhost:3100/user/12");
    return data;
  } catch (error) {}
};
// ou bien :
export const getUserDataFetch = async () => {
  return fetch("http://localhost:3100/user/12").then((response) =>
    response.json()
  );
};

// Get Activity data
export const getUserDataActivity = async () => {
  try {
    const data = await axios.get("http://localhost:3100/user/12/activity");
    return data;
  } catch (error) {}
};
// ou bien :
export const getUserDataActivityFetch = async () => {
  return fetch("http://localhost:3100/user/12/activity").then((response) =>
    response.json()
  );
  // traitement pour Activity :
  // .then
};

// Get Average sessions data
export const getUserDataAverageSessions = async () => {
  try {
    const data = await axios.get(
      "http://localhost:3100/user/12/average-sessions"
    );
    return data;
  } catch (error) {}
};
// ou bien :
export const getUserDataAverageSessionsFetch = async () => {
  return fetch("http://localhost:3100/user/12/average-sessions").then(
    (response) => response.json()
  );
  // traitement pour Average :
  //   const formatXaxis = (value) => {
  //   const labels = ["L", "M", "M", "J", "V", "S", "D"];
  //   return labels[value - 1];
  // };
  // .then
};

// Get Performance data
export const getUserDataPerformance = async () => {
  try {
    const data = await axios.get("http://localhost:3100/user/12/performance");
    return data;
  } catch (error) {}
};
// ou bien :
export const getUserDataPerformanceFetch = async () => {
  return fetch("http://localhost:3100/user/12/performance").then((response) =>
    response.json()
  );
  // traitement pour Performance :
  // const formatAngleAxis = (value) => {
  //   const kinds = [
  //     "Cardio",
  //     "Energie",
  //     "Endurance",
  //     "Force",
  //     "Vitesse",
  //     "Intensité",
  //   ];
  //   return kinds[value - 1];
  // };
  // .then
};
