import React, { useContext, useState } from "react";
import { AppContext } from "./App";

function Task(props) {
  const { allTasks, setAllTasks, tracker, setTracker, isLight } =
    useContext(AppContext);
  const customstyle = {
    backgroundImage:
      "url(icon-check.svg),linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
  };

  return (
    <div className={`container task ${isLight && `light-container`}`}>
      <input
        type="checkbox"
        value={props.task}
        onChange={(e) => {
          setAllTasks(() => {
            return allTasks.map((task) => {
              if (props.id === task.id) {
                return { ...task, completed: !props.completed };
              } else {
                return task;
              }
            });
          });
          setTracker(() => {
            return tracker.map((task) => {
              if (props.id === task.id) {
                return { ...task, completed: !props.completed };
              } else {
                return task;
              }
            });
          });
        }}
        style={props.completed ? customstyle : null}
      />
      <label
        style={
          props.completed
            ? { textDecoration: "line-through", color: "hsl(234, 11%, 52%)" }
            : null
        }
        htmlFor=""
      >
        {props.task}
      </label>
      <img
        src="icon-cross.svg"
        name={props.task}
        onClick={(e) => {
          setTracker(
            tracker.filter((task) => {
              return task.id != props.id;
            })
          );
        }}
        alt="close"
      />
    </div>
  );
}

export default Task;
