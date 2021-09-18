import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  let [photoGallery, setPhotoGallery] = useState([]);

  const fetchPhotos = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((result) => {
      console.log(' got these with a GET ', result.data);
      setPhotoGallery(result.data);
    }).catch((error) => {
      console.log('Error in GET', error);
      alert('could not get photo');
    });
  }

  // Render Gallery on page load
  useEffect( () => {
    fetchPhotos();
  }, []);

  const likePhoto = (photoId) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${photoId}`
    }).then((response) => {
      console.log(`Clicked Like button!`, response);
      fetchPhotos(); // we made a change, se re-render the gallery on the DOM
    }).catch((error) => {
      console.log('error in Like photo', error); // log the error
    })
  }

  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <div className="Gallery">
          {photoGallery.map(photo => (
          <div key={photo.id} className="App-photo">
            <img className="image" src={photo.path}/>
            {photo.description}
            <button className="Like-button" onClick={ () => likePhoto(photo.id) }> 🤍 </button>
          </div>
          ))}
        
        {/* <img src="images/goat_small.jpg"/> */}
        </div>
      </div>
    );
}

export default App;
