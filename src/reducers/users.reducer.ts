import axios from "axios";
import { reciveUsers, UsersActions } from "../actions/users.action";
import { User } from "../models/User";

export type GlobalState = {
  loading: boolean;
  users: User[];
};

export const userReducer = (
  state: GlobalState,
  action: UsersActions
): GlobalState => {
  switch (action.type) {
    case "GET_USERS":
      console.log("Get user");
      axios
        .get<{ results: User[] }>(
          `https://randomuser.me/api/?results=${action.data.count}`
        )
        .then(({ data }) => {
          action.data.dispatch(reciveUsers(data.results));
        });
      return { ...state, loading: true };
    case "RECIVE_USERS":
      console.log(action.data);
      return { users: action.data, loading: false };
    default:
      return state;
  }
};
