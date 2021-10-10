import React, { useState } from 'react';
import './GalleryItem.css';
import { 
    Grid, 
    SvgIcon, 
    Icon 
  } from "@material-ui/core";

function GalleryItem ({ photo, likePhoto }) { // destructing useful props
  const [photoClicked, setPhotoClicked] = useState(false); // using state for conditional rendering on click event

    return (
        <> {photoClicked ? (<div  className="Image-border" onClick={ () => setPhotoClicked(false)}> 
            <p className="Description" >{photo.description}</p>
            <button className="Like-button" onClick={ () => likePhoto(photo.id) }> 🧡 </button>Likes: {photo.likes}
          </div>) : (<>
            <img className="image" src={photo.path} onClick={ () => setPhotoClicked(true)}/>
            <button className="Like-button" onClick={ () => likePhoto(photo.id) }> 🧡 </button>Likes: {photo.likes}</>
          )} {/* used ternary operator --> if clicked is true, show description, else show photo, including like button for both cond. */} 
      </> //enclosing return in parent div
      
    )
}

export default GalleryItem;