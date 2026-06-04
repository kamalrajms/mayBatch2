import React, { useContext } from "react";
import ContextBtn from "./ContextBtn";
import { Pass } from "../App";

export default function ContextField() {
  const { data } = useContext(Pass);

  return (
    <div>
      <nav>
        <label htmlFor="">Name</label>
        <input type="text" value={data.name} />
      </nav>
      <ContextBtn />
    </div>
  );
}
