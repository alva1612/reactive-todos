"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./TodoList.css");
function TodoList(props) {
    const { children } = props;
    return (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "list-container" }, { children: children }));
}
exports.TodoList = TodoList;
