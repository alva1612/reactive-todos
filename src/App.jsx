import { TodoProvider } from "./Contexts/TodoContext";

import "./App.css";
import { AppUI } from "./AppUI";
import { ModalProvider } from "./Contexts/ModalContext";

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
