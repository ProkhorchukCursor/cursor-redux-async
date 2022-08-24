import { PostsActionTypes } from "../action-types";
import { IPost } from "../../types";

interface SetPosts {
 type: PostsActionTypes.SET_POSTS;
 payload: IPost[];
}

interface SetPost {
 type: PostsActionTypes.SET_POST;
 payload: IPost;
}

interface SetComment {
 type: PostsActionTypes.SET_COMMENT;
 payload: { comment: number; id: string };
}

interface SetRepost {
 type: PostsActionTypes.SET_REPOST;
 payload: { repost: number; id: string };
}

interface SetLike {
 type: PostsActionTypes.SET_LIKE;
 payload: { like: number; id: string };
}

export type PostsActions =
 | SetPosts
 | SetPost
 | SetComment
 | SetRepost
 | SetLike;
