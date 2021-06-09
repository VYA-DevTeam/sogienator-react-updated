import React from "react";
import Button from "./Button";
import "./testForm.css";
import "./../App.css";

function TestForm() {
  return (
    <div className="form-container d-flex flex-wrap align-self-center justify-content-center">
      <div className="test--items h-25 w-25 p-3 bd-highlight test-right test-right-header mt-3 ">
        Question
      </div>
      <div class="test--items h-25 w-25 p-3 bd-highlight test-left test-left-header mt-3">
        Choose Answers
      </div>
      <div className="test--items test-right p-3 bd-highlight ">
        <div className="text-center d-flex flex-column justify-content-center rounded" style={{ height: 90 + "%" }}>
          <div className="">
            <img
              src="/images/explain-crop.png"
              className="img-fluid test-img px-3 mx-auto d-block"
              alt="welcome mascos"
            />
            <div
              class="card card-border test-question mb-3 "
            >
              <div class="card-body font-weight-bold" >
                <p class="card-text">Ban cam thay co tinh cam voi?</p>
              </div>
            </div>
          </div>
          <div className = "test-btn">
          <Button buttonSize="btn--small" buttonStyle="btn--next">
            Next
          </Button>
          </div>
        </div>
      </div>
      <div className="test--items test-left p-3 bd-highlight">
        <div className="test-answers d-flex flex-wrap justify-content-around p-3">
          <div className="card test-answer col-4 text-center">
            <div className="card-body test-answer-content">
              This is some text within a card body.
            </div>
          </div>
          <div className="card test-answer">
            <div className="card-body test-answer-content">
              This is some text within a card body.
            </div>
          </div>
          <div className="card test-answer">
            <div className="card-body test-answer-content">
              This is some text within a card body.
            </div>
          </div>
          <div className="card test-answer">
            <div className="card-body test-answer-content">This is some text within a card body.</div>
          </div>
          <div className="card test-answer">
            <div className="card-body test-answer-content">
              This is some text within a card body.
            </div>
          </div>
          {/* <div className="card test-answer">
            <div className="card-body test-answer-content">
              This is some text within a card body.
            </div>
          </div>
          <div className="card test-answer">
            <div className="card-body test-answer-content">
              This is some text within a card body.
            </div>
          </div>
          <div className="card test-answer">
            <div className="card-body test-answer-content">This is some text within a card body.</div>
          </div>
          <div className="card test-answer">
            <div className="card-body test-answer-content">
              This is some text within a card body.
            </div>
          </div> */}
          
          </div>
          <div className = "test-btn-mobile">
          <Button buttonSize="btn--small" buttonStyle="btn--next">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TestForm;
