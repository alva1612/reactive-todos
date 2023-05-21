import { createPortal } from "react-dom";

import "./Modal.css";
import React from "react";

export interface ModalProps {
  size: "medium" | "small" | "large";
}

export function Modal(props: React.PropsWithChildren<ModalProps>) {
  const { children, size } = props;
  const classList = `Modal-content Modal-content-${size}`;
  return createPortal(
    <div className="Modal-backdrop">
      <div className={classList}>{children}</div>
    </div>,
    document.getElementById("modal") as HTMLDivElement
  );
}
