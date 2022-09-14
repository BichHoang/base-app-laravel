import Cookies from 'js-cookie';
import { AUTH_TOKEN } from '../config/constants';

export function getToken() {
  return Cookies.get(AUTH_TOKEN);
}

export function setToken(token: string, expires = 1) {
  return Cookies.set(AUTH_TOKEN, token, { expires: expires, secure: true, http_only: true });
}

export function removeToken() {
  return Cookies.remove(AUTH_TOKEN);
}
