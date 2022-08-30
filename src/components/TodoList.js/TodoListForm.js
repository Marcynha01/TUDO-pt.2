import React, { useState } from "react";
import './style.css'

const TodoListForm = (props) => {
  const [task, setTask] = useState();

  const handleChangeTask = (event) => {
    let newTask = event.target.value;
    setTask(newTask);
  };

  const handleAddTaskList = () => {
    if (task !== "") {
      props.addTaskList(task);
      setTask("");
    }
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Adicionar tarefas"
        value={task}
        onChange={handleChangeTask}
        className="input-task"
      />
      <button type="button" onClick={handleAddTaskList}
      className= "button-task">
        Adicionar
      </button>
    </form>
  );
};
export default TodoListForm;
