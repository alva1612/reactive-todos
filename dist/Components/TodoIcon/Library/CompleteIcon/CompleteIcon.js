"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompleteIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const colors_1 = require("../../../../Constants/colors");
const TodoIcon_1 = require("../../TodoIcon");
function CompleteIcon(props) {
    const { completed, onComplete } = props;
    return ((0, jsx_runtime_1.jsx)(TodoIcon_1.TodoIcon, { type: "check", color: completed ? colors_1.Color.HIGHLIGHT : "gray", onClick: onComplete }));
}
exports.CompleteIcon = CompleteIcon;
