import React, {useState} from 'react';

const Poster = ({onPosterSelect}) => {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (event) => {
        const files = event.target.files;
        const imageFiles = Array.from(files);
        onPosterSelect(files)

        const imagePreviews = [];
        imageFiles.forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                imagePreviews.push(reader.result);
                if (imagePreviews.length === imageFiles.length) {
                    setSelectedImages([...selectedImages, ...imagePreviews]);

                    // onPosterSelect([...selectedImages, ...imagePreviews]); // Callback to parent component
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
            <h3 style={{color: 'white', marginTop: '5px'}}>Select Posters</h3>
            <input type="file" accept="image/*" multiple onChange={handleImageChange}/>
            {selectedImages.length > 0 && (
                <div style={{display: 'flex', }}>
                    {/* <ul style={{listStyleType: 'n'}}> */}
                    {selectedImages.map((imageDataUrl, index) => (
                        <div key={index} style={{flex: 0.15}}>
                            <img src={imageDataUrl} alt={`Image ${index + 1}`} style={{height: '50px', width: '50px'}}/>
                            <button onClick={() => handleRemoveImage(index)}>Remove</button>
                        </div>
                    ))}
                    {/* </ul> */}
                </div>
            )}
        </div>
    );
};

export default Poster;


