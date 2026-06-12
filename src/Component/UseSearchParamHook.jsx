import React from "react";
import { useSearchParams } from "react-router-dom";

export default function UseSearchParamHook() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = () => {
    setSearchParams({ category: "lap", price: "500000" });
  };
  return (
    <div>
      <button onClick={handleChange}>Change filets</button>
    </div>
  );
}
