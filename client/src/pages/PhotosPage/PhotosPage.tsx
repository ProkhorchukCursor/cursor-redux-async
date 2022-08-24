import React, { useEffect, useState } from "react";
import axios from "axios";

import { Box, Card, CardMedia, Container, Grid } from "@mui/material";

import { PHOTOS_API } from "../../constants";

import { IPhoto } from "../../types";

const PhotosPage = () => {
 const [images, setImages] = useState<IPhoto[]>([]);

 useEffect(() => {
  getData();
 }, []);

 const getData = async () => {
  const data = await axios.get(PHOTOS_API);
  setImages(data.data.hits);
 };

 return (
  <Container>
   <Box sx={{ py: 2 }}>
    <Grid container spacing={3}>
     {images.map((image) => (
      <Grid item xs={4} key={image.id}>
       <Card sx={{ maxWidth: 300 }}>
        <CardMedia
         component="img"
         image={image.previewURL}
         alt={`photo-${image.id}`}
        />
       </Card>
      </Grid>
     ))}
    </Grid>
   </Box>
  </Container>
 );
};

export default PhotosPage;
