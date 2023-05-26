import { useContext } from "react";
import { Modal } from "./Components/Modal";
import { TodoEmpty } from "./Components/TodoEmpty";
import { TodoLoading } from "./Components/TodoLoading";
import { TodoContext, TodoDispatchContext } from "./Contexts/TodoContext";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoItem } from "./Components/TodoItem";
import { TodoList } from "./Components/TodoList";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoError } from "./Components/TodoError";
import { NewTodo } from "./Components/Forms/NewTodo/NewTodo";
import { ModalContext } from "./Contexts/ModalContext";
import { CommonContext } from "./Contexts/CommonContext";
import { ToDo } from "./Types/todo.interface";

export function AppUI() {
  const { loading, error } = useContext(CommonContext);
  const { displayModal } = useContext(ModalContext);
  const { searchedTodos } = useContext(TodoContext);
  const { dispatch } = useContext(TodoDispatchContext);
  console.log("EN APP UI", searchedTodos);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}

        {!loading && searchedTodos.length <= 0 && <TodoEmpty />}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onComplete={() => dispatch({ text: todo.text, type: "complete" })}
            onDelete={() => dispatch({ text: todo.text, type: "delete" })}
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
