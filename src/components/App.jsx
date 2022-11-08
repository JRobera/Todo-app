import React, { createContext, useState } from "react";
import Task from "./Task.jsx";
import Header from "./Header.jsx";
import Input from "./Input.jsx";
import Footer from "./Footer.jsx";

export const AppContext = createContext();

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [isLight, setIsLight] = useState(false);
  const [tracker, setTracker] = useState([]);

  const [newTask, setNewTask] = useState("");

  return (
    <AppContext.Provider
      value={{
        allTasks,
        setAllTasks,
        newTask,
        setNewTask,
        tracker,
        setTracker,
        isLight,
        setIsLight,
      }}
    >
      <div
        className="background"
        style={{
          backgroundColor: isLight ? "hsl(236, 33%, 92%)" : "hsl(235,21%, 11%)",
        }}
      >
        <picture>
          <source
            srcSet={
              isLight ? "../bg-mobile-light.jpg" : "../bg-mobile-dark.jpg"
            }
            media="(max-width: 500px)"
          />
          <img
            className="top-image"
            src={isLight ? "../bg-desktop-light.jpg" : "../bg-desktop-dark.jpg"}
          />
        </picture>

        <div className="main-container">
          <Header />

          <Input />
          {tracker.map((task, index) => {
            return (
              <Task
                key={index}
                task={task.taskName}
                id={task.id}
                completed={task.completed}
              />
            );
          })}
          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
