"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TodoIcon_1 = require("../../TodoIcon");
function SearchIcon() {
    return (0, jsx_runtime_1.jsx)(TodoIcon_1.TodoIcon, { type: "search", color: "gray", onClick: () => { } });
}
exports.SearchIcon = SearchIcon;
