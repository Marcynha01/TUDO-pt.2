import React from "react";

const TodoListAll = (props) => {
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {props.taskList.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
export default TodoListAll;
