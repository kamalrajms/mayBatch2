import React from "react";
import { useParams } from "react-router-dom";

export default function Blogdetailes() {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog detailes-{id}</h2>
    </div>
  );
}
