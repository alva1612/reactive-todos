"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const check_svg_1 = require("./Library/CompleteIcon/check.svg");
const delete_svg_1 = require("./Library/DeleteIcon/delete.svg");
const search_svg_1 = require("./Library/SearchIcon/search.svg");
require("./TodoIcon.css");
const iconTypes = {
    delete: (color) => (0, jsx_runtime_1.jsx)(delete_svg_1.ReactComponent, { className: "Icon-svg", fill: color }),
    check: (color) => (0, jsx_runtime_1.jsx)(check_svg_1.ReactComponent, { className: "Icon-svg", fill: color }),
    search: (color) => ((0, jsx_runtime_1.jsx)(search_svg_1.ReactComponent, { className: "Icon-svg", fill: color })),
};
function TodoIcon(props) {
    const { type, color, onClick } = props;
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: `Icon-container Icon-container-${type}`, onClick: onClick }, { children: iconTypes[type](color) })));
}
exports.TodoIcon = TodoIcon;
