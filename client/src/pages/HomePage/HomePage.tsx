import React from "react";

import { Box, Typography } from "@mui/material";

import HomeImage from "../../resourses/images/city.jpg";

const HomePage = () => {
 return (
  <Box>
   <Typography
    variant="h5"
    color="#348feb"
    sx={{ textAlign: "center", my: 10 }}
   >
    This is the Home Page. It exists to say hello to you. Let's go to the
    future together!!!
   </Typography>
   <Box sx={{ display: "flex", justifyContent: "center" }}>
    <Box component={"img"} src={HomeImage} alt="future"/>
   </Box>
  </Box>
 );
};

export default HomePage;
