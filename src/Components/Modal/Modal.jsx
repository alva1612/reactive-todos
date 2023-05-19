import { createPortal } from "react-dom";

export function Modal({ children }) {
  return createPortal(
    <div className="Modal">{children}</div>,
    document.getElementById("modal")
  );
}
