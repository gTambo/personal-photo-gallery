import GalleryItem from '../GalleryItem/GalleryItem.js';
import './GalleryList.css';

function GalleryList ({ list, likePhoto}) {

    return (
        <div className="Gallery">
                
            {list.map(photo => (
                <div key={photo.id} className="App-photo">
                <GalleryItem photo={photo}
                            likePhoto={likePhoto}
                />
                </div>
                ))}
        </div>
    )
}

export default GalleryList;