import { NewsActionTypes } from "../action-types";
import { INews } from "../../types/INews";

interface GetNews {
 type: NewsActionTypes.GET_NEWS;
 payload: INews[];
}

interface SetNews {
 type: NewsActionTypes.SET_NEWS;
 payload: INews;
}

export type NewsActions = GetNews | SetNews;
