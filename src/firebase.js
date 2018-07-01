import * as firebase from 'firebase';


const config ={
    apiKey: "AIzaSyDkrqV23WG_zXYbcu4p_T1IWL4RTZceAO8",
    authDomain: "almostthere-pk.firebaseapp.com",
    databaseURL: "https://almostthere-pk.firebaseio.com",
    projectId: "almostthere-pk",
    storageBucket: "",
    messagingSenderId: "512634844682"
};
const firebaseApp = firebase.initializeApp(config);
export default firebaseApp;