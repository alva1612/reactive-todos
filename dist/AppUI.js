"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUI = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Modal_1 = require("./Components/Modal");
const TodoEmpty_1 = require("./Components/TodoEmpty");
const TodoLoading_1 = require("./Components/TodoLoading");
const TodoContext_1 = require("./Contexts/TodoContext");
const CreateTodoButton_1 = require("./CreateTodoButton");
const TodoCounter_1 = require("./TodoCounter");
const TodoItem_1 = require("./TodoItem");
const TodoList_1 = require("./TodoList");
const TodoSearch_1 = require("./TodoSearch");
const TodoError_1 = require("./Components/TodoError");
const NewTodo_1 = require("./Components/Forms/NewTodo/NewTodo");
const ModalContext_1 = require("./Contexts/ModalContext");
function AppUI() {
    const { completeTodo, error, isLoading, searchedTodos, deleteTodo } = (0, react_1.useContext)(TodoContext_1.TodoContext);
    const { displayModal } = (0, react_1.useContext)(ModalContext_1.ModalContext);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TodoCounter_1.TodoCounter, {}), (0, jsx_runtime_1.jsx)(TodoSearch_1.TodoSearch, {}), (0, jsx_runtime_1.jsxs)(TodoList_1.TodoList, { children: [isLoading && (0, jsx_runtime_1.jsx)(TodoLoading_1.TodoLoading, {}), error && (0, jsx_runtime_1.jsx)(TodoError_1.TodoError, {}), !isLoading && searchedTodos.length <= 0 && (0, jsx_runtime_1.jsx)(TodoEmpty_1.TodoEmpty, {}), searchedTodos.map((todo, index) => ((0, jsx_runtime_1.jsx)(TodoItem_1.TodoItem, { todo: todo, onComplete: () => completeTodo(todo.text), onDelete: () => deleteTodo(todo.text) }, index)))] }), (0, jsx_runtime_1.jsx)(CreateTodoButton_1.CreateTodoButton, {}), displayModal && ((0, jsx_runtime_1.jsx)(Modal_1.Modal, Object.assign({ size: "small" }, { children: (0, jsx_runtime_1.jsx)(NewTodo_1.NewTodo, {}) })))] }));
}
exports.AppUI = AppUI;
