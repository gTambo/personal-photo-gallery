import { useState } from 'react';
function GalleryItem ({ photo, likePhoto }) {
  const [photoClicked, setPhotoClicked] = useState(false);

    return (
        <> {photoClicked ? (<>
            <p clasName="Description" onClick={ () => setPhotoClicked(false)}>{photo.description}</p>
            <button className="Like-button" onClick={ () => likePhoto(photo.id) }> 🧡 </button>Likes: {photo.likes}
          </>) : (<>
            <img className="image" src={photo.path} onClick={ () => setPhotoClicked(true)}/>
            <button className="Like-button" onClick={ () => likePhoto(photo.id) }> 🧡 </button>Likes: {photo.likes}</>
          )} 
      </>
      
    )
}

export default GalleryItem;