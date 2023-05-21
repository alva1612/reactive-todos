import * as React from "react";
import { TodoProvider } from "./Contexts/TodoContext";
import { AppUI } from "./AppUI";
import { ModalProvider } from "./Contexts/ModalContext";

import "./App.css";

export function App() {
  return (
    <ModalProvider>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </ModalProvider>
  );
}
