import firebase from "firebase";

export function createUser(email, password, name) {
  let newUser = null;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log("Generating new user object...");
      newUser = {
        email: email,
        name: name,
        uid: user.user.uid
      };
    })
    .then(function() {
      pushData(newUser);
    });
}

function pushData(newUser) {
  console.log("Pushing user data to database");
  firebase
    .database()
    .ref("/Users/")
    .push(newUser);
}
