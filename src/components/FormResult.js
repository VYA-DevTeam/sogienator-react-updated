import React, { useState } from "react";
import Button from "./Button";
import "./FormResult.css";
import QuizPage from "./pages/Quiz";
// import {
//   getApiClient
// } from "../../client/result";
import axios from "axios";

function FormResult() {
  const [value, setValue, isLoading] = useState("");
  const handleResult = () => {
    axios
      .get("https://vya-sogienator.herokuapp.com/result", {
        params:{
          key:165904
        }
      })
  };
  // const result = (props)
  return (
    <div className="form-container">
      <div className="d-flex flex-column">
        <div className="result-form">
          <div className="text">Kết quả của bạn là </div>
          <button className="box-result" onClick={handleResult}></button>
          {/* {value} + Hey */}
        </div>
        <div className="fb-form justify-content-center">
          <img
            src="/images/wow.png"
            className="img-fluid px-3 fb-image"
            alt="wow mascos"
          />
          <div class="card fb-card">
            <div className="card-header fb-card-header d-flex flex-column">
              Đánh giá Sogienator
              {/* <div className="pt-3">dot here</div> */}
            </div>
            <div className="d-flex flex-column bd-highlight form-feedback">
              <div className="fb-content px-2 pt-3 text-center">
                Trải nghiệm về kết quả
              </div>
              <div className="list-feedback p-4">
                <div className="p-3 bd-highlight list-feedback-item ">
                  <div class="pr-3">Không chính xác</div>
                  {/* <Button
                    buttonSize="btn--esmall"
                    buttonStyle="btn--tooltip"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Tooltip on right"
                  >
                    ?
                  </Button> */}
                </div>
                <div className=" p-3 bd-highlight list-feedback-item ">
                  Gần chính xác
                </div>
                <div className="p-3 bd-highlight list-feedback-item ">
                  Chính xác
                </div>
                <div className="p-3 bd-highlight list-feedback-item ">
                  Có kết quả nhưng cảm thấy không giống với bản thân
                </div>
                <div className="p-3 bd-highlight list-feedback-item ">
                  Có kết quả và cảm thấy giống với bản thân
                </div>
              </div>

              <div className="fb-content fb-tooltip px-4 pb-3 text-center">
                Sogienator đã tính toán đúng một phần nhưng chưa đầy đủ
              </div>
              <div className="fb-content px-2 pt-3 text-center">
                Trải nghiệm về kết quả
              </div>
              <div className="list-feedback p-4">
                <div className="p-3 bd-highlight list-feedback-item ">
                  <div class="pr-3">Không chính xác</div>
                  {/* <Button
                    buttonSize="btn--esmall"
                    buttonStyle="btn--tooltip"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Tooltip on right"
                  >
                    ?
                  </Button> */}
                </div>
                <div className=" p-3 bd-highlight list-feedback-item ">
                  Gần chính xác
                </div>
                <div className="p-3 bd-highlight list-feedback-item ">
                  Chính xác
                </div>
                <div className="p-3 bd-highlight list-feedback-item ">
                  Có kết quả nhưng cảm thấy không giống với bản thân
                </div>
                <div className="p-3 bd-highlight list-feedback-item ">
                  Có kết quả và cảm thấy giống với bản thân
                </div>
              </div>

              <div className="fb-content fb-tooltip px-4 pb-3 text-center">
                Sogienator đã tính toán đúng một phần nhưng chưa đầy đủ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormResult;
