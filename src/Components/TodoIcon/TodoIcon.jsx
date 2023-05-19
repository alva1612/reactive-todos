import { ReactComponent as CheckSVG } from "./Library/CompleteIcon/check.svg";
import { ReactComponent as DeleteSVG } from "./Library/DeleteIcon/delete.svg";
import { ReactComponent as SearchSVG } from "./Library/SearchIcon/search.svg";

import "./TodoIcon.css";

const iconTypes = {
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  search: (color) => <SearchSVG className="Icon-svg" fill={color}></SearchSVG>,
};

export function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}
