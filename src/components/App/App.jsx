import React, { useEffect, useState } from 'react'; // Do we need the destrucured imports, or is this for clarity?
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import AddImage from '../AddImage/AddImage.jsx';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  // Let's use State for the setting the gallery, path, and description, and some Destructuring
  const [photoGallery, setPhotoGallery] = useState([]); 
  const [imagePath, setImagePath] = useState('');
  const [imageDescription, setImageDescription] = useState('');


  // Render Gallery on page load
  useEffect( () => {
    fetchPhotos(); // Use the GET
  }, []); // I don't remember why I need the empty array, other than that it prevents an infinite loop

  const fetchPhotos = () => { // arrow functions!
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((result) => {
      console.log('We got these with a GET: ', result.data);
      setPhotoGallery(result.data); // should be an array of db rows as objects - thx, router!
    }).catch((error) => {
      console.log('Error in GET', error); // see if something went wrong here
    });
  }

  const likePhoto = (photoId) => {
    // param photoId received from like-button function in GalleryItem
    axios({
      method: 'PUT',
      url: `gallery/like/${photoId}`, // pass the Id as param to the router
    }).then((response) => {
      console.log(`Clicked Like button!`, response); // success
      fetchPhotos(); // we made a change, so re-render the gallery on the DOM
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
      } // id and likes will be handled by server defaults
    }).then((response) => {
      console.log('Posted', response);
      //setImagePath(''); // reset the inputs 
      //setImageDescription(''); // TO-DO: figure out why this isn't working

      fetchPhotos(); // re-render the changes
    }).catch((error) => {
      console.log('Post failed', error); // respond with an error
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (imagePath) { // requiring an image path, no empty submissions
      addPhoto();
      //setImagePath(''); // tried resetting inputs here; still didn;t work.
      //setImageDescription(''); // might have to change the component to get the inputs to reset
    }
    else {
      alert('Please include an image');
    }
  }

  return (
      <div className="App">
        <Header /> {/** moved to own component */}
        <p>Gallery goes here</p>
        {/* from live solve, Monday {JSON.stringify(photoGallery)} */}
        <div className="Gallery">
          <div>
            <GalleryList list={photoGallery}
                          likePhoto={likePhoto}
            /> {/** import components here, passing down the needed props */}
          </div>
        </div>
        <div>
          <AddImage addPhoto={addPhoto}
                    handleSubmit={handleSubmit}
                    setImagePath={setImagePath}
                    setImageDescription={setImageDescription}
          /> {/** stretch goal component, with POSTing props sent down the line */}
        </div>
        <Footer/> {/** Shameless plug here */}
      </div>
    );
}

export default App;
