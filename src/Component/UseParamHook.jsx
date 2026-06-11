import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UseParamHook() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <h2>user Name</h2>
      <ul>
        {user.map((person) => (
          <li key={person.id}>
            <Link to={`/blogs/:${person.email}`}>{person.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
