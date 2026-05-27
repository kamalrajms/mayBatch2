import React from "react";

export default function ListRendering() {
  const fruits = ["apple", "banana", "orange", "grapes"];

  const user = [
    { id: 1, name: "hari" },
    { id: 2, name: "naveen" },
    { id: 3, name: "rajani" },
  ];
  return (
    <div>
      <h2>fruits data</h2>
      <ul>
        {fruits.map((name, ind) => (
          <li key={ind}>{name}</li>
        ))}
      </ul>
      <h2>user data</h2>
      {user.map((person) => (
        <h3 key={person.id}>{person.name}</h3>
      ))}
    </div>
  );
}
// person={name:"hari"}