import React from "react";
import { All, Active, Completed } from "./Links";

function Navigation() {
  return (
    <div className="status">
      <All linkName={"All"} />
      <Active linkName={"Active"} />
      <Completed linkName={"Completed"} />
    </div>
  );
}

export default Navigation;
