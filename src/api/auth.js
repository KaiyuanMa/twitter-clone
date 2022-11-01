const axios = require("axios");

//Get logged in user
const apiGetAuth = (token) => {
  return axios.get("/api/session", {
    headers: {
      authorization: token,
    },
  });
};

//User login
const apiSetAuth = (credentials) => {
  return axios.post("/api/session", credentials);
};

//User signUp
const apiSignUp = (user) => {
  return axios.post("api/session/signup", user);
};

export { apiGetAuth, apiSetAuth, apiSignUp };
