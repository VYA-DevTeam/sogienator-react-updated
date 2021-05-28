import React, { Component } from "react";
import {Container, Button} from 'react-bootstrap';
import "./quizForm.css";
import "./../App.css";
import QuizItems from './QuizItems';

export default function QuizForm(){
    return(
        <div>
            <Container fluid>
            <div className="form-container">
                <img
                src="/images/explain-crop.png"
                className="img-fluid test-img px-3 mx-auto d-block"
                alt="welcome-mascot"
                />
                <div className="quiz-item">
                    <div className="quiz-item-title">
                        <div className="quiz-item-numques">
                            <p className="quiz-item-numques-num">{`1`}</p>
                        </div>
                        <p className="quiz-item-ques">{`Giới tính sinh học của bạn là?`}</p>
                    </div>
                    <div className='quiz-item-ansTitle'>
                        <p>CHỌN CÂU TRẢ LỜI</p>
                    </div>
                    <div className="quiz-item-breakLine"></div>
                    <div className="quiz-item-box">
                        <QuizItems></QuizItems>
                        <QuizItems></QuizItems>
                        <QuizItems></QuizItems>
                        <QuizItems></QuizItems>
                        <QuizItems></QuizItems>
                        <QuizItems></QuizItems>
                    </div>
                    <div className="quiz-item-nextBtn">
                        <p className="quiz-item-note">*xyx: chú thích ở đây</p>
                        <Button className="quiz-item-btn"><span>Tiếp</span></Button>{' '}
                    </div>
                </div>
            </div>
            </Container>
        </div>
    )
}