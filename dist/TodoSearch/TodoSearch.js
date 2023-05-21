"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSearch = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TodoContext_1 = require("../Contexts/TodoContext");
const TodoIcon_1 = require("../Components/TodoIcon");
require("./TodoSearch.css");
function getValue(event) {
    return event.target.value;
}
function TodoSearch() {
    const { searchValue, setSearchValue, isLoading } = (0, react_1.useContext)(TodoContext_1.TodoContext);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "TodoSearch-container" }, { children: [(0, jsx_runtime_1.jsx)("input", { value: searchValue, onChange: (event) => {
                    setSearchValue(getValue(event));
                }, placeholder: "Search", className: "TodoSearch-input" }), isLoading ? (0, jsx_runtime_1.jsx)(TodoIcon_1.LoadingIcon, {}) : (0, jsx_runtime_1.jsx)(TodoIcon_1.SearchIcon, {})] })));
}
exports.TodoSearch = TodoSearch;
