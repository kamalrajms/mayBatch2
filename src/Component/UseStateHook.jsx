import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);
  console.log(count);
  const [user, setUser] = useState(true);

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>

      <h2>Stackly...</h2>
      {user ? <h3>welocome back...!</h3> : <h3>please login...!</h3>}
      {user && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas
          placeat reiciendis beatae vitae voluptatibus vero qui molestiae. Quas,
          rem possimus? Optio dolor ea sed et, voluptatum quis qui at.
        </p>
      )}
      <button onClick={() => setUser(!user)}>sign {user ? "out" : "in"}</button>
    </div>
  );
}

// !true==false
// !false==true
