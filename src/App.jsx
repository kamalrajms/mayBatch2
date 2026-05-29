import React from "react";
import Greeting from "./Greeting";
import DestructuringProps from "./DestructuringProps";
import ExternalStyle from "./ExternalStyle";
import ModuleStyle from "./ModuleStyle";
import ObjectStyle from "./ObjectStyle";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRendering from "./Component/ListRendering";
import UseStateHook from "./Component/UseStateHook";
import DarkMode from "./Component/DarkMode";
import Fields from "./Component/Fields";

export default function App() {
  const session = "React js";

  const name = "Naveen";
  const age = 33;
  const city = "salem";

  const name2 = "hari";
  const age2 = 44;
  const city2 = "maduri";

  const name3 = "kumar";
  const age3 = 55;
  const city3 = "namakkal";

  return (
    <>
      <Fields />
      <DarkMode />
      <UseStateHook />
      <ListRendering />
      <ConditionalRendering />
      <h1 style={{ padding: "40px", color: "red", backgroundColor: "yellow" }}>
        Hello world!!!--{session}
      </h1>
      <ObjectStyle />
      <ModuleStyle />
      <ExternalStyle />
      <Greeting first={name} age={age} />
      <DestructuringProps name={name} age={age} city={city} />
      <DestructuringProps name={name2} age={age2} city={city2} />
      <DestructuringProps name={name3} age={age3} city={city3} />
    </>
  );
}
