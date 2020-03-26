import React from "react";
import { User } from "../models/User";

type UserProps = {
  user: User;
};

const UserItem: React.FC<UserProps> = ({ user }) => {
  return (
    <h3>
      {user.gender} {user.name.first}
    </h3>
  );
};

export default UserItem;
