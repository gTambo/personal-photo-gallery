import React, { useState } from 'react';
import './GalleryItem.css';
import { 
    Grid, 
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
    CardActions,
    Button,
    Fab,
    Box
  } from "@material-ui/core";
//
import { FavoriteTwoTone } from '@material-ui/icons';


function GalleryItem ({ photo, likePhoto }) { // destructing useful props
  const [photoClicked, setPhotoClicked] = useState(true); // using state for conditional rendering on click event

  return (
    <Grid item alignItems='stretch' sx={{display: 'flex', flexDirection: 'column'}}>

      <Box height='450px' mb={2} background-color="secondary">
        {/* used ternary operator --> if clicked is true, show description, else show photo, including like button for both cond. */}
        <Card sx={{height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
          <CardActionArea onClick={() => setPhotoClicked(!photoClicked)}>
            {photoClicked ? (<>
              <CardMedia
                component="img"
                height="300"
                width="350"
                image={photo.path}
                alt="a photo"
              />
              <CardContent><Typography variant="body2" color="textSecondary">Likes: {photo.likes}</Typography></CardContent>
            </>)
              :
              (<Typography height='450px'  variant="body1" >
                  <CardContent height='100%' color="textSecondary">
                    {photo.description}
                    <br />
                    Likes: {photo.likes}
                  </CardContent>
                </Typography>)}
          </CardActionArea>
          <CardActions>
            <Fab
              aria-label="like"
              variant="circular"
              color="secondary"
              onClick={() => likePhoto(photo.id)}
            >
              <FavoriteTwoTone/>
            </Fab>
          </CardActions>
        </Card>
      </Box>
    </Grid> //enclosing return in parent div
    )
}

export default GalleryItem;