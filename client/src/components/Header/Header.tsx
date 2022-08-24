import { NavLink } from "react-router-dom";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
 return (
  <Box sx={{ flexGrow: 1 }}>
   <AppBar position="static">
    <Toolbar>
     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      HW20 Redux and async
     </Typography>
     <Button color="inherit">
      <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
       Home
      </NavLink>
     </Button>

     <Button color="inherit">
      <NavLink to="/users" style={{ textDecoration: "none", color: "inherit" }}>
       Users
      </NavLink>
     </Button>
     <Button color="inherit">
      <NavLink
       to="/addUser"
       style={{ textDecoration: "none", color: "inherit" }}
      >
       Add user
      </NavLink>
     </Button>
     <Button color="inherit">
      <NavLink to="/news" style={{ textDecoration: "none", color: "inherit" }}>
       News
      </NavLink>
     </Button>
     <Button color="inherit">
      <NavLink
       to="/addNews"
       style={{ textDecoration: "none", color: "inherit" }}
      >
       Add news
      </NavLink>
     </Button>
     <Button color="inherit">
      <NavLink to="/posts" style={{ textDecoration: "none", color: "inherit" }}>
       Posts
      </NavLink>
     </Button>
     <Button color="inherit">
      <NavLink
       to="/photos"
       style={{ textDecoration: "none", color: "inherit" }}
      >
       Photos
      </NavLink>
     </Button>
     <Button color="inherit">
      <NavLink
       to="/contacts"
       style={{ textDecoration: "none", color: "inherit" }}
      >
       Contacts
      </NavLink>
     </Button>
    </Toolbar>
   </AppBar>
  </Box>
 );
};

export default Header;
