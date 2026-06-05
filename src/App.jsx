import React, { useContext, createContext, useState } from "react";
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
import RegForm from "./Component/RegForm";
import ConditionalFrom from "./Component/ConditionalFrom";
import UseEffectHook from "./Component/UseEffectHook";
import Timer from "./Component/Timer";
import StopWatch from "./Component/StopWatch";
import UseEffectApi from "./Component/UseEffectApi";
import UseRefHook from "./Component/UseRefHook";
import First from "./Context/First";
import ContextForm from "./Context/ContextForm";
import UseReducerHook from "./Component/UseReducerHook";
import ReducerForm from "./Component/ReducerForm";
import UseIDHookEg from "./Component/UseIDHookEg";

export const Pass = createContext();

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

  const [theme, setTheme] = useState("light");
  const data = { name: "react.js" };
  console.log(theme);

  return (
    <>
      <UseIDHookEg />
      <UseIDHookEg />
      <UseIDHookEg />
      <ReducerForm />
      <UseReducerHook />
      <div style={{ padding: "20px", border: "2px solid #333" }}>
        <Pass.Provider value={{ theme, setTheme, data }}>
          <ContextForm />
        </Pass.Provider>
      </div>
      <div style={{ padding: "20px", border: "2px solid #333" }}>
        <h2>App component---{session}</h2>
        <Pass.Provider value={session}>
          <First />
        </Pass.Provider>
      </div>
      <UseRefHook />
      <UseEffectApi />
      <StopWatch />
      <Timer />
      <UseEffectHook />
      <ConditionalFrom />
      <RegForm />
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
