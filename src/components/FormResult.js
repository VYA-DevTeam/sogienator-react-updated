import React, { useState, useEffect } from "react";
import Button from "./Button";
import "./FormResult.css";
import MobileDetect from "mobile-detect";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import axios from "axios";
// var md = new MobileDetect(window.navigator.userAgent);
// console.log(md);

const FormResult = () => {
  // const { choice } = props;
  const url = "https://vya-sogienator.herokuapp.com/feedback-question";

  useEffect(() => {
    // console.log(history);
  }, []);

  const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  let device = "";
  var md = new MobileDetect(window.navigator.userAgent);
  if (md.phone() != null) device = "Phone";
  else if (md.tablet() != null) device = "Tablet";
  else device = "Desktop";
  // console.log(device);

  // const [result, setResult] = useState([]);
  const [data, setData] = useState({
    accuracy: "",
    age: "",
    additional: "",
    device: device,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  //  console.log(location.state.answerGeneral)

  // const feedback = (param) =>
  //   customAxios.post("result", param).then((res) => res.data);

  function checkType() {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        navigator.userAgent
      )
    ) {
      return "mobile";
    } else return "tablet, laptop";
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (window.confirm("Do you really want to submit the form?")) {
      axios
        .post(url, {
          accuracy: data.accuracy,
          age: data.age,
          additional: data.additional,
          device: data.device,
        })
        .then((response) => {
          console.log(response.data);
        });
      alert("Đã gửi");
      console.log("Submmited");
    }
    return false;
  }
  function handleClick(e) {
    const newdata = { ...data };
    console.log("parent id:" + e.target.parentElement.id);
    console.log("id:" + e.target.id);
    if (e.target.parentElement.id !== "additional"){
    newdata[e.target.parentElement.id] = e.target.id;}
    else {newdata[e.target.parentElement.id] = e.target.value;}
    setData(newdata);
    console.log(data);
  }

  // function getAdditionalValue(e) {
  //   console.log("parent id:" + e.target.parentElement.id);
  //   console.log(e);
  //   data.additional = e.target.value;
  // }
  return (
    <div className="form-container">
      <div className="d-flex flex-column">
        {/* <div className="result-form">
          <div className="text">Kết quả của bạn là </div>
          {result && <div className="box-result">{result}</div>}
        </div> */}
        <div className="fb-form justify-content-center">
          <img
            src="/images/wow.png"
            className="img-fluid px-3 fb-image"
            alt="wow mascos"
          />
          <div class="card fb-card">
            <div className="fb-card-header p-3 mb-3">Đánh giá Sogienator</div>
            <form
              className="d-flex flex-column bd-highlight form-feedback"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="fb-content px-2 pt-3  text-center">
                Trải nghiệm về kết quả
              </div>
              <div className="list-feedback px-3 pt-2 mr-1">
                <div
                  className="first-q"
                  onClick={(e) => handleClick(e)}
                  id="accuracy"
                  value={data.accuracy}
                >
                  <div className="p-3 bd-highlight list-feedback-item " id="1">
                    Không chính xác
                  </div>
                  <div className=" p-3 bd-highlight list-feedback-item " id="2">
                    Gần chính xác
                    <Tooltip
                      title="Sogienator đã tính toán đúng một phần nhưng chưa đầy đủ"
                      position="top"
                      trigger="mouseenter"
                      animation="fade"
                      theme="dark"
                      className="fb-tooltip"
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
                  <div className="p-3 bd-highlight list-feedback-item " id="3">
                    Chính xác
                  </div>
                  <div className="p-3 bd-highlight list-feedback-item " id="4">
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
                  <div className="p-3 bd-highlight list-feedback-item " id="5">
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
              </div>
              {/* 
              <div className="fb-content fb-tooltip px-4 pb-3 text-center">
                Sogienator đã tính toán đúng một phần nhưng chưa đầy đủ
              </div> */}
              <div
                className="first-q"
                // onClick={handleClick()}
              >
                <div className="fb-content px-2 pt-3 text-center">
                  Tuổi của bạn{" "}
                </div>
                <div
                  className="list-feedback p-4"
                  onClick={(e) => handleClick(e)}
                  id="age"
                  value={data.age}
                >
                  <div className="p-3 bd-highlight list-feedback-item " id="1">
                    Dưới 15
                  </div>
                  <div className=" p-3 bd-highlight list-feedback-item " id="2">
                    Trong độ tuổi từ 15 đến 20
                  </div>
                  <div className="p-3 bd-highlight list-feedback-item " id="3">
                    Trong độ tuổi từ 21 đến 30
                  </div>
                  <div className="p-3 bd-highlight list-feedback-item " id="4">
                    Trên 30
                  </div>
                </div>
              </div>
              {/* <div className="fb-content fb-tooltip px-4 pb-3 text-center">
                Sogienator đã tính toán đúng một phần nhưng chưa đầy đủ
              </div> */}
              <div
                className="first-q"
                // onClick={handleClick()}
                onChange={(e) => handleClick(e)}
                id="additional"
                value={data.additional}
              >
                <div className="fb-content px-4 pt-2 text-center">
                  Bạn còn điều gì muốn bày tỏ hoặc góp ý chi tiết thêm với Vy An
                  không?{" "}
                </div>
                <div className="list-feedback p-4">
                  <div
                    className="p-3 bd-highlight list-feedback-item fb-text "
                    onClick={(e) => handleClick(e)}
                    id="additional"
                    value={data.additional}
                  >
                    <textarea
                      className="fb-textarea"
                      row="4"
                      placeholder="Câu trả lời của bạn"
                      type="text"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="list-feedback-item pb-3 fb-btn-round ">
                <button className="p-3 fb-btn " type="submit">
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormResult;
