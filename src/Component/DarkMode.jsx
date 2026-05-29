import React, { useState } from "react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
        padding: "40px",
      }}
    >
      <button onClick={() => setDarkMode(!darkMode)}>
        switch to {darkMode ? "Light mode" : "Dark mode"}
      </button>
      <p>you are in {darkMode ? "dark mode" : "light mode"}</p>
    </div>
  );
}
