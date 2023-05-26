import * as React from "react";
import { useContext, useState } from "react";
import { TodoDispatchContext } from "../../../Contexts/TodoContext";
import { ModalContext } from "../../../Contexts/ModalContext";

import "./NewTodo.css";

export const NewTodo = () => {
  const { dispatch } = useContext(TodoDispatchContext);
  const { toggleNewTodoModal } = useContext(ModalContext);

  const [newTodo, setNewTodo] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toggleNewTodoModal(event);
    dispatch({
      type: "add",
      text: newTodo,
    });
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodo(event.target.value);
  };

  return (
    <form className="NewTodo-form" onSubmit={onSubmit}>
      <div className="NewTodo-input-container">
        <textarea
          className="NewTodo-taskInput"
          placeholder="New..."
          rows={4}
          onChange={onChange}
        ></textarea>
      </div>

      <div className="NewTodo-btnContainer">
        <button className="CloseBtn" type="button" onClick={toggleNewTodoModal}>
          Cerrar
        </button>
        <button className="ActionBtn" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};
