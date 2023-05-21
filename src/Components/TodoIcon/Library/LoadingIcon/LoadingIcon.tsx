import * as React from "react";
import "./LoadingIcon.css";

export const LoadingIcon = () => {
  return (
    <div className="Icon-container Icon-container-loading">
      <div className="LoadingIcon-container">
        <div className="LoadingIcon-rhombus" id="rh-1"></div>
        <div className="LoadingIcon-rhombus" id="rh-2"></div>
        <div className="LoadingIcon-rhombus" id="rh-3"></div>
      </div>
    </div>
  );
};
