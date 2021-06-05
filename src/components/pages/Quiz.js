import React,{useState,useEffect} from "react";
import Footer from "../Footer";
import Header from "../Header";
import QuizForm from "../QuizForm";
import Loading from '../Loading';
import {
    getApiClient
} from "../../client/api";
export default function QuizPage({history,match}){
    const [questions,setQuestions] = useState([]);
    const [answer, setAnswer] = useState(new Array(40).fill(0));
    const [chooseQuestion, setChooseQuestion] = useState(0);
    const [offset,setOffset] = useState(0);
    const [isLoading,setLoading] = useState(true);
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
            response.data.push(nextGeneral);
            setQuestions(response.data);
            setLoading(false);
        }
    }
  
    const handleChooseQuestion = async  (chooseId,setChooseId) => {
        if(chooseId == null) {
            alert("Bạn nên chọn đáp án trước");
            return;
        }
        if (chooseQuestion === questions.length - 1 && questions[chooseQuestion].type === "Switch") {
            setLoading(true)
            if (chooseId <=2 ) {
                const response =  await getApiClient().getQuestionByType(fetchObject[chooseId]);
                if(response.status === 200) {
                    
                    setQuestions([...questions, ...response.data])
                }
            }if (chooseId == 2) {
                const resEmo = await getApiClient().getQuestionByType(fetchObject[0]);
                const resSex = await getApiClient().getQuestionByType(fetchObject[1]);
                if (resEmo.status === 200 && resSex.status === 200) {
                    setQuestions([...questions, ...resEmo.data, ...resEmo.data])
                }
            }
            setLoading(false)
            setQuestions(questions => questions.filter(el => el.type !== "Switch"))
            if (chooseId == 3) {
                // exit tai day
                history.push('/result')
            }
            return;
        }
        
        let trueIdx = Number(chooseId) + offset
        // Set index answer +1
        let newAnswer = [...answer];
        newAnswer[trueIdx] = 1;
        // update State Answer
        setAnswer(newAnswer);
        // update offset 
        setOffset((prevState) => questions[chooseQuestion].length + prevState);
        // Set Choose Id to Null
        setChooseId(null);
        // Move Page if end question 
        
        if (chooseQuestion === questions[chooseQuestion].length - 1) {
            // Exit tai day
            history.push('/result')
            return;
        }
        
        // Increase Question
        setChooseQuestion(chooseQuestion + 1);
    }
    
    useEffect(() => {
        handleFetchQuestion()
    }, [])
    console.log(chooseQuestion,questions)
    const question = questions[chooseQuestion];
    console.log(answer);
    return(
        <div>
            {
                isLoading ? <Loading></Loading> :
                <>
                    <Header></Header>
                    <QuizForm 
                    
                    handleChooseQuestion = {handleChooseQuestion} 
                    chooseQuestion= {chooseQuestion}
                    question={question}></QuizForm>
                    <Footer/>
                </>
            }
        </div>
    )
}