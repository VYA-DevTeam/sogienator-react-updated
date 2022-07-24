import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-tippy/dist/tippy.css";
import { getApiClient } from "../../client/result";
import FormResult from "../FormResult";
import Header from "../Header";
import Loading from "../Loading";
import useQuery from "../../hooks/user-query";
import FeedbackForm from "../FeedbackForm";
function Result(props) {
  // const { history } = props;
  const query = useQuery();
  const apiClient = getApiClient();
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

  // const getResult = () => {
  //   let choiceID = history.location.state.choiceID;
  //   let choiceType = history.location.state.answerType;
  //   // console.log(choiceID, choiceType);
  //   if (choiceType === "general") {
  //     // console.log("g");
  //     axios
  //       .get("https://vya-sogienator.herokuapp.com/result", {
  //         params: {
  //           // key: 165904,
  //           key: choiceID,
  //         },
  //       })
  //       .then(function (response) {
  //         console.log(response.data[0].value);
  //         setResult(toTitleCase(response.data[0].value));
  //         // console.log(result);
  //       });
  //   } else {
  //     console.log("s");
  //     axios
  //       .get("https://vya-sogienator.herokuapp.com/specific-result", {
  //         params: {
  //           // key: 165904,
  //           key: choiceID,
  //         },
  //       })
  //       .then(function (response) {
  //         if (response.data.length == 0) {
  //           console.log(
  //             "Not found result, data length: " + response.data.length
  //           );
  //           console.log(response);
  //           setResult("Bán Vô Tính");
  //         } else {
  //           console.log(response.data.length);
  //           console.log(response);
  //           setResult("Bán Vô Tính");
  //         }
  //       });
  //   }
  // };
  // getResult();



  return isLoading ? (
    <Loading></Loading>
  ) : (
    <>
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
              {/* <Tooltip
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
              </Button> */}
            </div>

            <div>{result && <div className="box-result">vô tính</div>}</div>
          </div>
        </div>
      </div>
      <FeedbackForm
        result={result}
      />
    </>
  );
}

export default Result;
