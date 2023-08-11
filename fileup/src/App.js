import React, { useState, useEffect } from 'react';
import FileUploader from './FileUploader';
import UploadedFiles from './UploadedFiles';

function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
    setUploadedFiles(storedFiles);
  }, []);

  const handleFileUpload = (fileName, fileData) => {
    const newFile = { name: fileName, data: fileData };
    const updatedFiles = [...uploadedFiles, newFile];
    setUploadedFiles(updatedFiles);
    localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
  };

  return (
    <div className="App">
      <h1>File Upload and Storage</h1>
      <FileUploader onFileUpload={handleFileUpload} />
      <UploadedFiles files={uploadedFiles} />
    </div>
  );
}

export default App;