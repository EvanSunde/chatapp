import React, { useRef, useState,useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '../firebaseConfig';
import 'firebase/compat/firestore';
import { firestore } from '../firebaseConfig';
import ChatMessage from './ChatMessage';
import { getAuth } from 'firebase/auth';
import ImageUpload from './ImageUpload';


function ChatRoom(){
  const dummy = useRef();
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

  const handleImageUpload = async (url) => {
    const auth = getAuth();
    const { uid, photoURL } = auth.currentUser;

    await messageRef.add({
      imageURL: url,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    dummy.current.scrollIntoView({ behaviour: 'smooth' });
  };
    useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  return (<>
    <main>
      {message && message.map((msg) => <ChatMessage key={ msg.id} message ={msg}/>)}
      <span ref= {dummy}></span>
    </main>  
    <ImageUpload onUpload={handleImageUpload} />
    <form onSubmit={sendMessage}>
  <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="The chat is instant and cannot be deleted :)" />
  <button type='submit'>Send</button>
</form>

    </>
  )
}

export default ChatRoom;
