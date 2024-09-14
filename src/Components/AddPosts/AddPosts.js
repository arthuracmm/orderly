import React, { useState } from 'react';
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
import { ImagedB } from './Config';
import { ref,uploadBytes } from 'firebase/storage';
import { v4 } from "uuid";


function AddPosts() {
const [img,setImg] = useState('')
const handleClick = () =>{
  const imgRef = ref(ImagedB,`files${v4()}`)
  uploadBytes(imgRef,img)
}
return(
  <div className="App">
    <input type="file" onChange={(e) => setImg(e.target.files[0])} />
    <button onClick={handleClick}>Upload</button>
  </div>
)
  
}
export default AddPosts;
