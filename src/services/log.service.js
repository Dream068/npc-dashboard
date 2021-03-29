import HttpService from './http.service';
// eslint-disable-next-line import/no-cycle
import { store } from '../config/store';

export function baseUrl() {
  const authState = store.getState().micro;
  return `http://${authState.activityIp}:${authState.activityPort}/logs`;
}
export function logalllist() {
  return HttpService.get(`${baseUrl()}`);
}
