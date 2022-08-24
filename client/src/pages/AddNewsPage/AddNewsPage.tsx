import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Box, Typography } from "@mui/material";

import AddForm from "../../components/AddForm";

import axiosInstance from "../../api/axiosInstance";
import { getNews } from "../../redux/reducers/newsReducer";
import { setNews } from "../../redux/action-creators/newsActionCreator";

import { INews } from "../../types/INews";

const AddNewsPage = () => {
 const { newsId } = useParams();
 const news: INews[] = useSelector(getNews);

 const [findedNews, setFindedNews] = useState<INews>();
 const [title, setTitle] = useState("");
 const [content, setContent] = useState("");
 const [image, setImage] = useState("");

 const dispatch: any = useDispatch();

 useEffect(() => {
  dispatch(setNews());
 }, [dispatch]);

 useEffect(() => {
  const findedNews = news.find((el) => el._id === newsId);
  if (findedNews) {
   setFindedNews(findedNews);
   setTitle(findedNews.title);
   setContent(findedNews.content);
   setImage(findedNews.image);
  }
 }, [news, newsId]);

 const createFields = () => {
  return [
   {
    label: "Title",
    value: title,
    onChange: setTitle,
   },
   {
    label: "Content",
    value: content,
    onChange: setContent,
   },
   {
    label: "Image",
    value: image,
    onChange: setImage,
   },
  ];
 };

 const handleReset = () => {
  setTitle("");
  setContent("");
  setImage("");
 };

 const handleAddNewNews = async () => {
  try {
   await axiosInstance.post("/news/", {
    title,
    content,
    image,
    created: new Date(),
   });
   handleReset();
  } catch (error) {
   console.log("handleAddNewNews error");
  }
 };

 const handleUpdateNewNews = async () => {
  try {
   await axiosInstance.patch(`/news/${findedNews?._id}`, {
    title,
    content,
    image,
    created: new Date(),
   });
   handleReset();
  } catch (error) {
   console.log("handleAddNewNews error");
  }
 };

 return (
  <Box sx={{ p: 2 }}>
   <Typography variant="h2" color="#348feb">
    {findedNews ? `Change news ${title}` : "Add new news"}
   </Typography>
   <AddForm
    fields={createFields()}
    onSave={findedNews ? handleUpdateNewNews : handleAddNewNews}
   />
  </Box>
 );
};

export default AddNewsPage;
