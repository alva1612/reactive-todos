import { createContext, useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    persistItem: persistTodos,
    error,
    loading: isLoading,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [newTodoModal, setNewTodoModal] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLocaleLowerCase().includes(searchValue)
  );

  const toggleNewTodoModal = (event) => {
    if (event && event.preventDefault) event.preventDefault();
    if (!newTodoModal) setNewTodoModal(!newTodoModal);
    else {
      const activeModals = document.querySelectorAll("#modal");
      activeModals.forEach((element) => element.classList.toggle("fadeOut"));
      setTimeout(() => {
        setNewTodoModal(!newTodoModal);
        activeModals.forEach((element) => element.classList.toggle("fadeOut"));
      }, 150);
    }
  };

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

  const addTodo = (text) => {
    const newTodo = {
      text,
      completed: false,
    };
    const newTodos = [...todos, newTodo];
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
        addTodo,
        totalTodos,
        completedTodos,
        setSearchValue,
        newTodoModal,
        setNewTodoModal,
        toggleNewTodoModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
