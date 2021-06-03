import React, { useState, useEffect } from "react";
import { Container, Button } from 'react-bootstrap';
import "./quizForm.css";
import "./../App.css";
import QuizItem from './QuizItem';
import { getApiClient } from "../client/api";

export default function QuizForm() {

    const [question, setQuestion] = useState([]);

    const handleFetchQuestion = async () => {
        const response = await getApiClient().getQuestionByType("general");
        if (response.status === 200) {
            console.log(response.data)
            setQuestion(response.data[0]);
        }
    }

    // useEffect(() => {
    //     if (question.choices)
    //         console.log(question.choices);
    // }, [question])

    return (
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
                            <p className="quiz-item-ques">{question.question || ""}</p>
                        </div>
                        <div className='quiz-item-ansTitle'>
                            <p>CHỌN CÂU TRẢ LỜI</p>
                        </div>
                        <div className="quiz-item-breakLine"></div>
                        <div className="quiz-item-box">
                            {question.choices ?
                                question.choices.map(choice => {
                                    return (<QuizItem>
                                        <h1>{choice}</h1>
                                    </QuizItem>
                                    )
                                }) : null}
                        </div>
                        <div className="quiz-item-nextBtn">
                            <p className="quiz-item-note">*xyx: chú thích ở đây</p>
                            <Button
                                onClick={handleFetchQuestion}
                                className="quiz-item-btn"><span>Tiếp</span></Button>{' '}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}