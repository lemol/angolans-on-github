import firebase from 'firebase/app';
import 'firebase/auth';

const AUTH_TOKEN_KEY = 'github:token';

export async function toggleSignIn() {
  const auth = firebase.auth();
  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope('public_repo');

  try {
    const result = await auth.signInWithPopup(provider);
    console.log(result)
    const token = result.credential.accessToken;
    setToken(token);
    return token;
  } catch(error) {
    const errorCode = error.code;

    if (errorCode === 'auth/account-exists-with-different-credential') {
      alert('You have already signed up with a different auth provider for that email.');
    } else {
      console.error(error);
    }
  }
}

export async function getAuthToken() {
  const user = firebase.auth().currentUser;

  if(!user) {
    signOut();
    return null;
  }

  const token = getToken() || (await toggleSignIn());

  return token;
}

export function signOut() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  firebase.auth().signOut();
}

function setToken(token) {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

function getToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}
