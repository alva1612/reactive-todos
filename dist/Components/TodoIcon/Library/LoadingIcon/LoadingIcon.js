"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./LoadingIcon.css");
const LoadingIcon = () => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "Icon-container Icon-container-loading" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "LoadingIcon-container" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "LoadingIcon-rhombus", id: "rh-1" }), (0, jsx_runtime_1.jsx)("div", { className: "LoadingIcon-rhombus", id: "rh-2" }), (0, jsx_runtime_1.jsx)("div", { className: "LoadingIcon-rhombus", id: "rh-3" })] })) })));
};
exports.LoadingIcon = LoadingIcon;
