import React, { useState, useContext } from "react";
import { AppContext } from "./App.jsx";

function Input() {
  const {
    allTasks,
    setAllTasks,
    newTask,
    setNewTask,
    tracker,
    setTracker,
    isLight,
  } = useContext(AppContext);

  const [isFocused, setIsFocused] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [focusedMessage, setFocusedMessage] = useState("Create a new todo...");

  function handleFocuse() {
    setIsFocused(false);
    isFocused
      ? setFocusedMessage("Currently typing")
      : setFocusedMessage("Create a new todo...");
  }

  function handleFocuseOut() {
    setIsFocused(true);
    isFocused
      ? setFocusedMessage("Currently typing")
      : setFocusedMessage("Create a new todo...");
  }

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleHouseOut() {
    setIsMouseOver(false);
  }

  return (
    <div className={`container new-input ${isLight && `light-container`}`}>
      <label hidden htmlFor="addtodo">
        Add
      </label>
      <input
        id="addtodo"
        type="checkbox"
        style={{
          backgroundImage:
            isMouseOver &&
            "url(icon-check.svg),linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleHouseOut}
        onChange={(e) => {
          if (newTask !== "") {
            setAllTasks(() => {
              const task = {
                id:
                  allTasks.length === 0
                    ? 1
                    : allTasks[allTasks.length - 1].id + 1,
                taskName: newTask,
                completed: false,
              };
              return [...allTasks, task];
            });
            //Create copy state
            setTracker(() => {
              const task = {
                id:
                  tracker.length === 0 ? 1 : tracker[tracker.length - 1].id + 1,
                taskName: newTask,
                completed: false,
              };
              return [...tracker, task];
            });
            setNewTask("");
          }
        }}
      />

      <label htmlFor="input">{focusedMessage}</label>
      <input
        type="text"
        id="input"
        value={newTask}
        onFocus={handleFocuse}
        onBlur={handleFocuseOut}
        onChange={(e) => {
          return setNewTask(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            if (newTask !== "") {
              setAllTasks(() => {
                const task = {
                  id:
                    allTasks.length === 0
                      ? 1
                      : allTasks[allTasks.length - 1].id + 1,
                  taskName: newTask,
                  completed: false,
                };
                return [...allTasks, task];
              });
              //Create copy state
              setTracker(() => {
                const task = {
                  id:
                    tracker.length === 0
                      ? 1
                      : tracker[tracker.length - 1].id + 1,
                  taskName: newTask,
                  completed: false,
                };
                return [...tracker, task];
              });
              setNewTask("");
            }
          }
        }}
      />
    </div>
  );
}

export default Input;
