import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import AddImage from '../AddImage/AddImage.jsx';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  const [photoGallery, setPhotoGallery] = useState([]);
  let [imagePath, setImagePath] = useState('');
  let [imageDescription, setImageDescription] = useState('');


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

  const addPhoto = () => {
    axios({
      method: 'POST',
      url: `/gallery`,
      data: {
        path: imagePath,
        description: imageDescription,
      }
    }).then((response) => {
      console.log('Posted', response);
      setImagePath('');
      setImageDescription('');

      fetchPhotos();
    }).catch((error) => {
      console.log('Post failed', error);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (imagePath) {
      addPhoto();
    }
    else {
      alert('Please include an image');
    }
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
        <div>
          <AddImage addPhoto={addPhoto}
                    handleSubmit={handleSubmit}
                    setImagePath={setImagePath}
                    setImageDescription={setImageDescription}
          />
        </div>
        <Footer/>
      </div>
    );
}

export default App;
