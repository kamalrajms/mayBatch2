import React from "react";
import { Link, Outlet } from "react-router-dom";
import Pagenation from "../Component/Pagenation";

export default function About() {
  return (
    <div>
      <Outlet />
      <h2>About component</h2>
      <Pagenation />
      <div className="sub_header">
        <Link to={"webDev"}>Web dev</Link>
        <Link to={""}>app dev</Link>
      </div>
    </div>
  );
}
