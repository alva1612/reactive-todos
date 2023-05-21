"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TodoIcon_1 = require("../../TodoIcon");
function DeleteIcon(props) {
    const { onDelete } = props;
    return (0, jsx_runtime_1.jsx)(TodoIcon_1.TodoIcon, { type: "delete", color: "gray", onClick: onDelete });
}
exports.DeleteIcon = DeleteIcon;
