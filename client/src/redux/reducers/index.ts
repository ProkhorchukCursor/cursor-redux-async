import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import newsReducer from "./newsReducer";

const reducers = combineReducers({
    postsReducer,
    usersReducer,
    newsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
