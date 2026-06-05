import React, { useReducer } from "react";

export default function UseReducerHook() {
  const initialState = { count: 0 };

  function countReducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }

  //   action={type:"increment"}

  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <h2>count:{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}
