import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "../../App.css";
import FormResult from "../FormResult";

function Result({location}) {
  console.log(location.state.answerGeneral)
  return (
    <div>
      <Header></Header>
      <FormResult></FormResult>
      <Footer />
    </div>
  );
}

export default Result;
