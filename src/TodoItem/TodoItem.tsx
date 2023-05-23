import * as React from "react";
import { CompleteIcon, DeleteIcon } from "../Components/TodoIcon";

import "./TodoItem.css";
import { ToDo } from "../Types/todo.interface";

interface TodoItemProps {
  todo: ToDo;
  onComplete: React.MouseEventHandler;
  onDelete: React.MouseEventHandler;
}

function TodoItem(props: React.PropsWithChildren<TodoItemProps>) {
  const { todo, onComplete, onDelete } = props;

  const classList = ["TodoItem"];
  const pClassList = ["TodoItem-p"];
  if (todo.completed) {
    classList.push("TodoItem--complete");
    pClassList.push("TodoItem-p--complete");
  }

  return (
    <li className={classList.join(" ")}>
      <CompleteIcon completed={todo.completed} onComplete={onComplete} />
      <p className={pClassList.join(" ")}>{todo.text}</p>
      <small>{todo.createDate.toLocaleString()}</small>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}

export { TodoItem };
