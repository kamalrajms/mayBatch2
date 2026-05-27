import React from "react";

export default function ConditionalRendering() {
  const user = false;
  return (
    <div>
      <h2>Conditional rendering</h2>
      {user ? <h2>Welcome Back...!</h2> : <h2>Please login...!</h2>}
      <h2>Logical operator</h2>
      {user && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nihil
          ut consequatur labore rerum velit optio praesentium harum, iusto,
          accusantium quod quis. Maxime ab et eum quis iusto odio consectetur?
        </p>
      )}
    </div>
  );
}
