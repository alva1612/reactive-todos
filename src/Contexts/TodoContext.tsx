import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useReducer,
  useState,
} from "react";
import { ToDo, ToDoAction } from "../Types/todo.interface";
import { useLocalStorage } from "../Hooks/useLocalStorage";

interface TodoContextValue {
  searchedTodos: ToDo[];
  totalTodos: number;
  completedTodos: number;
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchValue: string;
}

interface TodoDispatchValue {
  dispatch: React.Dispatch<ToDoAction>;
}
const defaultDispatchValue: TodoDispatchValue = {
  dispatch: () => {
    throw new Error();
  },
};

const defaultValue: TodoContextValue = {
  searchValue: "",
  completedTodos: 0,
  totalTodos: 0,
  setSearchValue: () => {},
  searchedTodos: [],
};

const TodoContext = createContext(defaultValue);
const TodoDispatchContext = createContext(defaultDispatchValue);

function TodoProvider(props: PropsWithChildren) {
  const { children } = props;
  const [items, setItems] = useLocalStorage("TODOS_V1", [] as ToDo[]);
  console.log("teim", items);
  const [todos, dispatch] = useReducer(todoReducer, [...items]);
  console.log(todos, "todos reducer");

  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLocaleLowerCase().includes(searchValue)
  );

  const totalTodos = todos.length;
  console.log("searhcer", searchedTodos);
  return (
    <TodoContext.Provider
      value={{
        searchedTodos,
        totalTodos,
        completedTodos,
        setSearchValue,
        searchValue,
      }}
    >
      <TodoDispatchContext.Provider value={{ dispatch }}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

function todoReducer(todos: ToDo[], action: ToDoAction) {
  switch (action.type) {
    case "delete": {
      const { text } = action;
      const todoIndex = todos.findIndex((todo) => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      return newTodos;
    }
    case "complete": {
      const { text } = action;
      const todoIndex = todos.findIndex((todo) => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = !todos[todoIndex].completed;
      return newTodos;
    }
    case "add": {
      const { text } = action;
      const newTodo: ToDo = {
        text,
        completed: false,
        createDate: new Date(),
      };
      const newTodos = [...todos, newTodo];
      return newTodos;
    }
  }
}

export { TodoContext, TodoProvider, TodoDispatchContext };
