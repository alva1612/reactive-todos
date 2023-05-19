import { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import { TodoLoading } from "./Components/TodoLoading";
import { TodoError } from "./Components/TodoError";
import { TodoEmpty } from "./Components/TodoEmpty";

import "./App.css";

function App() {
  const {
    item: todos,
    persistItem: persistTodos,
    error,
    loading,
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

  console.log("LOG 1");

  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
        isLoading={loading}
      />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {!loading && searchedTodos.length <= 0 && <TodoEmpty />}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton setTodos={persistTodos} />
    </>
  );
}

export default App;
