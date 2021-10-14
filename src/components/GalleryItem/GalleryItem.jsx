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
    <Grid item>

      <Box mb={2} background-color="secondary">
        {/* used ternary operator --> if clicked is true, show description, else show photo, including like button for both cond. */}
        <Card sx={{ maxWidth: 400 }}>
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
              (<CardContent component="div" height="300" width="300">
                <Typography variant="body2" color="textSecondary">
                  {photo.description}
                  <br />
                  Likes: {photo.likes}
                </Typography>
              </CardContent>)}
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