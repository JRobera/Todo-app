import React, { useState, useContext } from "react";
import { AppContext } from "./App";

function All(props) {
  const { allTasks, setTracker } = useContext(AppContext);
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <span
      onClick={() => {
        setTracker(
          allTasks.filter((task) => {
            return task;
          })
        );
      }}
      style={{ color: isMouseOver && "hsl(234, 39%, 85%)" }}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      {props.linkName}
    </span>
  );
}

function Active(props) {
  const { allTasks, setTracker } = useContext(AppContext);
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <span
      onClick={() => {
        return setTracker(
          allTasks.filter((task) => {
            return task.completed != true;
          })
        );
      }}
      style={{ color: isMouseOver && "hsl(234, 39%, 85%)" }}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      {props.linkName}
    </span>
  );
}
function Completed(props) {
  const { allTasks, setTracker } = useContext(AppContext);
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <span
      onClick={() => {
        return setTracker(
          allTasks.filter((task) => {
            return task.completed == true;
          })
        );
      }}
      style={{ color: isMouseOver && "hsl(234, 39%, 85%)" }}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      {props.linkName}
    </span>
  );
}

export { All, Active, Completed };
