"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = void 0;
const react_1 = require("react");
const defaultTodos = [
    { text: "cortar", completed: true },
    { text: "terminar", completed: false },
];
function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = (0, react_1.useState)(initialValue);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            try {
                const storageItems = localStorage.getItem(itemName);
                let parsedItems;
                if (!storageItems) {
                    localStorage.setItem(itemName, JSON.stringify(defaultTodos));
                    parsedItems = defaultTodos;
                }
                else {
                    parsedItems = JSON.parse(storageItems);
                    setItem(parsedItems);
                }
                setLoading(false);
            }
            catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 1000);
    }, [itemName]);
    const persistItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };
    return { item, persistItem, loading, error };
}
exports.useLocalStorage = useLocalStorage;
