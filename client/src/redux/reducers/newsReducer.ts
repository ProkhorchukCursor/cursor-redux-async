import { NewsActionTypes } from "../action-types";
import { NewsActions } from "../actions";

import { RootState } from ".";

export const getNews = (state: RootState) => state.newsReducer.news;

const initialState = {
 news: [],
};

const reducer = (state: any = initialState, action: NewsActions): any => {
 switch (action.type) {
  case NewsActionTypes.GET_NEWS:
   return {
    ...state,
    news: action.payload,
   };
  case NewsActionTypes.SET_NEWS:
   return {
    ...state,
    news: [...state.news, action.payload],
   };
  default:
   return state;
 }
};

export default reducer;
