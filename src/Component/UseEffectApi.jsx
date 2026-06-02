import React, { useState, useEffect } from "react";

export default function UseEffectApi() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch,axios
    // api=[{},{},{},{},{}.....]        // raw data(string)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      // api=[{},{},{},{},{}.....]        // data in key:value
      .then((data) => {
        setUser(data);
      });
  }, []);
  console.log(user);

  return (
    <div>
      <h2>Uesr data</h2>
      <ul>
        {/* // user=[{id:1},{id:2},{},{},{}.....]        // data in key:value */}
        {user.map((person) => (
          <li key={person.id}>
            {person.name}--{person.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
