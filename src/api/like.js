const axios = require("axios");

const apiGetUserLiked = (tweetId) => {
  return axios.get(`api/like/${tweetId}`);
};

const apiLike = (tweetId) => {
  return axios.post(`api/like/${tweetId}`);
};

const apiUnLike = (tweetId) => {
  return axios.delete(`/api/like/${tweetId}`);
};

export { apiGetUserLiked, apiLike, apiUnLike };
