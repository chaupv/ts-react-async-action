import { User } from "../models/User";

export type ReciveUsers = {
  type: "RECIVE_USERS";
  data: User[];
};

export type GetUsers = {
  type: "GET_USERS";
  data: {
    count: number;
    dispatch: React.Dispatch<UsersActions>;
  };
};

export type UsersActions = ReciveUsers | GetUsers;

export const reciveUsers = (users: User[]): ReciveUsers => {
  return {
    type: "RECIVE_USERS",
    data: users
  };
};

export const getUsers = (
  count: number,
  dispatch: React.Dispatch<UsersActions>
): GetUsers => {
  return { type: "GET_USERS", data: { count, dispatch } };
};
