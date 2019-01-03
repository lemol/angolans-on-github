const AUTH_TOKEN_KEY = 'auth:token';

export function isAuthenticated() {
  return !!getAuthToken();
}

export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function logout() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function loginSuccess(token) {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}
