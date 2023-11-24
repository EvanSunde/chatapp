import React from 'react';
import { SignIn } from './GoogleAuth';
import '../css/SignInPage.css';

function SignInPage() {
  return (
    <div className="SignInPage">
      <h1>Welcome to Instant Chat</h1>
      <p>Please sign in to continue:</p>
      <SignIn />
    </div>
  );
}

export default SignInPage;
