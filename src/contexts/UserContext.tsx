import React from "react";
import { UsersActions } from "../actions/users.action";
import { GlobalState, userReducer } from "../reducers/users.reducer";

interface UserProviderProps {}

const initialState: GlobalState = {
  loading: false,
  users: []
};

type UserContextType = {
  state: GlobalState;
  dispatch: React.Dispatch<UsersActions>;
};

export const UserContext = React.createContext<UserContextType>({
  state: { users: [], loading: false },
  dispatch: () => {}
});

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<GlobalState, UsersActions>
  >(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
