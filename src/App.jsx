import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoLoading } from "./Components/TodoLoading";
import { TodoError } from "./Components/TodoError";
import { TodoEmpty } from "./Components/TodoEmpty";
import { TodoProvider } from "./Contexts/TodoContext";
import { TodoContext } from "./Contexts/TodoContext";

import "./App.css";

function App() {
  return (
    <TodoProvider>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({ loading, error, searchedTodos, completeTodo, deleteTodo }) => (
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
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </TodoProvider>
  );
}

export default App;
