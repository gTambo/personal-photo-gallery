import GalleryItem from '../GalleryItem/GalleryItem.jsx'; //Gallery item component referenced in this component
import './GalleryList.css';
import { 
    Grid, 
    SvgIcon, 
    Icon 
  } from "@material-ui/core";

function GalleryList ({ list, likePhoto}) { // destructuring relevant props

    return (
        <div className="Gallery"> {/** did I even use this class? */}
                {/* Iterating over photoGallery as prop using .map(), set key to id */}
            {list.map(photo => (
                <div key={photo.id} className="App-photo">
                <GalleryItem photo={photo}
                            likePhoto={likePhoto}
                /> {/** from child component, passing necessary props **/}
                </div>
                ))}
        </div> // single div parent
    )
}

export default GalleryList;