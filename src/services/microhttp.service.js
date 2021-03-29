import axios from 'axios';

const baseURL = 'http://34.248.21.221:3000/';
const http = axios.create({ baseURL: `${baseURL}` });

http.interceptors.request.use((config) => {
  const token = localStorage.token || '';
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

http.interceptors.response.use((result) => {
  if (result.status === 201) {
    console.log('Successfully created.');
  }
  return result;
}, (error) => {
  if (error.response && error.response.data) {
    console.log(error.response.data.message || error.response.statusText);
  } else {
    console.log(error.message);
  }
});

function get(url, queries, headers = {}, params = {}) {
  return http.get(url, {
    params: queries,
    ...params,
    headers,
  });
}

function post(url, data, headers = {}, params = {}) {
  return http.post(url, data, {
    ...params,
    headers,
  });
}

function put(url, data, headers = {}, params = {}) {
  return http.put(url, data, {
    ...params,
    headers,
  });
}

function remove(url, data, headers = {}) {
  return http.delete(url, {
    headers,
    data,
  });
}

export default {
  http,
  get,
  post,
  put,
  remove,
};
