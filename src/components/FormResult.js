import React, { useState } from "react";
import Button from "./Button";
import "./FormResult.css";
import MobileDetect from "mobile-detect";
import platform from "platform";
import QuizPage from "./pages/Quiz";
import customAxios from "../client/request";
// import {
//   getApiClient
// } from "../../client/result";
import axios from "axios";
// var md = new MobileDetect(window.navigator.userAgent);
// console.log(md);

const FormResult = () => {
  const [value, setValue, isLoading] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  // const handleResult = () => {
  //   axios.get("https://vya-sogienator.herokuapp.com/result", {
  //     params: {
  //       key: 165904,
  //     },
  //   });
  // };
  const feedback = (param) =>
    customAxios.post("result", param).then((res) => res.data);
  var md = new MobileDetect(window.navigator.userAgent);
  const device = "";
  if (md.phone() != null) device = md.phone();
  else if (md.tablet() != null) device = md.tablet();
  else device = "Desktop";
  console.log(device);

  // const device = {
  // name: platform.name,
  // version: platform.version,
  // product: platform.product,
  // manufacture: platform.manufacturer,
  // layout: platform.layout,
  // os: platform.os,
  // description: platform.description,
  // };
  const formInfo_ = {
    accuracy: "",
    age: "",
    additional: "",
    device,
  };
  const onSubmit_ = (data) => {
    console.log(data);
    setSubmitting(data)
      .then((res) => {
        console.log("Feedback succesfully");
        setShow(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => setSubmitting(false));
  };
  // console.log(formInfo);

  // const result = (props)
  return (
    <div className="form-container">
      <div className="d-flex flex-column">
        <div className="result-form">
          <div className="text">Kết quả của bạn là </div>
          <button className="box-result"></button>
          {/* {value} + Hey */}
        </div>
        <div className="fb-form justify-content-center">
          <img
            src="/images/wow.png"
            className="img-fluid px-3 fb-image"
            alt="wow mascos"
          />
          <div class="card fb-card">
            <div className="fb-card-header p-3 mb-3">Đánh giá Sogienator</div>
            <div
              className="d-flex flex-column bd-highlight form-feedback"
              onSubmit={onSubmit_}
              formInfo={formInfo_}
            >
              <div className="fb-content px-2 pt-3  text-center">
                Trải nghiệm về kết quả
              </div>
              <div className="list-feedback px-3 pt-2 mr-1">
                <div className="p-3 bd-highlight list-feedback-item ">
                  <div class="pr-3">Không chính xác</div>
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
                <div className=" p-3 bd-highlight list-feedback-item ">
                  Gần chính xác
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
                <div className="p-3 bd-highlight list-feedback-item ">
                  Chính xác
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
                <div className="p-3 bd-highlight list-feedback-item ">
                  Có kết quả nhưng cảm thấy không giống với bản thân
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
                <div className="p-3 bd-highlight list-feedback-item ">
                  Có kết quả và cảm thấy giống với bản thân
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
              </div>
              {/* 
              <div className="fb-content fb-tooltip px-4 pb-3 text-center">
                Sogienator đã tính toán đúng một phần nhưng chưa đầy đủ
              </div> */}
              <div className="fb-content px-2 pt-3 text-center">
                Tuổi của bạn{" "}
              </div>
              <div className="list-feedback p-4">
                <div className="p-3 bd-highlight list-feedback-item ">
                  <div class="pr-3"> Dưới 15</div>
                </div>
                <div className=" p-3 bd-highlight list-feedback-item ">
                  Trong độ tuổi từ 15 đến 20
                </div>
                <div className="p-3 bd-highlight list-feedback-item ">
                  Trong độ tuổi từ 21 đến 30
                </div>
                <div className="p-3 bd-highlight list-feedback-item ">
                  Trên 30
                </div>
              </div>
              {/* <div className="fb-content fb-tooltip px-4 pb-3 text-center">
                Sogienator đã tính toán đúng một phần nhưng chưa đầy đủ
              </div> */}
              <div className="fb-content px-4 pt-2 text-center">
                Bạn còn điều gì muốn bày tỏ hoặc góp ý chi tiết thêm với Vy An
                không?{" "}
              </div>
              <div className="list-feedback p-4">
                <div className="p-3 bd-highlight list-feedback-item fb-text ">
                  <textarea
                    className="fb-textarea"
                    row="4"
                    placeholder="Tâm sự với Vy An ngay"
                  ></textarea>
                </div>
                <div className="list-feedback-item fb-btn-round ">
                  <button className="p-3 mt-3 fb-btn " type="submit">
                    Gửi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormResult;
