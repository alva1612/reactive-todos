import * as React from "react";
import { useContext } from "react";
import { Modal } from "./Components/Modal";
import { TodoEmpty } from "./Components/TodoEmpty";
import { TodoLoading } from "./Components/TodoLoading";
import { TodoContext } from "./Contexts/TodoContext";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoError } from "./Components/TodoError";
import { NewTodo } from "./Components/Forms/NewTodo/NewTodo";
import { ModalContext } from "./Contexts/ModalContext";

export function AppUI() {
  const { completeTodo, error, isLoading, searchedTodos, deleteTodo } =
    useContext(TodoContext);
  const { displayModal } = useContext(ModalContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {isLoading && <TodoLoading />}
        {error && <TodoError />}

        {!isLoading && searchedTodos.length <= 0 && <TodoEmpty />}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      {displayModal && (
        <Modal size={"small"}>
          <NewTodo />
        </Modal>
      )}
    </>
  );
}
