import React, { useState } from "react";
import Button from "./Button";
import "./FormResult.css";
import MobileDetect from "mobile-detect";
import platform from "platform";
import QuizPage from "./pages/Quiz";
import customAxios from "../client/request";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

import axios from "axios";
// var md = new MobileDetect(window.navigator.userAgent);
// console.log(md);

const FormResult = () => {
  // const handleResult = () => {
  //   axios.get("https://vya-sogienator.herokuapp.com/result", {
  //     params: {
  //       key: 165904,
  //     },
  //   });
  // };
  let device = "";

  const feedback = (param) =>
    customAxios.post("result", param).then((res) => res.data);
  var md = new MobileDetect(window.navigator.userAgent);
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
  console.log(formInfo_);
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
              formInfo={formInfo_}
            >
              <div className="fb-content px-2 pt-3  text-center">
                Trải nghiệm về kết quả
              </div>
              <div className="list-feedback px-3 pt-2 mr-1">
                <div className="p-3 bd-highlight list-feedback-item ">
                  <div class="pr-3">Không chính xác</div>
                </div>
                <div className=" p-3 bd-highlight list-feedback-item ">
                  Gần chính xác
                  <Tooltip
                    title="Sogienator đã tính toán đúng một phần nhưng chưa đầy đủ"
                    position="top"
                    trigger="mouseenter"
                    animation="fade"
                    theme= "dark"
                    className ="fb-tooltip"
                    size="regular"
                  >
                    <Button
                      buttonSize="btn--esmall"
                      buttonStyle="btn--tooltip"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Tooltip on right"
                    >
                      ?
                    </Button>
                  </Tooltip>
                </div>
                <div className="p-3 bd-highlight list-feedback-item ">
                  Chính xác
                </div>
                <div className="p-3 bd-highlight list-feedback-item ">
                  Có kết quả nhưng cảm thấy không giống với bản thân
                  <Tooltip
                    title="Nếu bạn chưa từng xác định trước"
                    position="top"
                    trigger="mouseenter"
                  >
                    <Button
                      buttonSize="btn--esmall"
                      buttonStyle="btn--tooltip"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Tooltip on right"
                    >
                      ?
                    </Button>
                  </Tooltip>
                </div>
                <div className="p-3 bd-highlight list-feedback-item ">
                  Có kết quả và cảm thấy giống với bản thân
                  <Tooltip
                    title="Nếu bạn từng xác định trước"
                    position="top"
                    trigger="mouseenter"
                  >
                    <Button
                      buttonSize="btn--esmall"
                      buttonStyle="btn--tooltip"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Tooltip on right"
                    >
                      ?
                    </Button>
                  </Tooltip>
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
