import React, { useEffect, useState } from "react";
import "../style/Users.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <h1 className="flex justify-center m-[20px]">Users</h1>
      <ul className='columns-2'>
        {users.map((user) => (
          <li>
            <div className='users-wrapper text-center'>
              <div className="user-info flex flex-col mr-[10px] items-center mb-[20px]">
                <p>{user.username}</p>
                <h2 className="">{user.firstName} {user.lastName}</h2>
                <h2 className="">{user.email}</h2>
                <h2 className="">{user.phone}</h2>
                <img src={user.image} className='user-icon'/>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}