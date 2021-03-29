import HttpService from './http.service';
// eslint-disable-next-line import/no-cycle
import { store } from '../config/store';

export function baseUrl() {
  const authState = store.getState().micro;
  return `http://${authState.userIp}:${authState.userPort}/users`;
}
export function useradd(data) {
  return HttpService.post(`${baseUrl()}/add`, data);
}

export function userpaginate() {
  return HttpService.get(`${baseUrl()}/paginate`);
}

export function usersearch(data) {
  return HttpService.post(`${baseUrl()}/search`, data);
}

export function userupdate(data) {
  const id = store.getState().auth.user._id;
  return HttpService.put(`${baseUrl()}/${id}`, data);
}
