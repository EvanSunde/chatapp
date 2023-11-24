import firebase from '../firebaseConfig'
import 'firebase/compat/storage';
import {Puff} from 'react-loader-spinner';
import Modal from 'react-modal';
import React, { useState,useEffect } from 'react';


function ImageUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const storageRef = firebase.storage().ref();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setModalIsOpen(true);
  };

  const handleUpload = async () => {
    setLoading(true);
    if (file) {
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      const url = await fileRef.getDownloadURL();
      onUpload(url);
    }
    setLoading(false);
    setModalIsOpen(false);
  };

  const handleCancel = () => {
    setFile(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    const handleEsc =(event) => {
        if (event.keyCode === 27) handleCancel();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
        window.removeEventListener('keydown', handleEsc);
    }
  })

  return (
    <div>
      <button onClick={() => document.getElementById('fileInput').click()}>Upload Image</button>
      <input id="fileInput" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
      {modalIsOpen && (
        <Modal isOpen={modalIsOpen}>
          {loading ? (
            <Puff color="#00BFFF" height={100} width={100} />
          ) : (
            <button onClick={handleUpload}>Upload</button>
          )}
        </Modal>
      )}
    </div>
  );
}

export default ImageUpload;
