"use client"
import React from 'react';
import Uploadform from './_components/uploadform';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';

// Define your Firebase configuration
const firebaseConfig = {
  // Your Firebase config here
};

function Upload() {
  // Initialize Firebase app
  const app = initializeApp(firebaseConfig);

  // Get storage instance
  const storage = getStorage(app);

  const uploadFile=(file)=>{
    // Function to handle file uploads
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, 'fileupload/'+file?.name);
    const uploadTask = uploadBytesResumableble(storageRef, file, metadata);
    uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    
  }, )

  }

  return (
    <div className='p-5 px-12 md:px-25'>
      <h2 className='text-[30px] text-center m-5'>
        Start <strong className='text-primary'> Uploading</strong> File and{' '}
        <strong className='text-primary'>Share </strong> it
      </h2>
      <Uploadform uploadBtnClick={(file) => uploadFile(file)} />
    </div>
  );
}

export default Upload;
