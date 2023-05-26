import { useContext, useEffect, useState } from "react";
import { CommonContext } from "../Contexts/CommonContext";

const defaultTodos = [
  { text: "cortar", completed: true },
  { text: "terminar", completed: false },
  { text: "reterminar", completed: false },
];

export function useLocalStorage<T>(itemName: string, initialValue: T[]) {
  const [item, setItem] = useState<T[]>(initialValue);
  const { setLoading, setError } = useContext(CommonContext);

  useEffect(() => {
    console.log("esto");
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

  console.log("item reutn ", item);
  return [item, persistItem] as const;
}
