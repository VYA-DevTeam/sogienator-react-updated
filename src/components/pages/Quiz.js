import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import QuizForm from "../QuizForm";

export default function QuizPage(){
    return(
        <div>
            <Header></Header>
            <QuizForm></QuizForm>
            <Footer/>
        </div>
    )
}