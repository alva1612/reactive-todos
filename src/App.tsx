import * as React from "react";
import { TodoProvider } from "./Contexts/TodoContext";
import { AppUI } from "./AppUI";
import { ModalProvider } from "./Contexts/ModalContext";

import "./App.css";
import { CommonProvider } from "./Contexts/CommonContext";

export function App() {
  return (
    <CommonProvider>
      <ModalProvider>
        <TodoProvider>
          <AppUI />
        </TodoProvider>
      </ModalProvider>
    </CommonProvider>
  );
}
