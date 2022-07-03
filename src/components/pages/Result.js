import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-tippy/dist/tippy.css";
import { getApiClient } from "../../client/result";
import FormResult from "../FormResult";
import Header from "../Header";
import Loading from "../Loading";
import useQuery from "../../hooks/user-query";
import { apiResponseStatus } from "../../client/constant";
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

  const getResult = async (key) => {
    if (!key)
      key = query.get("key");
    if (!(parseInt(key) && !isNaN(key))) {
      window.open("/");
      return;
    }
    else {
      key = parseInt(key);
      let res = await apiClient.getResultByKey(key);
      if (res?.status === apiResponseStatus.OK && res?.data?.length)
      {
        let result = res?.data[0];
        setResult(result)
      }
    }
  }

  useEffect(() => {
    setIsLoading(true);
    if (!document?.referrer?.includes("/quiz"))
    {
      window.open("/");
      return;
    }
    setIsLoading(false);
    getResult();
  },[]);

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

            <div>{result && <div className="box-result">{result.value}</div>}</div>
          </div>
        </div>
      </div>
      <FormResult result={result}></FormResult>
    </>
  );
}

export default Result;
