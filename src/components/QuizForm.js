import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./quizForm.css";
import "./../App.css";
import QuizItem from "./QuizItem";
import useWindowDimensions from "../hooks/use-window-dimension";
export default function QuizForm({ onChoiceSelected, question }) {
  const [chosenChoiceIdx, setChosenChoiceIdx] = useState(null);
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();

  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} md={5}>
          {windowWidth >= 800 ? (
            <img
              src="/images/explain.png"
              style={{
                maxWidth: 450,
              }}
              className="img-fluid mx-auto d-block"
              alt="welcome-mascot"
            />
          ) : (
            <img
              src="/images/explain-crop.png"
              style={{
                maxWidth: 300,
              }}
              className="img-fluid mx-auto d-block"
              alt="welcome-mascot"
            />
          )}
        </Col>
        <Col>
          <div className="quiz-item">
            <Row
              style={{ margin: 0 }}
              className="quiz-item-title justify-content-center align-items-center"
            >
              <Col xs={3}>
                <div className="quiz-item-circle">
                  <p className="quiz-item-numques-num">{question.id}</p>
                </div>
              </Col>
              <Col xs={8} md={9} lg={8}>
                <span className="quiz-item-ques">
                  {question.question || ""}
                </span>
              </Col>
            </Row>
            <div className="quiz-item-ansTitle">
              <p>CHỌN CÂU TRẢ LỜI</p>
            </div>
            <div className="quiz-item-breakLine"></div>
            <Row
              style={{
                marginLeft: 0,
                marginRight: 0,
                marginTop: "1em",
                padding: "1em",
              }}
              className="quiz-item-box"
            >
              {question.choices.map((choice, idx) => {
                return (
                  <Col
                    xs={12}
                    md={3}
                    lg={3}
                    className={`${
                      chosenChoiceIdx === idx
                        ? "checked-click"
                        : "quiz-item-box-child"
                    }`}
                    onClick={() => setChosenChoiceIdx(idx)}
                    // value={children.key}
                  >
                    <p key={idx}>{choice.value}</p>
                  </Col>
                );
              })}
            </Row>
            <div className="quiz-item-nextBtn">
              <p className="quiz-item-note">*xyx: chú thích ở đây</p>
              <Button
                onClick={() => onChoiceSelected(chosenChoiceIdx)}
                className="quiz-item-btn"
              >
                <span>Tiếp</span>
              </Button>{" "}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
