import { useEffect, useState } from "react";

const defaultTodos = [
  { text: "cortar", completed: true },
  { text: "terminar", completed: false },
];

export function useLocalStorage<T>(itemName: string, initialValue: T[]) {
  const [item, setItem] = useState<T[]>(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const storageItems = localStorage.getItem(itemName);
        let parsedItems;

        if (!storageItems) {
          localStorage.setItem(itemName, JSON.stringify(defaultTodos));
          parsedItems = defaultTodos;
        } else {
          parsedItems = JSON.parse(storageItems);
          setItem(parsedItems);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }, [itemName]);
  const persistItem = (newItem: T[]) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, persistItem, loading, error };
}
