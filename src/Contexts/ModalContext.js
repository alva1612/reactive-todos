import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [displayModal, setDisplayModal] = useState(false);

  const toggleNewTodoModal = (event) => {
    if (event && event.preventDefault) event.preventDefault();
    if (!displayModal) setDisplayModal(!displayModal);
    else {
      const activeModals = document.querySelectorAll("#modal");
      activeModals.forEach((element) => element.classList.toggle("fadeOut"));
      setTimeout(() => {
        setDisplayModal(!displayModal);
        activeModals.forEach((element) => element.classList.toggle("fadeOut"));
      }, 150);
    }
  };

  return (
    <ModalContext.Provider value={{ displayModal, toggleNewTodoModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
