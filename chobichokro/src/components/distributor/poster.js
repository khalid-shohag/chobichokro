import React, { useState } from 'react';

const Poster = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const imageFiles = Array.from(files);

    const imagePreviews = [];
    imageFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        imagePreviews.push(reader.result);
        if (imagePreviews.length === imageFiles.length) {
          setSelectedImages([...selectedImages, ...imagePreviews]);
        }
      };
    });
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <div>
    <h3>Select Posters</h3>
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      {selectedImages.length > 0 && (
        <div> 
          <ul>
            {selectedImages.map((imageDataUrl, index) => (
              <li key={index}>
                <img src={imageDataUrl} alt={`Image ${index + 1}`} />
                <button onClick={() => handleRemoveImage(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Poster;
