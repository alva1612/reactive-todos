import { CompleteIcon, DeleteIcon } from "../Components/TodoIcon";

import "./TodoItem.css";

function TodoItem(props) {
  const { todo, onComplete, onDelete } = props;
  return (
    <li className="TodoItem">
      <CompleteIcon completed={todo.completed} onComplete={onComplete} />
      <p className="TodoItem-p">{todo.text}</p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}

export { TodoItem };
