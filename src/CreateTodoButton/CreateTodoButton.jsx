import { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../Contexts/TodoContext";

export function CreateTodoButton() {
  const { toggleNewTodoModal } = useContext(TodoContext);

  return <button onClick={toggleNewTodoModal}>New TO DO</button>;
}
