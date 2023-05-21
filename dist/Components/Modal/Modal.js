"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = require("react-dom");
require("./Modal.css");
function Modal(props) {
    const { children, size } = props;
    const classList = `Modal-content Modal-content-${size}`;
    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "Modal-backdrop" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classList }, { children: children })) })), document.getElementById("modal"));
}
exports.Modal = Modal;
