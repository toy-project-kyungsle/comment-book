import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.AUTH_API_KEY,
  authDomain: process.env.AUTH_AUTH_DOMAIN,
  databaseURL: process.env.AUTH_DATABASE_URL,
  projectId: process.env.AUTH_PROJECT_ID,
  storageBucket: process.env.AUTH_STORAGE_BUCKET,
  messagingSenderId: process.env.AUTH_MESSAGIN_ID,
  appId: process.env.AUTH_APP_ID,
};

export default initializeApp(firebaseConfig);
