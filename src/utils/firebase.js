import firebase from "firebase";

const conf = {
	apiKey: "AIzaSyD_tsFBVbuZ-mdZ21eDqhVrwjVkSKsnULU",
	authDomain: "amnestyucc.firebaseapp.com",
	databaseURL: "https://amnestyucc.firebaseio.com",
	projectId: "amnestyucc",
	storageBucket: "amnestyucc.appspot.com",
	messagingSenderId: "309254919250",
	appId: "1:309254919250:web:6814850597a096dfa97b8b",
	measurementId: "G-ZZHPRXYC87"
};

firebase.initializeApp(conf);

export const auth = firebase.auth();
export const db = firebase.database();

export default firebase;

// const auth = firebase.auth();

// export default class Firebase {
// constructor() {
// firebase.initializeApp(conf);

// this.auth = firebase.auth();
// }
// }

// firebase.initializeApp(conf);

// import firebase from "firebase";

// const config = {
// 	apiKey: "AIzaSyCqyVYu_f4_pIBSrWl4-e1jm1fC9HrnmCM",
// 	authDomain: "amnestyinternational-a562d.firebaseapp.com",
// 	databaseURL: "https://amnestyinternational-a562d.firebaseio.com",
// 	projectId: "amnestyinternational-a562d",
// 	storageBucket: "amnestyinternational-a562d.appspot.com",
// 	messagingSenderId: "632967548977"
// };

// firebase.initializeApp(config);

// export const provider = new firebase.auth.GoogleAuthProvider();
// export const auth = firebase.auth();
// export const storage = firebase.firestore();

// export default firebase;
