import GalleryItem from '../GalleryItem/GalleryItem.jsx'; //Gallery item component referenced in this component
import './GalleryList.css';
import { 
    Grid, 
    SvgIcon, 
    Icon 
  } from "@material-ui/core";

function GalleryList ({ list, likePhoto}) { // destructuring relevant props

    return (
        <Grid 
            container 
            // columnSpacing={{xs: 5}}
            // rowSpacing={2}
            alignItems="center"
            justifyContent="space-evenly"
        > {/** did I even use this class? */}
                {/* Iterating over photoGallery as prop using .map(), set key to id */}
            {list.map(photo => (
                <Grid container item xs={4} spacing={3} rowSpacin={3} key={photo.id} className="App-photo">
                <GalleryItem  photo={photo}
                            likePhoto={likePhoto}
                /> {/** from child component, passing necessary props **/}
                </Grid>
                ))}
        </Grid> // single div parent
    )
}

export default GalleryList;