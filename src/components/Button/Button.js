import React from "react";
import "./Button.scss";

function Button(props) {
  const commonClassName = "button btn-effect";

  const combinedClassName = `${commonClassName} ${props.className || ""}`;

  return (
    <a
      href={props.to}
      target={props.target}
      title={props.title}
      className={combinedClassName}
      onClick={props.onClick}
      type={props.type}
      value={props.value}
    >
      <span>{props.children}</span>
    </a>
  );
}

export default Button;
