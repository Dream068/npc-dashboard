import axios from 'axios';
import { handleError, handleSuccess } from '../utils/toast';

const http = axios.create();

http.interceptors.request.use((config) => {
  const token = localStorage.token || '';
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

http.interceptors.response.use((result) => {
  if (result.status === 201) {
    handleSuccess('Successfully created.');
  }
  return result;
}, (error) => {
  if (error.response && error.response.data) {
    handleError(error.response.data.message || error.response.statusText);
  } else {
    handleError(error.message);
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
