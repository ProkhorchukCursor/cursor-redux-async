import { Dispatch } from "react";

import axiosInstance from "../../api/axiosInstance";
import { UsersActions } from "../actions";
import { UsersActionTypes } from "../action-types";

import { IUser } from "../../types/IUser";

export const setUsers = () => {
 return async (dispatch: Dispatch<UsersActions>) => {
  try {
   const { data } = await axiosInstance.get(`/users/`);

   dispatch({
    type: UsersActionTypes.GET_USERS,
    payload: data.data.users,
   });
  } catch (err: any) {
   const error = new Error(err);
   console.log(error.message);
  }
 };
};

export const setUser = (user: IUser) => {
 return async (dispatch: Dispatch<UsersActions>) => {
  try {
   const { data } = await axiosInstance.post("/users/", user);

   dispatch({
    type: UsersActionTypes.SET_USER,
    payload: data.data.user,
   });
  } catch (err: any) {
   const error = new Error(err);
   console.log(error.message);
  }
 };
};
