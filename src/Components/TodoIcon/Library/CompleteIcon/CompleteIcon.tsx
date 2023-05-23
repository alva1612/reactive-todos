import * as React from "react";
import { COLOR } from "../../../../Constants/colors";
import { TodoIcon } from "../../TodoIcon";
import { CompleteIconProps } from "../../TodoIcon.interface";

export function CompleteIcon(
  props: React.PropsWithChildren<CompleteIconProps>
) {
  const { completed, onComplete } = props;
  return (
    <TodoIcon
      type="check"
      color={completed ? COLOR.HIGHLIGHT : "gray"}
      onClick={onComplete}
    />
  );
}
