"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalProvider = exports.ModalContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const defaultVal = {
    toggleNewTodoModal: () => { },
    displayModal: false,
};
const ModalContext = (0, react_1.createContext)(defaultVal);
exports.ModalContext = ModalContext;
const ModalProvider = (props) => {
    const { children } = props;
    const [displayModal, setDisplayModal] = (0, react_1.useState)(false);
    const toggleNewTodoModal = (event) => {
        if (event && event.preventDefault && !event.isDefaultPrevented)
            event.preventDefault();
        if (!displayModal)
            setDisplayModal(!displayModal);
        else {
            const activeModals = document.querySelectorAll("#modal");
            activeModals.forEach((element) => element.classList.toggle("fadeOut"));
            setTimeout(() => {
                setDisplayModal(!displayModal);
                activeModals.forEach((element) => element.classList.toggle("fadeOut"));
            }, 150);
        }
    };
    return ((0, jsx_runtime_1.jsx)(ModalContext.Provider, Object.assign({ value: { displayModal, toggleNewTodoModal } }, { children: children })));
};
exports.ModalProvider = ModalProvider;
