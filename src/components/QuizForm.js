import React, { useState, useEffect } from "react";
import { Container, Button, Row } from "react-bootstrap";
import "./quizForm.css";
import "./../App.css";
import QuizItem from "./QuizItem";
export default function QuizForm({
  onChoiceSelected,
  question
}) {
  return (
    <div>
      <Container fluid="lg">
        <Row container direction="column">
          <div>
            <img
              src="/images/explain-crop.png"
              className="img-fluid test-img px-3 mx-auto d-block"
              alt="welcome-mascot"
            />
            <div className="quiz-item">
              <div className="quiz-item-title">
                <div className="quiz-item-numques">
                  <p className="quiz-item-numques-num">{chooseQuestion + 1}</p>
                </div>
                <p className="quiz-item-ques">{question.question || ""}</p>
              </div>
              <div className="quiz-item-ansTitle">
                <p>CHỌN CÂU TRẢ LỜI</p>
              </div>
              <div className="quiz-item-breakLine"></div>
              <div className="quiz-item-box">
                {question.choices.map((choice, idx) => {
                  return (
                    <div className={`${checkClicked ? 'checked-click' : 'quiz-item-box-child'}`} onClick={() => setChooseId(children.key)} value={children.key}>
                        {children}
                    </div>
                  );
                })}
              </div>
              <div className="quiz-item-nextBtn">
                <p className="quiz-item-note">*xyx: chú thích ở đây</p>
                <Button
                  onClick={() => handleChooseQuestion(chooseId, setChooseId)}
                  className="quiz-item-btn"
                >
                  <span>Tiếp</span>
                </Button>{" "}
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
