import { CompleteIcon, DeleteIcon } from "../Components/TodoIcon";

import "./TodoItem.css";

function TodoItem(props) {
  const { todo, onComplete, onDelete } = props;

  const classList = ["TodoItem"];
  const pClassList = ["TodoItem-p"];
  if (todo.completed) {
    classList.push("TodoItem--complete");
    pClassList.push("TodoItem-p--complete");
  }

  return (
    <li className={classList.join(" ")}>
      <CompleteIcon completed={todo.completed} onComplete={onComplete} />
      <p className={pClassList.join(" ")}>{todo.text}</p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}

export { TodoItem };
