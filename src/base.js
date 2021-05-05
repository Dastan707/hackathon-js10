import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyC-FkZ-rSYlcM-phEu8xteE_D7NmHaWSMI",
    authDomain: "fir-auth-613f5.firebaseapp.com",
    databaseURL: "https://fir-auth-613f5.firebaseio.com",
    projectId: "fir-auth-613f5",
    storageBucket: "fir-auth-613f5.appspot.com",
    messagingSenderId: "364755666965",
    appId: "1:364755666965:web:1d6dbfdb7291947a45261c",
    measurementId: "G-5HX2WG0XLJ"
});
export default app;