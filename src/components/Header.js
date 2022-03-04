import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container d-flex flex-rows text-center pb-3">
      <img
        src="/images/header-footer/logoVYA.png"
        className="img-fluid"
        alt="logo"
        width={"150px"}
      />
      {/* <span>Sogiesc Test</span> */}
    </div>
  );
}

export default Header;
