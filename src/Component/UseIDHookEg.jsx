import React, { useId } from "react";

export default function UseIDHookEg() {
  const name = useId();
  const email = useId();
  console.log(name, email);

  return (
    <div>
      <h2>useID hook</h2>
      <nav>
        <label htmlFor={name}>name</label>
        <input type="text" id={name} />
      </nav>
      <nav>
        <label htmlFor={email}>email</label>
        <input type="text" id={email} />
      </nav>
    </div>
  );
}
