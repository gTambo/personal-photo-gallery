import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.js';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  const [photoGallery, setPhotoGallery] = useState([]);

  // Render Gallery on page load
  useEffect( () => {
    fetchPhotos();
  }, []);

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
        <Header />
        <p>Gallery goes here</p>
        <div className="Gallery">
          <div>
            <GalleryList list={photoGallery}
                          likePhoto={likePhoto}
            />
          </div>
          {/* <img src="images/goat_small.jpg"/> */}
        </div>
        <Footer/>
      </div>
    );
}

export default App;
