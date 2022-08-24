import React, { useState } from "react";

import { Box, Typography } from "@mui/material";

import AddForm from "../../components/AddForm";

import axiosInstance from "../../api/axiosInstance";

const AddUserPage = () => {
 const [name, setName] = useState("");
 const [username, setUsername] = useState("");
 const [avatar, setAvatar] = useState("");

 const createFields = () => {
  return [
   {
    label: "Name",
    value: name,
    onChange: setName,
   },
   {
    label: "Username",
    value: username,
    onChange: setUsername,
   },
   {
    label: "Avatar",
    value: avatar,
    onChange: setAvatar,
   },
  ];
 };

 const handleReset = () => {
  setName("");
  setUsername("");
  setAvatar("");
 };

 const handleAddNewUser = async () => {
  try {
   await axiosInstance.post("/users/", { name, username, avatar });
   handleReset();
  } catch (error) {
   console.log("handleAddNewUser error");
  }
 };

 return (
  <Box sx={{ p: 2 }}>
   <Typography variant="h2" color="#348feb">
    Add new user
   </Typography>
   <AddForm fields={createFields()} onSave={handleAddNewUser} />
  </Box>
 );
};

export default AddUserPage;
