const axios = require("axios");

const apiGetFollower = (userId) => {
  return axios.get(`/follower/${userId}`);
};

const apiGetFollowee = (userId) => {
  return axios.get(`/follower/followee/${userId}`);
};

const apiFollow = (followeeId) => {
  return axios.post(`/${followeeId}`);
};

const apiUnFollow = (followeeId) => {
  return axios.delete(`/${followeeId}`);
};

export { apiGetFollower, apiGetFollowee, apiFollow, apiUnFollow };
