import React, { useState, useEffect } from "react";
import Users from "../Users/Users";
import AddUser from "../Users/AddUser";
import { Link } from "react-router-dom";

const initialState = [
  {
    id: 1,
    name: "Aaron",
  },
  {
    id: 2,
    name: "Jenny",
  },
  {
    id: 3,
    name: "Jon",
  },
  {
    id: 4,
    name: "Melissa",
  },
];

export default function UsersPage() {
  let [users, setUsers] = useState(initialState);

  let createNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  let deleteUser = async (id) => {
    setUsers(users.filter((e) => e.id !== id));
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Users App: State And Props</h1>
      <div className="content-div">
        <Users users={users} delete={deleteUser} />
      </div>
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
