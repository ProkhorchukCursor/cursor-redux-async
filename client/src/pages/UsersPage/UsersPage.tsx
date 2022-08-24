import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
 Avatar,
 Box,
 Card,
 CardHeader,
 Container,
 Divider,
 Typography,
} from "@mui/material";

import { getUsers } from "../../redux/reducers/usersReducer";
import { setUsers } from "../../redux/action-creators/usersActionCreator";

import { IUser } from "../../types/IUser";

const UsersPage = () => {
 const users: IUser[] = useSelector(getUsers);

 const dispatch: any = useDispatch();

 useEffect(() => {
  dispatch(setUsers());
 }, [dispatch]);

 return (
  <Container>
   <Box>
    <Typography variant="h2" color="#348feb">
     Users
    </Typography>
    <Divider />
    {users.length > 0 ? (
     <Box>
      {users.map((user) => (
       <Card sx={{ maxWidth: "600px", my: 2, mx: "auto" }} key={user._id}>
        <CardHeader
         avatar={<Avatar src={user.avatar} alt={user.name} />}
         title={user.name}
         subheader={
          <Typography variant="body2" color="text.secondary">
           {user.username}
          </Typography>
         }
        />
       </Card>
      ))}
     </Box>
    ) : (
     <Typography variant="h5" sx={{mt:2}}>No users</Typography>
    )}
   </Box>
  </Container>
 );
};

export default UsersPage;
