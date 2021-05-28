import React from "react";
import Button from "./Button";
import "./FormResult.css";

function FormResult() {
  return (
    <div className="form-container">
      <div className="d-flex flex-column">
        <div className="result-form">
          <div className="text">Kết quả của bạn là </div>
          <div className="box-result">Kết quả </div>
        </div>
        <div className="fb-form justify-content-center">
          <img
            src="/images/wow.png"
            className="img-fluid px-3 fb-image"
            alt="wow mascos"
          />
          <div class="card fb-card">
            <div className="card-header fb-card-header d-flex flex-column">
              Feedback Form
              <div className="pt-3">dot here</div>
            </div>
            <div className="d-flex flex-column bd-highlight form-feedback">
              <div className="fb-content px-3 pt-3 text-center">
                Trai nghiem ve ket qua
              </div>
              <div className="list-feedback p-3">
                <div className="p-2 bd-highlight list-feedback-item ">
                  <div class="pr-3">Khong chinh xac</div>
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
                <div className=" p-2 bd-highlight list-feedback-item ">
                  Gan Chinh xac
                </div>
                <div className="p-2 bd-highlight list-feedback-item ">
                  Chinh xac
                </div>
              </div>
              <div className="fb-content fb-tooltip pb-3 text-center">
                xyz: Chu thich o day
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormResult;
