import { useContext, useState } from "react";
import { TodoContext } from "../../../Contexts/TodoContext";
import { ModalContext } from "../../../Contexts/ModalContext";

import "./NewTodo.css";

export const NewTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const { toggleNewTodoModal } = useContext(ModalContext);

  const [newTodo, setNewTodo] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    toggleNewTodoModal();
    addTodo(newTodo);
  };

  const onChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <form className="NewTodo-form" onSubmit={onSubmit}>
      <textarea
        type="text"
        className="NewTodo-taskInput"
        placeholder="New..."
        rows={4}
        onChange={onChange}
      ></textarea>
      <div className="NewTodo-btnContainer">
        <button className="CloseBtn" onClick={toggleNewTodoModal}>
          Cerrar
        </button>
        <button className="ActionBtn" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};
