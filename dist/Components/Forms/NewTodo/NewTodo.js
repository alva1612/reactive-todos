"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewTodo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TodoContext_1 = require("../../../Contexts/TodoContext");
const ModalContext_1 = require("../../../Contexts/ModalContext");
require("./NewTodo.css");
const NewTodo = () => {
    const { addTodo } = (0, react_1.useContext)(TodoContext_1.TodoContext);
    const { toggleNewTodoModal } = (0, react_1.useContext)(ModalContext_1.ModalContext);
    const [newTodo, setNewTodo] = (0, react_1.useState)("");
    const onSubmit = (event) => {
        event.preventDefault();
        toggleNewTodoModal(event);
        addTodo(newTodo);
    };
    const onChange = (event) => {
        setNewTodo(event.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)("form", Object.assign({ className: "NewTodo-form", onSubmit: onSubmit }, { children: [(0, jsx_runtime_1.jsx)("textarea", { className: "NewTodo-taskInput", placeholder: "New...", rows: 4, onChange: onChange }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "NewTodo-btnContainer" }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ className: "CloseBtn", onClick: toggleNewTodoModal }, { children: "Cerrar" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "ActionBtn", type: "submit" }, { children: "Guardar" }))] }))] })));
};
exports.NewTodo = NewTodo;
