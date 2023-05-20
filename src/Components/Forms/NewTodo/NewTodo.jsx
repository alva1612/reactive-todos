import { useContext } from "react";
import "./NewTodo.css";
import { TodoContext } from "../../../Contexts/TodoContext";

export const NewTodo = () => {
  const { toggleNewTodoModal } = useContext(TodoContext);

  return (
    <form className="NewTodo-form">
      <textarea
        type="text"
        className="NewTodo-taskInput"
        placeholder="New..."
        rows={4}
      ></textarea>
      <div className="NewTodo-btnContainer">
        <button className="CloseBtn" onClick={toggleNewTodoModal}>
          Cerrar
        </button>
        <button className="ActionBtn">Guardar</button>
      </div>
    </form>
  );
};
