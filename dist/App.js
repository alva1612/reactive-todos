"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TodoContext_1 = require("./Contexts/TodoContext");
const AppUI_1 = require("./AppUI");
const ModalContext_1 = require("./Contexts/ModalContext");
require("./App.css");
function App() {
    return ((0, jsx_runtime_1.jsx)(ModalContext_1.ModalProvider, { children: (0, jsx_runtime_1.jsx)(TodoContext_1.TodoProvider, { children: (0, jsx_runtime_1.jsx)(AppUI_1.AppUI, {}) }) }));
}
exports.App = App;
