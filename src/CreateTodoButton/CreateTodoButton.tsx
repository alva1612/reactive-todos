import * as React from "react";
import { useContext } from "react";
import { ModalContext } from "../Contexts/ModalContext";

import "./CreateTodoButton.css";

export function CreateTodoButton() {
  const { toggleNewTodoModal } = useContext(ModalContext);

  return (
    <>
      <button className="ActionBtn" onClick={toggleNewTodoModal}>
        New TO DO
      </button>
    </>
  );
}
