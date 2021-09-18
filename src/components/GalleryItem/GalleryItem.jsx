import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem ({ photo, likePhoto }) {
  const [photoClicked, setPhotoClicked] = useState(false);

    return (
        <> {photoClicked ? (<div  className="Image-border" onClick={ () => setPhotoClicked(false)}>
            <p className="Description" >{photo.description}</p>
            <button className="Like-button" onClick={ () => likePhoto(photo.id) }> 🧡 </button>Likes: {photo.likes}
          </div>) : (<>
            <img className="image" src={photo.path} onClick={ () => setPhotoClicked(true)}/>
            <button className="Like-button" onClick={ () => likePhoto(photo.id) }> 🧡 </button>Likes: {photo.likes}</>
          )} 
      </>
      
    )
}

export default GalleryItem;