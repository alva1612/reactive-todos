import { MouseEventHandler } from "react";

export interface TodoIconProps {
  type: "delete" | "check" | "search";
  color: string;
  onClick: React.MouseEventHandler;
}

export interface DeleteIconProps {
  onDelete: React.MouseEventHandler;
}

export interface CompleteIconProps {
  completed: boolean;
  onComplete: MouseEventHandler;
}
