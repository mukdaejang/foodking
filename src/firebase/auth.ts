import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

import { auth } from '.';

// Google 로그인
const providerGoogle = new GoogleAuthProvider();
export const loginGoogle = () => {
  return signInWithPopup(auth, providerGoogle);
};

// Facebook 로그인
const providerFacebook = new FacebookAuthProvider();
export const loginFacebook = () => {
  return signInWithPopup(auth, providerFacebook);
};

// Github 로그인
const providerGithub = new GithubAuthProvider();
export const loginGithub = () => {
  return signInWithPopup(auth, providerGithub);
};
