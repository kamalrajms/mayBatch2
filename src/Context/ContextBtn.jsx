import React, { useContext } from "react";
import { Pass } from "../App";

export default function ContextBtn() {
  const { theme, setTheme } = useContext(Pass);
  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "black" : "light")}>
        Change theme {theme}
      </button>
    </div>
  );
}
