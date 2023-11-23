import React from 'react';
import { getAuth } from "firebase/auth";

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const auth = getAuth();
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return(<>
    <div className={`message ${messageClass}`}>
      <img src = {photoURL}/>
      <p>{text}</p>
    </div>
    </>
  )
}

export default ChatMessage;
