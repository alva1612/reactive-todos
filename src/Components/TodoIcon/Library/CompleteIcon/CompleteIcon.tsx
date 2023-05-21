import * as React from "react";
import { Color } from "../../../../Constants/colors";
import { TodoIcon } from "../../TodoIcon";
import { CompleteIconProps } from "../../TodoIcon.interface";

export function CompleteIcon(
  props: React.PropsWithChildren<CompleteIconProps>
) {
  const { completed, onComplete } = props;
  return (
    <TodoIcon
      type="check"
      color={completed ? Color.HIGHLIGHT : "gray"}
      onClick={onComplete}
    />
  );
}
