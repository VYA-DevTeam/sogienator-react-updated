import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-tippy/dist/tippy.css";
import { getApiClient } from "../../client/result";
import FormResult from "../FormResult";
import Header from "../Header";
import Loading from "../Loading";
import useQuery from "../../hooks/user-query";
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

  const getResult = async () => {
    setIsLoading(true);
    let key = query.get("key");
    let resultRes = await apiClient.getResultByKey(key);
    console.log(resultRes);
    if (resultRes?.status === 200) {
      let data = resultRes.data[0];
      setResult(data.value);
    }
    setIsLoading(false);
    // axios
    //   .get("https://vya-sogienator.herokuapp.com/result", {
    //     params: {
    //       // key: 165904,
    //       key: choiceID,
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response.data[0].value);
    //     setResult(toTitleCase(response.data[0].value));
    //     // console.log(result);
    //   });
    // let result = await;
  };
  // getResult();

  useEffect(() => {
    getResult();
  }, []);
  useEffect(() => {
    console.log("result", result);
  }, [result]);

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

            <div>{result && <div className="box-result">{result}</div>}</div>
          </div>
        </div>
      </div>
      <FormResult result={result}></FormResult>
    </>
  );
}

export default Result;
