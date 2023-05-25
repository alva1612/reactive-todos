import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useReducer,
  useState,
} from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { ToDo } from "../Types/todo.interface";

interface TodoContextValue {
  isLoading: boolean;
  error: boolean;
  searchedTodos: ToDo[];
  completeTodo: (text: string) => void;
  deleteTodo: (text: string) => void;
  addTodo: (text: string) => void;
  totalTodos: number;
  completedTodos: number;
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchValue: string;
}

const defaultValue: TodoContextValue = {
  searchValue: "",
  addTodo: () => { },
  completedTodos: 0,
  error: true,
  isLoading: false,
  totalTodos: 0,
  setSearchValue: () => { },
  searchedTodos: [],
  completeTodo: () => { },
  deleteTodo: () => { },
};

const TodoContext = createContext(defaultValue);

function TodoProvider(props: PropsWithChildren) {
  const { children } = props;
  const {
    item: todos,
    persistItem: persistTodos,
    error,
    loading: isLoading,
  } = useLocalStorage<ToDo>("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLocaleLowerCase().includes(searchValue)
  );

  const completeTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    persistTodos(newTodos);
    dispatch({
      type: 'complete',
      text
    })
  };
  const deleteTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    persistTodos(newTodos);
    dispatch({
      type: 'delete',
      text,
    })
  };

  const addTodo = (text: string) => {
    const newTodo: ToDo = {
      text,
      completed: false,
      createDate: new Date()
    };
    const newTodos = [...todos, newTodo];
    persistTodos(newTodos);
    dispatch({
      type: 'add',
      text
    })
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
        searchValue,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
