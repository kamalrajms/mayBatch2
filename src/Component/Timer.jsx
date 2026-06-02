import React, { useState, useEffect } from "react";

export default function Timer() {
  const [sec, setSec] = useState(0);
  useEffect(() => {
    // const interval=setTimeout(()=>(  ),delaytime)
    // const interval=setInterval(()=>( log("hello") ),delaytime)
    const interval = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000); //1+1s+2+1s+3+1s+4+1s
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h2>Seconds:{sec}</h2>
    </div>
  );
}
