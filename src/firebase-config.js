import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // put it to environment variable!!!
  apiKey: 'AIzaSyC5OR-I8elz8bqXDQ8pJe-G_jE0lIoQM64',
  authDomain: 'recipe-book-72f56.firebaseapp.com',
  projectId: 'recipe-book-72f56',
  storageBucket: 'recipe-book-72f56.appspot.com',
  messagingSenderId: '1089697401017',
  appId: '1:1089697401017:web:c67901039cc7ff29c73368',
  measurementId: 'G-BB300Y3JQJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
