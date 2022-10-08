import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA0kUlpZDIigNdjbiiA1WVjbHFJn5NZHGs",
    authDomain: "todo-list-app-c1a08.firebaseapp.com",
    projectId: "todo-list-app-c1a08",
    storageBucket: "todo-list-app-c1a08.appspot.com",
    messagingSenderId: "899402323131",
    appId: "1:899402323131:web:285187aeb68e1c97a0459e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };