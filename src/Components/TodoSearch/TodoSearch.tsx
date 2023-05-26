import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
import { LoadingIcon, SearchIcon } from "../../Components/TodoIcon";

import "./TodoSearch.css";
import { CommonContext } from "../../Contexts/CommonContext";

function getValue(event: React.ChangeEvent<HTMLInputElement>) {
  return event.target.value;
}

function TodoSearch() {
  const { loading } = useContext(CommonContext);
  const { searchValue, setSearchValue } = useContext(TodoContext);

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
      {loading ? <LoadingIcon /> : <SearchIcon />}
    </div>
  );
}

export { TodoSearch };
