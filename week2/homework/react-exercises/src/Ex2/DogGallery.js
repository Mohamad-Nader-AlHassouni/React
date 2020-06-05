import React, { useState } from "react";

import Button from '../Button Component/Button'
import DogPhoto from './DogPhoto'

const DogGallery = (props) => {
    const [isLoading, setLoading] = useState(false);
    const [Error, setError] = useState(false);
    const [dogPhotos, setDogPhotos] = useState([]);
  
    const getDogPhoto = async () => {
  
      try {
        setLoading(true);
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (response.ok) {
          const data = await response.json();
          setDogPhotos([...dogPhotos, data.message]);
        } else {
          throw Error('something wrong happened!!');
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div>
        <h1> Ex2: Dog Photo Gallery</h1>
        <Button onClick={getDogPhoto}>Get A Dog!</Button>
        {dogPhotos.length === 0 ? (
          <h2>Get your first dog by clicking the button!</h2>
        ) : (
          dogPhotos.map((URL, index) => (
            <div key={index} style={{display: "inline-grid"}}>
              <DogPhoto url={URL} />
            </div>
          ))
        )}
        {isLoading && <p>Loading ...</p>}
        {Error && <p>something wrong happened!!</p>}
      </div>
    );
  }
  

export default DogGallery;
