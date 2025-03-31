import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    sendEmailVerification(userCredential.user);
    return userCredential.user;
  } catch (error: any) {
    let errMessage = "";
    switch (error.code) {
      case "auth/email-already-in-use":
        errMessage =
          "This email is already in use. Please try a different one.";
        break;
      case "auth/invalid-email":
        errMessage = "Invalid email format. Please check your email.";
        break;
      case "auth/weak-password":
        errMessage = "Invalid email format. Please check your email.";
      default:
        errMessage = "Error creating user: " + error.message;
    }
    console.error("Error creating user:", error.message);
    throw new Error(errMessage);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error: any) {
    let errMessage = "";
    switch (error.code) {
      case "auth/user-disabled":
        errMessage = "Your account has been disabled. Please contact support.";
        break;
      case "auth/invalid-credential":
        errMessage = "Incorrect email or password. Please try again.";
        break;
      case "auth/user-not-found":
        errMessage = "User not found. There is no existing user record";
        break;
      default:
        errMessage = "Error signing in: " + error.message;
    }
    console.error("Error signing in:", error.message);
    throw new Error(errMessage);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
    return error;
  }
};
