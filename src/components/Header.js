import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container d-flex flex-rows text-center pb-3">
      <div className="logo align-self-start">
        <img
          src="/images/header-footer/logoVYA.png"
          className="img-fluid"
          alt="logo"
        />
      </div>
      <div className="name align-self-center flex-grow-1">Sogiesc Test </div>
    </div>
  );
}

export default Header;
