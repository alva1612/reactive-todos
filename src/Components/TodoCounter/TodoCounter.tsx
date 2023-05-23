import * as React from "react";
import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";

import "./TodoCounter.css";

function TodoCounter() {
  const { isLoading, completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h1
      style={{
        textAlign: "center",
      }}
      className="TodoCounter-text"
    >
      {isLoading
        ? "Bienvenido"
        : `Has completado ${completedTodos} de ${totalTodos} TODOS`}
    </h1>
  );
}

export { TodoCounter };
