import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import { getPosts } from "../../redux/reducers/postsReducer";
import {
 setPost,
 setPosts,
} from "../../redux/action-creators/postsActionCreator";

import { Box, Button, Container } from "@mui/material";

import { FormAddNewPost, ModalForm, Post } from "../../components";

import { AUTHORS_LIST, DEFAULT_POSTS } from "../../constants";

import { INewPost, IPost } from "../../types";

const PostsPage = () => {
 const [isAddPost, setIsAddPost] = useState(false);
 const [newPost, setNewPost] = useState<INewPost>();

 const posts: IPost[] = useSelector(getPosts);

 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(setPosts(DEFAULT_POSTS));
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

 const handleSaveNewPost = () => {
  if (newPost) {
   const newData = {
    author:
     AUTHORS_LIST.find((autor) => autor.name === newPost?.author) ||
     AUTHORS_LIST[0],
    content: newPost?.text,
    image: newPost?.image,
    date: new Date().toString(),
    comments: 0,
    reposts: 0,
    likes: 0,
    id: nanoid(),
   };
   dispatch(setPost(newData));
   setIsAddPost(false);
  }
 };

 return (
  <Container>
   <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
    <Button onClick={() => setIsAddPost(true)} sx={{ my: 2 }}>
     + Add new post
    </Button>
   </Box>
   <Box
    sx={{
     py: 2,
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
    }}
   >
    {posts.map((post: IPost, id: number) => (
     <Post post={post} key={post.id} />
    ))}
   </Box>
   <ModalForm
    children={<FormAddNewPost updateFunc={setNewPost} />}
    open={isAddPost}
    handleClose={() => setIsAddPost(false)}
    title={"Add new post"}
    onSubmit={handleSaveNewPost}
   />
  </Container>
 );
};

export default PostsPage;
