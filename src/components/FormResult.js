import React, { useState, useEffect } from "react";
import Button from "./Button";
import "./FormResult.css";
import MobileDetect from "mobile-detect";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
// import Result from "./pages/Result";
import axios from "axios";
// var md = new MobileDetect(window.navigator.userAgent);

const FormResult = (props) => {
  const result = props;
  const url = "https://vya-sogienator.herokuapp.com/feedback-question";
  // const { history } = props;
  // getResult();


  
  let device = "";
  var md = new MobileDetect(window.navigator.userAgent);
  if (md.phone() != null) device = "Phone";
  else if (md.tablet() != null) device = "Tablet";
  else device = "Desktop";

  // const [result, setResult] = useState([]);
  const [data, setData] = useState({
    accuracy: "",
    age: "",
    additional: "",
    device: device,
    result: result.result,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // let [bgColor, setBgColor] = useState({
  //   bgColor: "#fff2f8",
  // });
  // const [checkClicked, setCheckClicked] = useState(false);
  const [chosenColor, setChosenColor] = useState("");
  if (isLoading) {
    return <div>Loading...</div>;
  }

  function checkType() {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        navigator.userAgent
      )
    ) {
      return "mobile";
    } else return "tablet, laptop";
  }

  function choiceClicked() {
    setChosenColor({
      bgColor: "#c3126b"
    });
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
          result: data.result,
        })
        .then((response) => {

        });
      alert("???? g???i");
    }
    return false;
  }
  function handleClick(e) {
    const newdata = { ...data };
    console.log("newdata", newdata);
    // setCheckClicked(true);
    // e.target.classList[2] = "forcus-back";
    let bgColor2 = "#c3126b";
    let bgColor = "#ffd2da";

    // setBgColor(bgColor2);
    console.log("focus: " + bgColor2);
    console.log("normal: " + bgColor);


    // e.target.style.backgroundColor = checkClicked? bgColor:bgColor2;

    if (e.target.parentElement.id !== "additional") {
      newdata[e.target.parentElement.id] = e.target.id;
    } else {
      newdata[e.target.parentElement.id] = e.target.value;
    }
    setData(newdata);
  }

  return (
    <div className="form-container">
      <div className="d-flex flex-column">
        {/* <div className="result-form">
          <div className="text">K???t qu??? c???a b???n l?? </div>
          {result && <div className="box-result">{result}</div>}
        </div> */}
        <div className="fb-form justify-content-center">
          <img
            src="/images/wow.png"
            className="img-fluid px-3 fb-image"
            alt="wow mascos"
          />
          <div class="card fb-card">
            <div className="fb-card-header p-3 mb-3">????nh gi?? Sogienator</div>
            <form
              className="d-flex flex-column bd-highlight form-feedback"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="fb-content px-2 pt-3 text-center">
                Tr???i nghi???m v??? k???t qu???
              </div>
              <div className="list-feedback px-3 pt-2 mr-1">
                <div
                  className="first-q"
                  onClick={(e) => handleClick(e)}
                  id="accuracy"
                  value={data.accuracy}
                >
                  <div className="p-3 bd-highlight list-feedback-item " id="1" style={{backgrounColor: chosenColor}} onClick={() => choiceClicked()}>
                    Kh??ng ch??nh x??c
                  </div>
                  <div className=" p-3 bd-highlight list-feedback-item " id="2">
                    G???n ch??nh x??c
                    <Tooltip
                      title="Sogienator ???? t??nh to??n ????ng m???t ph???n nh??ng ch??a ?????y ?????"
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
                    Ch??nh x??c
                  </div>
                  <div className="p-3 bd-highlight list-feedback-item " id="4">
                    C?? k???t qu??? nh??ng c???m th???y kh??ng gi???ng v???i b???n th??n
                    <Tooltip
                      title="N???u b???n ch??a t???ng x??c ?????nh tr?????c"
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
                    C?? k???t qu??? v?? c???m th???y gi???ng v???i b???n th??n
                    <Tooltip
                      title="N???u b???n t???ng x??c ?????nh tr?????c"
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
              <div className="first-q">
                <div className="fb-content px-2 pt-3 text-center">
                  Tu???i c???a b???n{" "}
                </div>
                <div
                  className="list-feedback p-4"
                  onClick={(e) => handleClick(e)}
                  id="age"
                  value={data.age}
                >
                  <div className="p-3 bd-highlight list-feedback-item " id="1">
                    D?????i 15
                  </div>
                  <div className=" p-3 bd-highlight list-feedback-item " id="2">
                    Trong ????? tu???i t??? 15 ?????n 20
                  </div>
                  <div className="p-3 bd-highlight list-feedback-item " id="3">
                    Trong ????? tu???i t??? 21 ?????n 30
                  </div>
                  <div className="p-3 bd-highlight list-feedback-item " id="4">
                    Tr??n 30
                  </div>
                </div>
              </div>
              <div
                className="first-q"
                onChange={(e) => handleClick(e)}
                id="additional"
                value={data.additional}
              >
                <div className="fb-content px-4 pt-2 text-center">
                  B???n c??n ??i???u g?? mu???n b??y t??? ho???c g??p ?? chi ti???t th??m v???i Vy An
                  kh??ng?{" "}
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
                      placeholder="C??u tr??? l???i c???a b???n"
                      type="text"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="list-feedback-item pb-3 fb-btn-round ">
                <button className="p-3 fb-btn " type="submit">
                  G???i
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
