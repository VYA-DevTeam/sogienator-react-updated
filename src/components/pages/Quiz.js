import React,{useState,useEffect} from "react";
import Footer from "../Footer";
import Header from "../Header";
import Loading from '../Loading';
import QuizItem from '../QuizItem'
import { Container, Button } from 'react-bootstrap';
import "../quizForm.css";

import {
    getApiClient
} from "../../client/api";

export default function QuizPage({history,match}){
    const [questions,setQuestions] = useState([]);
    const [chooseId,setChooseId] = useState(null);
    const [answerGeneral,setAnswerGeneral] = useState([]);
    const [answerSpecific,setAnswerSpecific] = useState([]);
    const [chooseQuestion, setChooseQuestion] = useState(0);
    const [isLoading,setLoading] = useState(true);
    const [answerType, setAnswerType] = useState("general")
    const [answerID, setAnswerID] = useState()

    const fetchObject = {
          0: "specific_emotional",
          1: "specific_sexual",
    }
    const handleFetchQuestion = async () => {
        const response = await getApiClient().getQuestionByType("general");
        if (response.status === 200) {
            let nextGeneral = {
                choices:["Xu Hướng Tình Cảm","Xu Hướng Tính Dục","Cả 2", "Không"],
                id: 222,
                question: "Bạn có muốn tìm hiểu  về 1 trong những điều nào sau đây",
                type:"Switch"
            }
            console.log(response.data); 
            response.data.push(nextGeneral);
            setQuestions(response.data.sort((a,b)=> a.id-b.id));
            setLoading(false);
        }
    }
    const handleSetAnswers = (answersUser) => {
        if(questions[chooseQuestion].type.includes("specific")) {
           setAnswerSpecific([...answerSpecific,answersUser])
        }else {
           setAnswerGeneral([...answerGeneral,answersUser]);
        }
    }
    const handleChooseNextQuestion = async ()=> {
            setLoading(true)
            if (chooseId <=2 ) {
                const response =  await getApiClient().getQuestionByType(fetchObject[chooseId]);
                if(response.status === 200) {
                    setQuestions([...questions, ...response.data.sort((a, b) => a.id - b.id)])
                }
            }if (chooseId == 2) {
                const resEmo = await getApiClient().getQuestionByType(fetchObject[0]);
                const resSex = await getApiClient().getQuestionByType(fetchObject[1]);
                if (resEmo.status === 200 && resSex.status === 200) {
                    setQuestions([...questions, ...resEmo.data.sort((a, b) => a.id - b.id), ...resSex.data.sort((a,b)=>a.id-b.id)])
                }
            }
            
            setLoading(false)
            setQuestions(questions => questions.filter(el => el.type !== "Switch"))
            if (chooseId == 3) {
                // exit tai day
                console.log (answerGeneral)

                let answerID = convertToDecimal(answerGeneral);
                setAnswerID (answerID);
                // let choice = convertToDecimal(answerGeneral);
                history.push({
                    pathname:"/result",
                    state:{
                      choiceID: answerID,
                      answerType: answerType,
                    }
                })
            }
    }
    
    const handleChooseQuestion = async  () => {
        if(chooseId == null) {
            alert("Bạn nên chọn đáp án trước");
            return;
        }
        if (chooseQuestion === questions.length - 1 && questions[chooseQuestion].type === "Switch") {
            await handleChooseNextQuestion(chooseId);
            return;
        }
    
        // check type question is specific;
            // Set index answer +1
            // update State Answer
        const answerUser =  {
            quesId: questions[chooseQuestion].id,
            chooseId: parseInt(chooseId)
        }
        handleSetAnswers(answerUser)
        // Set Choose Id to Null
        setChooseId(null);
        // Move Page if end question 
        
        if (chooseQuestion === questions.length - 1) { //fix loi phan end result
            // Exit tai day
            let answerID = convertToDecimal(answerSpecific);
                setAnswerID (answerID);
            // console.log(answerSpecific);
            // console.log( convertToDecimal(answerSpecific))
            // let choice = convertToDecimal(answerSpecific);
            let answerType = "specific";
            setAnswerType(answerType)
            history.push({
                pathname: "/result",
                state: {
                    // answerGeneral: convertToDecimal(answerGeneral),
                    choiceID: answerID,
                    answerType: answerType,
                }
            })
            return;
        }
        // Increase Question
        setChooseQuestion(chooseQuestion + 1);
    }
 
    useEffect(() => {
        handleFetchQuestion();
    }, [])
    const question = questions[chooseQuestion];
    const convertToDecimal = (arr) => {
        // convert to string
        //arr = [...answerGeneral,...answerSpecific]
        let answerArr = arr.join("");
        console.log(`Mang ans o dang chuoi la ${answerArr}`);
        let answerDecimal = parseInt(answerArr,2);
        console.log(`Sau khi chuyen sang he 10, mang ans tro thanh: ${answerDecimal}`);
        return answerDecimal;
    }
    // const user = convertToDecimal();
    return(
        <div>
            {
                isLoading ? <Loading></Loading> :
                <>
                    <Header></Header>
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
                                            <p className="quiz-item-numques-num">{chooseQuestion + 1}</p>
                                        </div>
                                        <p className="quiz-item-ques">{question.question || ""}</p>
                                    </div>
                                    <div className='quiz-item-ansTitle'>
                                        <p>CHỌN CÂU TRẢ LỜI</p>
                                    </div>
                                    <div className="quiz-item-breakLine"></div>
                                    <div className="quiz-item-box">
                                        {
                                        question.choices.map((choice,idx) => {
                                                return (<QuizItem 
                                                setChooseId= {setChooseId}
                                                checkClicked={chooseId==idx}
                                                key = {
                                                    idx
                                                } >
                                                    <p key={idx}>{choice}</p>
                                                </QuizItem>
                                                )})
                                        }
                                        
                                    </div>
                                    <div className="quiz-item-nextBtn">
                                        <p className="quiz-item-note">*xyx: chú thích ở đây</p>
                                        <Button
                                            onClick={() => handleChooseQuestion()}
                                            className="quiz-item-btn"><span>Tiếp</span></Button>{' '}
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <Footer/>
                </>
            }
        </div>
    )
}