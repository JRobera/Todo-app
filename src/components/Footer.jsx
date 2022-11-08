import React, { useState, useContext } from "react";
import Navigation from "./Navigation";
import { AppContext } from "./App";

function Footer() {
  const { allTasks, setAllTasks, tracker, setTracker, isLight } =
    useContext(AppContext);
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div className={`container footer-nav ${isLight && `light-container`}`}>
      <span>
        {tracker.filter((task) => task.completed != true).length} items left
      </span>
      <Navigation />
      <span
        onClick={() => {
          setTracker(
            tracker.filter((task) => {
              return task.completed != true;
            })
          );

          setAllTasks(
            allTasks.filter((task) => {
              return task.completed != true;
            })
          );
        }}
        style={{ color: isMouseOver && "hsl(234, 39%, 85%)" }}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
      >
        Clear Completed
      </span>
    </div>
  );
}

export default Footer;
