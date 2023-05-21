"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCounter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TodoContext_1 = require("../Contexts/TodoContext");
require("./TodoCounter.css");
function TodoCounter() {
    const { isLoading, completedTodos, totalTodos } = (0, react_1.useContext)(TodoContext_1.TodoContext);
    return ((0, jsx_runtime_1.jsx)("h1", Object.assign({ style: {
            textAlign: "center",
        }, className: "TodoCounter-text" }, { children: isLoading
            ? "Bienvenido"
            : `Has completado ${completedTodos} de ${totalTodos} TODOS` })));
}
exports.TodoCounter = TodoCounter;
