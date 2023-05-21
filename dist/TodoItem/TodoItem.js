"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TodoIcon_1 = require("../Components/TodoIcon");
require("./TodoItem.css");
function TodoItem(props) {
    const { todo, onComplete, onDelete } = props;
    const classList = ["TodoItem"];
    const pClassList = ["TodoItem-p"];
    if (todo.completed) {
        classList.push("TodoItem--complete");
        pClassList.push("TodoItem-p--complete");
    }
    return ((0, jsx_runtime_1.jsxs)("li", Object.assign({ className: classList.join(" ") }, { children: [(0, jsx_runtime_1.jsx)(TodoIcon_1.CompleteIcon, { completed: todo.completed, onComplete: onComplete }), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: pClassList.join(" ") }, { children: todo.text })), (0, jsx_runtime_1.jsx)(TodoIcon_1.DeleteIcon, { onDelete: onDelete })] })));
}
exports.TodoItem = TodoItem;
