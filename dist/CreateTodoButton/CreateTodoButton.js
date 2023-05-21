"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodoButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ModalContext_1 = require("../Contexts/ModalContext");
require("./CreateTodoButton.css");
function CreateTodoButton() {
    const { toggleNewTodoModal } = (0, react_1.useContext)(ModalContext_1.ModalContext);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "ActionBtn", onClick: toggleNewTodoModal }, { children: "New TO DO" })) }));
}
exports.CreateTodoButton = CreateTodoButton;
