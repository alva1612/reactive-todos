function TodoItem({ todo, onComplete, onDelete }) {
  const liStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "solid 1px",
    margin: "10px 0",
  };
  const vStyles = {
    position: "absolute",
    left: "calc(2rem + 10px)",
    color: "green",
    fontWeight: "bold",
    cursor: "pointer",
  };
  const xStyles = {
    position: "absolute",
    right: "calc(2rem + 10px)",
    color: "red",
    fontWeight: "bold",
    cursor: "pointer",
  };
  todo.completed
    ? (liStyle.borderColor = "#49C7FF")
    : (liStyle.borderColor = "#BD34FE");

  return (
    <li style={liStyle}>
      <span style={vStyles} onClick={() => onComplete(todo.text)}>
        V
      </span>
      <p>{todo.text}</p>
      <span style={xStyles} onClick={() => onDelete(todo.text)}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
