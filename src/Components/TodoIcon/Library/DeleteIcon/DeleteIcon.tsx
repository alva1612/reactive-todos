import * as React from "react";
import { TodoIcon } from "../../TodoIcon";
import { DeleteIconProps, TodoIconProps } from "../../TodoIcon.interface";

export function DeleteIcon(props: React.PropsWithChildren<DeleteIconProps>) {
  const { onDelete } = props;
  return <TodoIcon type="delete" color="gray" onClick={onDelete} />;
}
