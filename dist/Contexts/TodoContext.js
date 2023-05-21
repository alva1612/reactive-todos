"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoProvider = exports.TodoContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useLocalStorage_1 = require("../Hooks/useLocalStorage");
const defaultValue = {
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
const TodoContext = (0, react_1.createContext)(defaultValue);
exports.TodoContext = TodoContext;
function TodoProvider(props) {
    const { children } = props;
    const { item: todos, persistItem: persistTodos, error, loading: isLoading, } = (0, useLocalStorage_1.useLocalStorage)("TODOS_V1", []);
    const [searchValue, setSearchValue] = (0, react_1.useState)("");
    const completedTodos = todos.filter((todo) => todo.completed).length;
    const searchedTodos = todos.filter((todo) => todo.text.toLocaleLowerCase().includes(searchValue));
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
    return ((0, jsx_runtime_1.jsx)(TodoContext.Provider, Object.assign({ value: {
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
        } }, { children: children })));
}
exports.TodoProvider = TodoProvider;
