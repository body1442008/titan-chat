import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
}