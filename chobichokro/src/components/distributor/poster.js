import React, { useState } from 'react';

const Poster = ({ onPosterSelect }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    // const imageFiles = Array.from(files);

    setSelectedImages(files); // Store selected files

    onPosterSelect(files); // Callback to parent component with selected files
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
    onPosterSelect(updatedImages); // Callback to parent component with updated files
  };

  return (
    <div>
      <h3>Select Posters</h3>
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      {selectedImages.length > 0 && (
        <div style={{ display: 'flex' }}>
          {selectedImages.map((imageFile, index) => (
            <div key={index} style={{ flex: 0.15 }}>
              <img
                src={URL.createObjectURL(imageFile)}
                alt={`Image ${index + 1}`}
                style={{ height: '50px', width: '50px' }}
              />
              <button onClick={() => handleRemoveImage(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Poster;


// import React, { useState } from 'react';
// import { FaLeaf } from 'react-icons/fa';

// const Poster = ({ onPosterSelect }) => {
//   const [selectedImages, setSelectedImages] = useState();

//   const handleImageChange = (event) => {
//     const files = event.target.files;
//     const imageFiles = Array.from(files);

//     const imagePreviews = [];
//     imageFiles.forEach((file) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         imagePreviews.push(reader.result);
//         if (imagePreviews.length === imageFiles.length) {
//           setSelectedImages([...selectedImages, ...imagePreviews]);
          
//           onPosterSelect([...selectedImages, ...imagePreviews]); // Callback to parent component
//         }
//       };
//     });
//   };


//   const handleRemoveImage = (index) => {
//     const updatedImages = [...selectedImages];
//     updatedImages.splice(index, 1);
//     setSelectedImages(updatedImages);
//   };

//   return (
//     <div>
//     <h3>Select Posters</h3>
//       <input  type="file" accept="image/*" multiple onChange={handleImageChange} />
//       {selectedImages.length > 0 && (
//         <div style={{display: 'flex'}}> 
//           {/* <ul style={{listStyleType: 'n'}}> */}
//             {selectedImages.map((imageDataUrl, index) => (
//               <div key={index} style={{flex: 0.15}}>
//                 <img src={imageDataUrl} alt={`Image ${index + 1}`} style={{height: '50px', width: '50px'}} />
//                 <button onClick={() => handleRemoveImage(index)}>Remove</button>
//               </div>
//             ))}
//           {/* </ul> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Poster;


// import React, { useState } from 'react';
// import { FaLeaf } from 'react-icons/fa';

// const Poster = ({ onPosterSelect }) => {
//   const [selectedImages, setSelectedImages] = useState([]);

//   const handleImageChange = (event) => {
//     const files = event.target.files;
//     const imageFiles = Array.from(files);

//     const imagePreviews = [];

//     const readAndAddToPreviews = (file) => {
//       console.log("File->", file);
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         imagePreviews.push(reader.result);

//         if (imagePreviews.length === imageFiles.length) {
//           setSelectedImages(imagePreviews);
//           onPosterSelect(imagePreviews); // Callback to parent component with base64 images
//         }
//       };
//     };

//     imageFiles.forEach(readAndAddToPreviews);
//   };

//   const handleRemoveImage = (index) => {
//     const updatedImages = [...selectedImages];
//     updatedImages.splice(index, 1);
//     setSelectedImages(updatedImages);
//     onPosterSelect(updatedImages); // Callback to parent component with updated base64 images
//   };

//   return (
//     <div>
//       <h3>Select Posters</h3>
//       <input type="file" accept="image/*" multiple onChange={handleImageChange} />
//       {selectedImages.length > 0 && (
//         <div style={{ display: 'flex' }}>
//           {selectedImages.map((imageDataUrl, index) => (
//             <div key={index} style={{ flex: 0.15 }}>
//               <img
//                 src={imageDataUrl}
//                 alt={`Image ${index + 1}`}
//                 style={{ height: '50px', width: '50px' }}
//               />
//               <button onClick={() => handleRemoveImage(index)}>Remove</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Poster;
