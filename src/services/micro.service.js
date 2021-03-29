import HttpService from './microhttp.service';

const baseUrl = 'find';
const version = '1.0.0';

export function authService() {
  return HttpService.get(`${baseUrl}/auth-service/${version}`);
}
