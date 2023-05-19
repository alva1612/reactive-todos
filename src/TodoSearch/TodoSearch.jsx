import { useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext";

import "./TodoSearch.css";
import { LoadingIcon, SearchIcon } from "../Components/TodoIcon";

function getValue(event) {
  return event.target.value;
}

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <div className="TodoSearch-container">
      <input
        value={searchValue}
        onChange={(event) => {
          setSearchValue(getValue(event));
        }}
        onFocus={() => console.log("asd")}
        placeholder="Cortar cebolla"
        className="TodoSearch-input"
      />
      <SearchIcon />
      <LoadingIcon />
    </div>
  );
}

export { TodoSearch };
