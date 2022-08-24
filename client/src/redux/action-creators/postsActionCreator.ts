import { PostsActionTypes } from "../action-types";
import { IPost } from "../../types";

export const setPost = (post: IPost) => {
 return {
  type: PostsActionTypes.SET_POST,
  payload: post,
 };
};

export const setPosts = (post: IPost[]) => {
 return {
  type: PostsActionTypes.SET_POSTS,
  payload: post,
 };
};

export const setComment = (comment: number, id: string) => {
 return {
  type: PostsActionTypes.SET_COMMENT,
  payload: { comment, id },
 };
};

export const setRepost = (repost: number, id: string) => {
 return {
  type: PostsActionTypes.SET_REPOST,
  payload: { repost, id },
 };
};

export const setLike = (like: number, id: string) => {
 return {
  type: PostsActionTypes.SET_LIKE,
  payload: { like, id },
 };
};
