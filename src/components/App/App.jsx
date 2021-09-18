import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {
  const [photoGallery, setPhotoGallery] = useState([]);
  
  const fetchPhotos = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((result) => {
      console.log(' got these with a GET ', result.data);
      setPhotoGallery(result.data);
    }).catch((error) => {
      console.log('Error in GET', error);
    });
  }

  // Render Gallery on page load
  useEffect( () => {
    fetchPhotos();
  }, []);

  const likePhoto = (photoId) => {
    axios({
      method: 'PUT',
      url: `gallery/like/${photoId}`,
    }).then((response) => {
      console.log(`Clicked Like button!`, response);
      fetchPhotos(); // we made a change, se re-render the gallery on the DOM
    }).catch((error) => {
      console.log('error in Like photo', error); // log the error
    })
  }

  // const handleClick

  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <div className="Gallery">
          <div>
            <GalleryList list={photoGallery}
                          likePhoto={likePhoto}
            />
          </div>
          {/* <img src="images/goat_small.jpg"/> */}
        </div>
      </div>
    );
}

export default App;
