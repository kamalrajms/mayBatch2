import React, { useEffect, useState } from "react";
import UseParamHook from "../Component/UseParamHook";
import { useNavigate } from "react-router-dom";
import UseSearchParamHook from "../Component/UseSearchParamHook";

export default function Home() {
  const [count, setCount] = useState(2);
  const page = useNavigate();

  useEffect(() => {
    if (count >= 10) {
      page("/Contact");
    }
  }, [count]);

  return (
    <div>
      <h2>home component</h2>
      <UseSearchParamHook />
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>increment{count}</button>
      <button onClick={() => page("/Contact")}>move to contact</button>
      <UseParamHook />
    </div>
  );
}
