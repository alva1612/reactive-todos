import * as React from "react";
import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";

import "./TodoCounter.css";
import { CommonContext } from "../../Contexts/CommonContext";

function TodoCounter() {
  const { loading } = useContext(CommonContext);
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h1
      style={{
        textAlign: "center",
      }}
      className="TodoCounter-text"
    >
      {loading
        ? "Bienvenido"
        : `Has completado ${completedTodos} de ${totalTodos} TODOS`}
    </h1>
  );
}

export { TodoCounter };
