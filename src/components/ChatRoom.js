import React, { useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import ChatMessage from './ChatMessage';
import { getAuth } from 'firebase/auth';

function ChatRoom(){
  const dummy = useRef();
  const firestore = firebase.firestore();
  const messageRef = firestore.collection('message')
  const query = messageRef.orderBy('createdAt').limit(30);
  
  const [message] = useCollectionData(query, {idField: 'id'})
  const [formValue, setFormValue] = useState('')

  const sendMessage = async(e) => {
    e.preventDefault();

    const auth = getAuth();
    const {uid, photoURL} = auth.currentUser;

    await messageRef.add({
      text: formValue,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue('')
    dummy.current.scrollIntoView({ behaviour:'smooth'});
  };

  return (<>
    <main>
      {message && message.map((msg) => <ChatMessage key={ msg.id} message ={msg}/>)}
      <span ref= {dummy}></span>
    </main>

    <form onSubmit={sendMessage}>
      <input value = {formValue} onChange ={(e)=>setFormValue(e.target.value)} placeholder="what? you got something to say?" />
      <button type='submit'>Send</button>
    </form>
    </>
  )
}

export default ChatRoom;
