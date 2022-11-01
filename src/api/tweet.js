const axios = require("axios");

const apiGetTweet = (tweetId) => {
  return axios.get(`api/tweet/${tweetId}`);
};
