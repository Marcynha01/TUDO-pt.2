import React, { useState } from "react";
import TodoListAll from "./TodoListAll";
import TodoListForm from "./TodoListForm";
import "./style.css"

const TodoList = (props) => {
  const [taskList, setTaskList] = useState([]);
 
  const handleAddTaskList = (newTask) => {

      setTaskList([...taskList, newTask]);
  }

  return (
    <div className="container">
      <h1>{props.title}</h1>
      
      <TodoListForm addTaskList={handleAddTaskList}/>
      
      <TodoListAll taskList={taskList}/>
    </div>
  )
}
export default TodoList
