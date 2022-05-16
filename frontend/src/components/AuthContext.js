// import { auth } from "../firebase";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// export function login(email, password) {
//   return signInWithEmailAndPassword(auth, email, password);
// }
// export function signup(email, password) {
//   return createUserWithEmailAndPassword(auth, email, password);
// }
// export function logout() {
//   return signOut(auth);
// }
// export function signedin() {
//   return new Promise((resolve, reject) => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         resolve(user);
//       } else {
//         // User is signed out
//         console.log("Not LogIn");
//         resolve(user);
//       }
//     });
//   });
// }
