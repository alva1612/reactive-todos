import { useContext } from "react";
import { Modal } from "./Components/Modal";
import { TodoEmpty } from "./Components/TodoEmpty";
import { TodoLoading } from "./Components/TodoLoading";
import { TodoContext } from "./Contexts/TodoContext";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoItem } from "./Components/TodoItem";
import { TodoList } from "./Components/TodoList";
import { TodoSearch } from "./Components/TodoSearch";
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
