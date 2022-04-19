import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import useWindowDimensions from "../hooks/use-window-dimension";
import "./../App.css";
import "./quizForm.css";
export default function QuizForm({ questions, onGoPrevious, ...props }) {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [choices, setChoices] = useState(new Array(questions.length).fill(0));
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();

  const handleGoPrevious = () => {
    if (currentQuestion.id > 1)
      setCurrentQuestion(questions[currentQuestion.id]);
  };

  const handleGoNext = () => {
    if (currentQuestion.id < questions.length)
      setCurrentQuestion(questions[currentQuestion.id]);
  };

  const handleSetChoice = (value) => {
    choices[currentQuestion.id] = value;
    setChoices([...choices]);
  };

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
                  <p className="quiz-item-numques-num">{currentQuestion.id}</p>
                </div>
              </Col>
              <Col xs={8} md={9} lg={8}>
                <span className="quiz-item-ques">
                  {currentQuestion.question || ""}
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
              {currentQuestion.choices.map((choice, idx) => {
                return (
                  <Col
                    xs={12}
                    md={3}
                    lg={3}
                    className={`${
                      choices[currentQuestion.id] === idx
                        ? "checked-click mr-2"
                        : "quiz-item-box-child mr-2"
                    }`}
                    onClick={() => handleSetChoice(choice.key)}
                    // value={children.key}
                  >
                    <p
                      style={{
                        fontSize:
                          choice.value.length > 10 ? "0.9em" : "inherit",
                      }}
                      key={idx}
                    >
                      {choice.value}
                    </p>
                  </Col>
                );
              })}
            </Row>
            <div className=" mr-3 quiz-item-actions">
              {/* <p className="quiz-item-note">*xyx: chú thích ở đây</p> */}
              <Button
                onClick={() => handleGoPrevious()}
                className="quiz-item-btn"
              >
                <span>Trước</span>
              </Button>
              <Button onClick={() => handleGoNext()} className="quiz-item-btn">
                <span>Tiếp</span>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
