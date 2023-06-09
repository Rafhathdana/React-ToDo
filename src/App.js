import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTRashCan,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import React, { useState } from "react";
function App() {
  const [toDo, setToDO] = useState([
    { id: 1, title: "task 1", status: true },
    { id: 2, title: "task 2", status: false },
  ]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {};
  const deleteTask = (id) => {};
  const markDone = (id) => {};
  const cancelUpdate = () => {};
  const changeTask = (e) => {};
  const updateTask = () => {};

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To Do List App Using (ReactJS)</h2>
      <br />
      <br />
      {/* Display Todos */}
      {toDo && toDo.length ? "" : "No Tasks..."}
      {toDo &&
        toDo.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? "done" : ""}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}

export default App;
