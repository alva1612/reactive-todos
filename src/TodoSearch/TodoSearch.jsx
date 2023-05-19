import { useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext";

import "./TodoSearch.css";

function getValue(event) {
  return event.target.value;
}

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <input
      value={searchValue}
      onChange={(event) => {
        setSearchValue(getValue(event));
      }}
      placeholder="Cortar cebolla"
      className="TodoSearch-input"
    />
  );
}

export { TodoSearch };
