import * as React from "react";
import { createContext, useState } from "react";

interface ModalContextValue {
  displayModal: boolean;
  toggleNewTodoModal: (event: React.FormEvent | React.MouseEvent) => void;
}

const defaultVal: ModalContextValue = {
  toggleNewTodoModal: () => { },
  displayModal: false,
};

const ModalContext = createContext<ModalContextValue>(defaultVal);

const ModalProvider = (props: React.PropsWithChildren) => {
  const { children } = props;
  const [displayModal, setDisplayModal] = useState(false);

  const toggleNewTodoModal = (event: React.FormEvent | React.MouseEvent) => {
    if (event && event.preventDefault && !event.isDefaultPrevented)
      event.preventDefault();
    const activeModals = document.querySelectorAll("#modal");
    if (!displayModal) {
      setDisplayModal(!displayModal);
      activeModals.forEach((element) => element.classList.remove("fadeOut"));
    }
    else {
      activeModals.forEach((element) => element.classList.add("fadeOut"));
      setTimeout(() => {
        setDisplayModal(!displayModal);
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
