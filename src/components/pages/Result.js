import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import axios from "axios";
import Button from "../Button";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

import "../../App.css";
import FormResult from "../FormResult";

function Result(props) {
  const { history } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [result, setResult] = useState([]);

  const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getResult = () => {
    let choiceID = history.location.state.choiceID;
    let choiceType = history.location.state.answerType;
    console.log(choiceID, choiceType);
    if (choiceType === "general") {
      console.log("g");
      axios
        .get("https://vya-sogienator.herokuapp.com/result", {
          params: {
            // key: 165904,
            key: choiceID,
          },
        })
        .then(function (response) {
          console.log(response.data[0].value);
          setResult(toTitleCase(response.data[0].value));
          console.log(result);
        });
    } else {
      console.log("s");
      axios
        .get("https://vya-sogienator.herokuapp.com/specific-result", {
          params: {
            // key: 165904,
            key: choiceID,
          },
        })
        .then(function (response) {
          if (response.data.length == 0) {
            console.log(
              "Not found result, data length: " + response.data.length
            );
            console.log(response);
          } else {
            console.log(response.data.length);
            console.log(response);
            setResult("Bán Vô Tính");
          }
        });
    }
  };
  // getResult();

  useEffect(() => {
    console.log(history.location.state);
    console.log(history.location.state.choiceID);
    console.log(getResult());
  });

  return (
    <div>
      <Header></Header>
      <div className="form-container">
        <div className="d-flex flex-column">
          <div className="result-form">
            <div className="text">
              Kết quả của bạn là
              {/* <Tooltip
                title="Tìm hiểu thêm ở đây"
                position="top"
                trigger="mouseenter"
              ></Tooltip> */}
              <Tooltip
                title="Tìm hiểu thêm ở đây"
                position="top"
                trigger="mouseenter"
                animation="fade"
                theme="dark"
                className="fb-tooltip"
                size="regular"
              ></Tooltip>
              <Button
                buttonSize="btn--esmall"
                buttonStyle="btn--tooltip"
                data-toggle="tooltip"
                data-placement="right"
                title="Tooltip on right"
              >
                ?
              </Button>
            </div>

            <div>{result && <div className="box-result">{result}</div>}</div>
            {/* <div className="result-tooltip">
              <Tooltip
                title="Tìm hiểu thêm ở đây"
                position="right"
                trigger="mouseenter"
              ></Tooltip>
              <Button
                buttonSize="btn--esmall"
                buttonStyle="btn--tooltip"
                data-toggle="tooltip"
                data-placement="right"
                title="Tooltip on right"
              >
                ?
              </Button>
            </div> */}
          </div>
        </div>
      </div>
      <FormResult
        choiceID={history.location.state.choiceID}
        choiceType={history.location.state.answerType}
      ></FormResult>
      {/* choiceID = {history.location.state.choiceID}
      choiceType = {history.location.state.answerType} */}
      <Footer />
    </div>
  );
}

export default Result;
