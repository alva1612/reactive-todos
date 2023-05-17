function getValue(event) {
  return event.target.value
}

function TodoSearch(props) {
 
  const {searchValue, setSearchValue} = props
  
  return (
    <input
      value={searchValue}
      onChange={(event)=> {
        setSearchValue(getValue(event))
        console.log(searchValue)
      }} 
      placeholder="Cortar cebolla" style={{
      width: "clamp(200px, 40%, 800px)",
      display: "flex",
      margin: "auto",
      border: "solid 3px white",
      fontSize: "1rem" 
    }}/>
  );
}

export { TodoSearch };
