import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail  // Renamed import
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvkCDzV-NOQ7gvXOhmrdJy_DuJimMds3Y",
  authDomain: "rura-tourism.firebaseapp.com",
  projectId: "rura-tourism",
  storageBucket: "rura-tourism.firebasestorage.app",
  messagingSenderId: "774370491778",
  appId: "1:774370491778:web:424d17758fc64002d6e39b",
  measurementId: "G-7QNV604HTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Sign up with email and password
export const signUp = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, {
      displayName: name
    });
    return { success: true, user: userCredential.user };
  } catch (error) {
    let errorMessage = error.message;
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = 'This email is already in use.';
    } else if (error.code === 'auth/weak-password') {
      errorMessage = 'Password should be at least 6 characters.';
    }
    return { success: false, error: errorMessage };
  }
};

// Sign in with email and password
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { success: true, user: userCredential.user };
  } catch (error) {
    let errorMessage = error.message;
    if (error.code === 'auth/user-not-found') {
      errorMessage = 'No account found with this email.';
    } else if (error.code === 'auth/wrong-password') {
      errorMessage = 'Incorrect password. Please try again.';
    }
    return { success: false, error: errorMessage };
  }
};

// Password reset function
export const sendPasswordResetEmail = async (email) => {
  try {
    await firebaseSendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    let errorMessage = error.message;
    if (error.code === 'auth/user-not-found') {
      errorMessage = 'No account found with this email.';
    }
    return { success: false, error: errorMessage };
  }
};