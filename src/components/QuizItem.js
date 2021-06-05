import React from "react";
import "./quizForm.css";
import "./../App.css";

export default function QuizItem(props) {
    const {
        children,
        setChooseId,
        checkClicked
    } = props;
    return (
        <div className={`${checkClicked ? 'checked-click' : 'quiz-item-box-child'}`} onClick={() => setChooseId(children.key)} value={children.key}>
            {children}
        </div>
    )
}