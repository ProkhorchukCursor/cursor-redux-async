import React, { useEffect, useState } from "react";

import {
 Avatar,
 FormControl,
 MenuItem,
 OutlinedInput,
 Select,
 Stack,
 TextField,
 Typography,
} from "@mui/material";

import { AUTHORS_LIST } from "../../constants";

import { INewPost } from "../../types";

interface IProps {
 updateFunc: (newPost: INewPost) => void;
}

const FormAddNewPost = ({ updateFunc }: IProps) => {
 const [text, setText] = useState("");
 const [image, setImage] = useState("");
 const [author, setAuthor] = useState(AUTHORS_LIST[0].name);

 useEffect(() => {
  updateFunc({ text, image, author });
 }, [text, image, updateFunc, author]);

 return (
  <Stack spacing={2} sx={{ minWidth: "400px" }}>
   <TextField
    label="Post text"
    value={text}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
     setText(e.target.value)
    }
    fullWidth
   />
   <TextField
    label="URL image"
    value={image}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
     setImage(e.target.value)
    }
    fullWidth
   />
   <FormControl>
    <Select
     value={author}
     onChange={(e) => setAuthor(e.target.value)}
     input={<OutlinedInput label="Author" />}
    >
     {AUTHORS_LIST.map((author) => (
      <MenuItem key={author.nickname} value={author.name}>
       <Avatar
        src={author.photo}
        alt={author.nickname}
        sx={{ mr: 1, display: "inline-block" }}
       />
       <Typography sx={{ display: "inline-block" }}>{author.name}</Typography>
      </MenuItem>
     ))}
    </Select>
   </FormControl>
  </Stack>
 );
};

export default FormAddNewPost;
