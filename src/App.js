import React from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import firebaseConfig from './firebaseConfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics'
import { SignIn, SignOut } from './components/GoogleAuth';
import ChatRoom from './components/ChatRoom';
import { getAnalytics } from 'firebase/analytics';

firebase.initializeApp(firebaseConfig);

const analytics = getAnalytics();

const auth = getAuth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>ChatAPP-023</h1>
        <SignOut/>
      </header>
      <section>
        {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}

export default App;
