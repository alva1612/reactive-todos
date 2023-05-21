import * as React from "react";
import { ReactComponent as CheckSVG } from "./Library/CompleteIcon/check.svg";
import { ReactComponent as DeleteSVG } from "./Library/DeleteIcon/delete.svg";
import { ReactComponent as SearchSVG } from "./Library/SearchIcon/search.svg";

import "./TodoIcon.css";
import { TodoIconProps } from "./TodoIcon.interface";

const iconTypes = {
  delete: (color: string) => <DeleteSVG className="Icon-svg" fill={color} />,
  check: (color: string) => <CheckSVG className="Icon-svg" fill={color} />,
  search: (color: string) => (
    <SearchSVG className="Icon-svg" fill={color}></SearchSVG>
  ),
};

export function TodoIcon(props: React.PropsWithChildren<TodoIconProps>) {
  const { type, color, onClick } = props;
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}
