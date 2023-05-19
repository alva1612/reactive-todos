import { createContext, useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    persistItem: persistTodos,
    error,
    isLoading,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLocaleLowerCase().includes(searchValue)
  );

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    persistTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    persistTodos(newTodos);
  };

  const totalTodos = todos.length;
  return (
    <TodoContext.Provider
      value={{
        isLoading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        totalTodos,
        completedTodos,
        setSearchValue,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
