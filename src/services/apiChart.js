const axios = require('axios');

const api = () => {
  const result = axios(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
  .then(({ data }) => {
    return data;
  })
    .catch((err) => err);
  return result;
};

export default api;
