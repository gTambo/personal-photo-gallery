import GalleryItem from '../GalleryItem/GalleryItem.jsx'; //Gallery item component referenced in this component
import './GalleryList.css';
import { 
    Grid, 
  } from "@material-ui/core";

function GalleryList ({ list, likePhoto}) { // destructuring relevant props

    return (
        <Grid 
            container 
            alignItems="stretch"
            justifyContent="center"
            
        > 
            {/* Iterating over photoGallery as prop using .map(), set key to id */}
            {list.map(photo => (
                <Grid container item
                        sx={{display: 'flex', flexDirection: 'column'}}
                        alignItems="stretch"
                        xs={4} 
                        spacing={3} 
                        key={photo.id}>
                <GalleryItem  photo={photo}
                              likePhoto={likePhoto}
                /> {/** from child component, passing necessary props **/}
                </Grid>
                ))}
        </Grid> // single div parent
    )
}

export default GalleryList;