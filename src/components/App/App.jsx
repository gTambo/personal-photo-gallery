import React, {useState, useEffect } from 'react';
import './App.css';

function App() {
  let [photoGallery, setPhotoGallery] = useState([]);

  const getPhotos = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((result) => {
      console.log(' got these with a GET ', result);
      setPhotoGallery(result.data);
    }).catch((error) => {
      console.log('Error in GET', error);
      alert('could not get photo')
  }
  
  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
