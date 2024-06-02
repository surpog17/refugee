import axios from "axios";

// Function to get the token (you can implement your logic here)
export const getToken = () => {
  // For example, getting token from local storage
  return localStorage.getItem("token");
};

// Create an Axios instance with baseURL and authorization header
export const allApi = axios.create({
  baseURL: "https://idphcs.blackneb.com",
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});
export const allApiNotAuth = axios.create({
  baseURL: "https://idphcs.blackneb.com",
});

export const IMG_URL = "https://idphcs.blackneb.com";
