import * as React from "react";
import { useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext";
import { LoadingIcon, SearchIcon } from "../Components/TodoIcon";

import "./TodoSearch.css";

function getValue(event: React.ChangeEvent<HTMLInputElement>) {
  return event.target.value;
}

function TodoSearch() {
  const { searchValue, setSearchValue, isLoading } = useContext(TodoContext);

  return (
    <div className="TodoSearch-container">
      <input
        value={searchValue}
        onChange={(event) => {
          setSearchValue(getValue(event));
        }}
        placeholder="Search"
        className="TodoSearch-input"
      />
      {isLoading ? <LoadingIcon /> : <SearchIcon />}
    </div>
  );
}

export { TodoSearch };
