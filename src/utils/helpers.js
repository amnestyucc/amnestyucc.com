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

export function asciiToHex(str) {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n++) {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	}
	return arr1.join("");
}

export function hexToAscii(str1) {
	var hex = str1.toString();
	var str = "";
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
}
