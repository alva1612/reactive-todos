import { useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext";

function TodoCounter() {
  const { isLoading, completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h1
      style={{
        textAlign: "center",
      }}
    >
      {isLoading
        ? "Bienvenido"
        : `Has completado ${completedTodos} de ${totalTodos} TODOS`}
    </h1>
  );
}

export { TodoCounter };
