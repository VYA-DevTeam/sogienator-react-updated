import React, { Component } from "react";
import { Container, Button } from 'react-bootstrap';
import "./quizForm.css";
import "./../App.css";

export default function QuizItem(props) {
    const { content, children } = props;
    return (
        <div className="quiz-item-box-child" value='1'>
            {children}
        </div>
    )
}