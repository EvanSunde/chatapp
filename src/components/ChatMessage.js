import React, {useState} from 'react';
import { getAuth } from "firebase/auth";

function ChatMessage(props) {
  const { text, uid, photoURL,imageURL } = props.message;
  const auth = getAuth();
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return(<>
    <div className={`message ${messageClass}`}>
      <img src = {photoURL} alt="User"/>
      {imageURL ? <img src ={imageURL} alt="Message content"/>: <p>{text}</p>}
    </div>
    </>
  )
}

export default ChatMessage;


