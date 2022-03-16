import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  measurementId: process.env.REACT_APP_MEASUR_ID,
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Google 로그인
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
