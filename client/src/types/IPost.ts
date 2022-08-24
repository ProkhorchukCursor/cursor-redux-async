import { IAuthor } from "./IAuthor";

export interface IPost {
 author: IAuthor;
 content: string;
 image: string;
 date: string;
 comments: number;
 reposts: number;
 likes: number;
 id: string;
}
