import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { getUsers } from "../actions/users.action";
import { UserContext } from "../contexts/UserContext";
import UserItem from "./User";

interface UserListProps {}

const UserList: React.FC<UserListProps> = () => {
  const { state, dispatch } = React.useContext(UserContext);

  React.useEffect(() => {
    dispatch(getUsers(5, dispatch));
  }, [dispatch]);

  return (
    <div>
      {state.users.map(user => (
        <UserItem key={`${user.id.name}_${user.id.value}`} user={user} />
      ))}
      <ClipLoader size={50} color={"#123abc"} loading={state.loading} />
    </div>
  );
};

export default UserList;
