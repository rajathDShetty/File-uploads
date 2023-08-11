
import React, { useState } from 'react';

const FileUploader = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = function (e) {
        const fileData = e.target.result;
        onFileUpload(selectedFile.name, fileData);
        setSelectedFile(null);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" accept=".jpg,.jpeg,.png,.gif" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;
