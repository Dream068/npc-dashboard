import HttpService from './http.service';
import store from '../config/store';

export function baseUrl() {
  const authState = store.getState().micro;
  return `http://${authState.authIp}:${authState.authPort}/auth`;
}
export function login(data) {
  return HttpService.post(`${baseUrl()}/login`, data);
}

export function register(data) {
  return HttpService.post(`${baseUrl()}/register`, data);
}

export function changepassword(data) {
  return HttpService.post(`${baseUrl()}/changepassword`, data);
}
