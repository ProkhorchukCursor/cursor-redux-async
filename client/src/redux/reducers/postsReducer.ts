import { PostsActionTypes } from "../action-types";
import { PostsActions } from "../actions";

import { RootState } from ".";

export const getPosts = (state: RootState) => state.postsReducer.posts;

const initialState = {
 posts: [],
};

const reducer = (state: any = initialState, action: PostsActions): any => {
 switch (action.type) {
  case PostsActionTypes.SET_POSTS:
   return {
    ...state,
    posts: action.payload,
   };
  case PostsActionTypes.SET_POST:
   return {
    ...state,
    posts: [...state.posts, action.payload].sort((a: any, b: any) => a.id - b.id),
   };

  case PostsActionTypes.SET_COMMENT:
   const commentPost = state.posts.find(
    (el: any) => el.id === action.payload.id,
   );
   const commentPosts = state.posts.filter(
    (el: any) => el.id !== action.payload.id,
   );
   commentPost.comments = action.payload.comment;

   return {
    ...state,
    posts: [...commentPosts, commentPost].sort((a: any, b: any) => a.id - b.id),
   };
  case PostsActionTypes.SET_REPOST:
   const repostPost = state.posts.find(
    (el: any) => el.id === action.payload.id,
   );
   const repostPposts = state.posts.filter(
    (el: any) => el.id !== action.payload.id,
   );
   repostPost.reposts = action.payload.repost;
   return {
    ...state,
    posts: [...repostPposts, repostPost].sort((a: any, b: any) => a.id - b.id),
   };
  case PostsActionTypes.SET_LIKE:
   const post = state.posts.find((el: any) => el.id === action.payload.id);
   const posts = state.posts.filter((el: any) => el.id !== action.payload.id);
   post.likes = action.payload.like;
   return {
    ...state,
    posts: [...posts, post].sort((a: any, b: any) => a.id - b.id),
   };
  default:
   return state;
 }
};

export default reducer;
