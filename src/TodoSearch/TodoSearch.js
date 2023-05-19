import "./TodoSearch.css";

function getValue(event) {
  return event.target.value;
}

function TodoSearch(props) {
  const { searchValue, setSearchValue } = props;

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
