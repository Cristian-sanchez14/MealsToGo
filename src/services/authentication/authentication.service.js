import { signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);