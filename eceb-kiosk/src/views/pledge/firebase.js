import { firebase } from "@firebase/app";
import "@firebase/firestore";
var config  = require('./config');

const firebaseApp = firebase.initializeApp({
    apiKey: config.apikey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
    measurementId: config.measurementId
});

export const db = firebaseApp.firestore();