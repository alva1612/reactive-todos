import { Color } from "../../Constants/colors";
import { TodoIcon } from "./TodoIcon";

export function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? Color.HIGHLIGHT : "gray"}
      onClick={onComplete}
    />
  );
}
