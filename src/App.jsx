import { TodoProvider } from "./Contexts/TodoContext";
import { AppUI } from "./AppUI";
import { ModalProvider } from "./Contexts/ModalContext";

import "./App.css";

function App() {
  return (
    <ModalProvider>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </ModalProvider>
  );
}

export default App;
