import React, { useState, useContext } from "react";
import { AppContext } from "./App";

function Header() {
  const { isLight, setIsLight } = useContext(AppContext);

  return (
    <div className="container main-header">
      <h1 className="header">TODO</h1>
      <img
        src={`icon-${isLight ? `moon.svg` : `sun.svg`} `}
        onClick={() => setIsLight(!isLight)}
        alt="theme_icom"
      />
    </div>
  );
}

export default Header;
