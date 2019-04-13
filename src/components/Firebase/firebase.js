import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCqyVYu_f4_pIBSrWl4-e1jm1fC9HrnmCM",
  authDomain: "amnestyinternational-a562d.firebaseapp.com",
  databaseURL: "https://amnestyinternational-a562d.firebaseio.com",
  projectId: "amnestyinternational-a562d",
  storageBucket: "amnestyinternational-a562d.appspot.com",
  messagingSenderId: "632967548977"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const storage = firebase.firestore();

export default firebase;
