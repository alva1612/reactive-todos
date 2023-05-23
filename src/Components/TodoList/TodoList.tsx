import * as React from "react";
import "./TodoList.css";

function TodoList(props: React.PropsWithChildren) {
  const { children } = props;
  return <ul className="list-container">{children}</ul>;
}

export { TodoList };
