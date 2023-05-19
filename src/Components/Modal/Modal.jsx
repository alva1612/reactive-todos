import { createPortal } from "react-dom";

import "./Modal.css";

export function Modal({ children, size }) {
  const classList = `Modal-content Modal-content-${size}`;
  return createPortal(
    <div className="Modal-backdrop">
      <div className={classList}>{children}</div>
    </div>,
    document.getElementById("modal")
  );
}
