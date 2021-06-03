import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const SIZES = ["btn--medium", "btn--large", "btn--small", "btn--esmall"];
const STYLES = ["btn--home", "btn--submit", "btn--next", "btn--tooltip"];

export const LinkButton = ({
  children,
  type,
  onClick,
  buttonSize,
  buttonStyle,
  path
}) => {
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES["btn-large"];
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <Link to={path} className="btn-start">
      <button
        className={`btn ${checkButtonSize} ${checkButtonStyle} `}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default LinkButton;
