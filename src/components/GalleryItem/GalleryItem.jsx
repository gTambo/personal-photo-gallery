import React, { useState } from 'react';
import './GalleryItem.css';
import { 
    Grid, 
    SvgIcon, 
    DeleteIcon,
    Icon,
    Button
  } from "@material-ui/core";
  

function GalleryItem ({ photo, likePhoto }) { // destructing useful props
  const [photoClicked, setPhotoClicked] = useState(); // using state for conditional rendering on click event

    return (
        <Grid item> {photoClicked ? (<div  className="Image-border" onClick={ () => setPhotoClicked(!photoClicked)}> 
            <p className="Description" >{photo.description}</p>
            <Button 
              variant="contained" 
              color="secondary"
              onClick={ () => likePhoto(photo.id) }
              >
              <Icon>🤍</Icon>
              </Button>
              Likes: {photo.likes}
          </div>
          ) : (
          <>
              <img className="image" src={photo.path} onClick={ () => setPhotoClicked(!photoClicked)}/>
              <Button 
                variant="contained" 
                color="secondary"
                onClick={ () => likePhoto(photo.id) }
              >
              <Icon>🤍</Icon>
              </Button>
              Likes: {photo.likes}
          </>
          )} {/* used ternary operator --> if clicked is true, show description, else show photo, including like button for both cond. */} 
      </Grid> //enclosing return in parent div
      
    )
}

export default GalleryItem;