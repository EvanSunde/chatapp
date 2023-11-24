import React from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';
import { SignIn, SignOut } from './components/GoogleAuth';
import ChatRoom from './components/ChatRoom';
import SignInPage from './components/SignInPage';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>Instant Chat</h1>
        <SignOut/>
      </header>
      <section>
        {user ? <ChatRoom/> : <SignInPage/>}
      </section>
    </div>
  );
}

export default App;
