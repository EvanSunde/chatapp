import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export function SignIn() {
  const auth = getAuth();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return(
    <button onClick = {signInWithGoogle}> Sign In With Google</button>
  )
}

export function SignOut(){
  const auth = getAuth();
  return auth.currentUser && (
    <button onClick = {() => signOut(auth)}>Sign Out</button>
  )
}

