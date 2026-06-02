import React, { useState, useEffect } from "react";

export default function StopWatch() {
  const [sec, setSec] = useState(0);
  const [Running, setRunning] = useState(false);
  useEffect(() => {
    let intervalId;
    if (Running) {
      intervalId = setInterval(() => {
        setSec((perv) => perv + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [Running]);
  const handleStart = () => {
    setRunning(true);
  };
  //   console.log(Running);
  const handleStop = () => {
    setRunning(false);
  };
  const handleReset = () => {
    setSec(0);
    setRunning(false);
  };

  return (
    <div>
      <h1>Timer:{sec}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
