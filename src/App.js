import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskListContextProvider from "./components/TaskListContext";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
