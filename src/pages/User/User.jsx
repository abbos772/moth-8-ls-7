import React, { useEffect, useState } from "react";
import axios from "../../api/api";
const User = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios.get("/users/search").then((res) => {
      setUsers(res.data.data.users);
    });
  }, []);
  return (
    <div>
      {users?.map((user) => (
        <div key={user.id}>
          <h3>{user.FirstName}</h3>
        </div>
      ))}
    </div>
  );
};

export default User;
