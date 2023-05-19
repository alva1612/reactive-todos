import "./NewTodo.css";

export const NewTodo = () => {
  return (
    <form className="NewTodo-form">
      <input type="text" placeholder="New..." />
      <div className="NewTodo-btnContainer">
        <button className="CloseBtn">Cerrar</button>
        <button className="ActionBtn">Guardar</button>
      </div>
    </form>
  );
};
