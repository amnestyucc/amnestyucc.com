// import { db } from "./firebase";

// export async function getEmailWithUid(uid) {
// 	let email;
// 	db.ref("/users/")
// 		.once("value")
// 		.then(snapshot => {
// 			snapshot.forEach(user => {
// 				if (user.val().uid == uid) email = user.val().email;
// 			});
// 		})

// }
