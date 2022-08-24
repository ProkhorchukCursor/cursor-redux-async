import { UsersActionTypes } from "../action-types";
import { IUser } from "../../types/IUser";

interface GetUsers {
 type: UsersActionTypes.GET_USERS;
 payload: IUser[];
}

interface SetUser {
 type: UsersActionTypes.SET_USER;
 payload: IUser;
}

export type UsersActions = GetUsers | SetUser;
