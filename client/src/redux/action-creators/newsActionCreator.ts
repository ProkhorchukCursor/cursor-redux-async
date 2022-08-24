import { Dispatch } from "react";

import axiosInstance from "../../api/axiosInstance";
import { NewsActions } from "../actions";
import { NewsActionTypes } from "../action-types";

import { INews } from "../../types/INews";

export const setNews = () => {
 return async (dispatch: Dispatch<NewsActions>) => {
  try {
   const { data } = await axiosInstance.get(`/news/`);

   dispatch({
    type: NewsActionTypes.GET_NEWS,
    payload: data.data.news,
   });
  } catch (err: any) {
   const error = new Error(err);
   console.log(error.message);
  }
 };
};

export const setNewNews = (newNews: INews) => {
 return async (dispatch: Dispatch<NewsActions>) => {
  try {
   const { data } = await axiosInstance.post("/news/", newNews);

   dispatch({
    type: NewsActionTypes.SET_NEWS,
    payload: data.data.news,
   });
  } catch (err: any) {
   const error = new Error(err);
   console.log(error.message);
  }
 };
};
