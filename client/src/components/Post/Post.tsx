import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
 Avatar,
 Box,
 Button,
 Card,
 CardContent,
 CardHeader,
 CardMedia,
 Typography,
} from "@mui/material";

import CommentIcon from "@mui/icons-material/Comment";
import DirectionsIcon from "@mui/icons-material/Directions";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { IPost } from "../../types";
import {
 setComment,
 setLike,
 setRepost,
} from "../../redux/action-creators/postsActionCreator";

interface IProps {
 post: IPost;
}

const Post = ({ post }: IProps) => {
 const [isComment, setIsComment] = useState(false);
 const [isRepost, setIsRepost] = useState(false);
 const [isLike, setIsLike] = useState(false);

 const dispatch = useDispatch();

 const handleComment = () => {
  if (isComment) {
   dispatch(setComment(post.comments - 1, post.id));
   setIsComment(false);
  } else {
   dispatch(setComment(post.comments + 1, post.id));
   setIsComment(true);
  }
 };

 const handleRepost = () => {
  if (isRepost) {
   dispatch(setRepost(post.reposts - 1, post.id));
   setIsRepost(false);
  } else {
   dispatch(setRepost(post.reposts + 1, post.id));
   setIsRepost(true);
  }
 };

 const handleLike = () => {
  if (isLike) {
   dispatch(setLike(post.likes - 1, post.id));
   setIsLike(false);
  } else {
   dispatch(setLike(post.likes + 1, post.id));
   setIsLike(true);
  }
 };

 return (
  <Card sx={{ maxWidth: "800px", my: 2 }}>
   <CardHeader
    avatar={<Avatar src={post.author.photo} alt={post.author.nickname} />}
    title={post.author.name}
    subheader={
     <Box>
      <Typography variant="body2" color="text.secondary">
       {post.author.nickname}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {post.date}
      </Typography>
     </Box>
    }
   />
   <CardContent>
    <Typography variant="body2" color="text.secondary">
     {post.content}
    </Typography>
   </CardContent>
   {post.image && (
    <CardMedia component="img" image={post.image} alt="Content" />
   )}
   <CardContent>
    <Box
     sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      px: 2,
     }}
    >
     <Button
      sx={{ display: "flex", color: isComment ? "" : "inherit" }}
      onClick={handleComment}
     >
      <CommentIcon />
      <Typography sx={{ ml: 2 }}>{post.comments || 0}</Typography>
     </Button>
     <Button
      sx={{ display: "flex", color: isRepost ? "" : "inherit" }}
      onClick={handleRepost}
     >
      <DirectionsIcon />
      <Typography sx={{ ml: 2 }}>{post.reposts || 0}</Typography>
     </Button>
     <Button
      sx={{ display: "flex", color: isLike ? "" : "inherit" }}
      onClick={handleLike}
     >
      <ThumbUpIcon />
      <Typography sx={{ ml: 2 }}>{post.likes || 0}</Typography>
     </Button>
     <FavoriteBorderIcon />
    </Box>
   </CardContent>
  </Card>
 );
};

export default Post;
