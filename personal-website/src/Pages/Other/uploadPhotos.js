import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import "./uploadPhotos.css";

/*const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
  
    const handleImageChange = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    const handleUpload = () => {
      if (!image) return;
  
      // Create a storage reference
      const storageRef = ref(storage, `images/${image.name}`);
  
      // Start the upload
      const uploadTask = uploadBytesResumable(storageRef, image);
  
      // Monitor the upload progress
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Upload failed:", error);
        },
        () => {
          // Get the download URL after a successful upload
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setImageUrl(url);
            console.log("Image available at:", url);
          });
        }
      );
    };
  
    return (
      <div className="content-container">
        <h1>Upload Image</h1>
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleUpload}>Upload</button>
        <p>Upload Progress: {uploadProgress}%</p>
        {imageUrl && (
          <div>
            <p>Uploaded Image:</p>
            <img src={imageUrl} alt="Uploaded" style={{ width: "200px" }} />
          </div>
        )}
      </div>
    );
  };
  
  export default ImageUploader;*/