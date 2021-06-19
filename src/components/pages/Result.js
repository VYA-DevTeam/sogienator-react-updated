import React, { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import "../../App.css";
import FormResult from "../FormResult";

function Result(props) {
  const { history } = props;
  useEffect(() => {
    console.log(history.location.state);
  }, [])
  return (
    <div>
      <Header></Header>
      <FormResult
        choice={history.location.state.choiceId}
      >
      </FormResult>
      <Footer />
    </div>
  );
}

export default Result;
