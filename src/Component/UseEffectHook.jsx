import React, { useState, useEffect } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(4);
  useEffect(() => {
    console.log("component mounted");
  }, [num]);
  useEffect(() => {
    console.log(`count changes to ${count},${num}`);
  }, [count, num]);
  return (
    <div>
      <h2>Useeffect hook</h2>
      <h2>
        count:{count},{num}
      </h2>
      <button onClick={() => setNum(num + 2)}>double Increment</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
}
