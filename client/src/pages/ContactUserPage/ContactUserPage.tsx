import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
 Avatar,
 Box,
 Button,
 Card,
 CardActions,
 CardContent,
 CardHeader,
 Collapse,
 Container,
 Typography,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";

import { CONTACTS } from "../../constants";

import { IContact } from "../../types";

const ContactUserPage = () => {
 const [expanded, setExpanded] = useState(false);
 const [user, setUser] = useState<IContact>();

 const { id } = useParams();

 const nameArr = id?.split("-");

 useEffect(() => {
  if (nameArr) {
   const userData = CONTACTS.find(
    (contact) =>
     contact.firstName === nameArr[0] && contact.lastName === nameArr[1],
   );
   setUser(userData);
  }
 }, [nameArr]);

 const handleExpandClick = () => {
  setExpanded(!expanded);
 };

 return (
  <Container>
   <Box
    sx={{
     py: 2,
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
    }}
   >
    <Card sx={{ maxWidth: 400 }}>
     <CardHeader
      avatar={
       <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
        {user?.firstName.split("")[0]}
       </Avatar>
      }
      title={`${user?.firstName} ${user?.lastName}`}
      subheader={
       <>
        <Typography variant="subtitle2">Phone: {user?.phone}</Typography>
        <Typography variant="subtitle2">Gender: {user?.gender}</Typography>
       </>
      }
     />
     <CardContent>
      <Typography variant="body2" color="text.secondary">
       This impressive paella is a perfect party dish and a fun meal to cook
       together with your guests. Add 1 cup of frozen peas along with the
       mussels, if you like.
      </Typography>
     </CardContent>
     <CardActions disableSpacing sx={{display: "flex", justifyContent: "end"}}>
      <Button
       onClick={handleExpandClick}
       aria-expanded={expanded}
       aria-label="show more"
      >
       <ExpandMore />
       <Typography>Message history</Typography>
      </Button>
     </CardActions>
     <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
       <Typography
        paragraph
       >{`${user?.firstName} ${user?.lastName}:`}</Typography>
       <Typography variant="subtitle2">- Hi!</Typography>
       <Typography paragraph sx={{ textAlign: "end" }}>
        Me :
       </Typography>
       <Typography variant="subtitle2">- Hello!!!</Typography>
      </CardContent>
     </Collapse>
    </Card>
   </Box>
  </Container>
 );
};

export default ContactUserPage;
