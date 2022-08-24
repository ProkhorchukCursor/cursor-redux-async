import { UsersActionTypes } from "../action-types";
import { UsersActions } from "../actions";

import { RootState } from ".";

export const getUsers = (state: RootState) => state.usersReducer.users;

const initialState = {
 users: [],
};

const reducer = (state: any = initialState, action: UsersActions): any => {
 switch (action.type) {
  case UsersActionTypes.GET_USERS:
   return {
    ...state,
    users: action.payload,
   };
  case UsersActionTypes.SET_USER:
   return {
    ...state,
    users: [...state.users, action.payload],
   };
  default:
   return state;
 }
};

export default reducer;
