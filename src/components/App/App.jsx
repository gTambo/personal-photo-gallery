import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  let [photoGallery, setPhotoGallery] = useState([]);

  const getPhotos = () => {
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

  useEffect( () => {
    getPhotos();
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <div className="Gallery">
          {photoGallery.map(photo =>(<div key={photo.id} className="App-photo"><img className="image" src={photo.path}/>{photo.description}</div>))}
        
        {/* <img src="images/goat_small.jpg"/> */}
        </div>
      </div>
    );
}

export default App;
