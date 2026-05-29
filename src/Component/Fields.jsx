import React, { useState } from "react";

export default function Fields() {
  const [name, setName] = useState("");
  const [check, setCheck] = useState(true);
  console.log(name);
  console.log(check);

  return (
    <div>
      <nav>
        <label htmlFor="">name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h2>name:{name}</h2>
        {/* <select name="" id="">
            <option value="apple">apple</option>
            <option value="react">orange</option>
        </select> */}
      </nav>

      <nav>
        <h2>Check box</h2>
        <input
          type="checkbox"
          checked={check}
          onChange={(e) => setCheck(e.target.checked)}
        />
      </nav>
    </div>
  );
}
