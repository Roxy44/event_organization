import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDUj_G_HBXCnGVg5vRvMK5Hj0OQygJP57c',
    authDomain: 'sportseventsorganization-cfbd0.firebaseapp.com',
    databaseURL: 'https://sportseventsorganization-cfbd0-default-rtdb.firebaseio.com',
    projectId: 'sportseventsorganization-cfbd0',
    storageBucket: 'sportseventsorganization-cfbd0.appspot.com',
    messagingSenderId: '671285712810',
    appId: '1:671285712810:web:64ef1469bba4be42d2bdd3',
    measurementId: 'G-W5TFBF60CJ'
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);