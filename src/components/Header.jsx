import React, { useState, useContext } from "react";
import { AppContext } from "./App";

function Header() {
  const { isLight, setIsLight } = useContext(AppContext);

  return (
    <div className="container main-header">
      <p className="header">TODO</p>
      <img
        src={`icon-${isLight ? `moon.svg` : `sun.svg`} `}
        onClick={() => setIsLight(!isLight)}
        alt="theme_icom"
      />
    </div>
  );
}

export default Header;
