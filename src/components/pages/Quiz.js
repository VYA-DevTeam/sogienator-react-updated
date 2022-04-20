import React, { useEffect, useState } from "react";
import { getApiClient } from "../../client/api";
import Footer from "../Footer";
import Header from "../Header";
import Loading from "../Loading";
import QuizForm from "../QuizForm";
export default function QuizPage({ history, match }) {
  const apiClient = getApiClient();
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [generalChoices, setGeneralChoices] = useState([]);
  // useEffect(() => console.log(answerGeneral), [answerGeneral]);
  // useEffect(() => console.log(answerSpecific), [answerSpecific]);

  const handleFetchQuestion = async () => {
    const response = await getApiClient().getGeneralQuestions();
    if (response.status === 200) {
      setQuestions(response.data.sort((a, b) => a.id - b.id));
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchQuestion();
  }, []);

  const handleUpdateChoices = async (choices) => {
    let key = choices.join("");
    console.log(key);
    let getResultRes = await apiClient.getGeneralResult(key);
    if (getResultRes?.status === 200) {
      console.log("result", getResultRes);
    }
  };
  const convertToDecimal = (arr) => {
    // convert to string
    //arr = [...answerGeneral,...answerSpecific]
    let answerArr = arr.join("");
    console.log(`Mang ans o dang chuoi la ${answerArr}`);
    let answerDecimal = parseInt(answerArr, 2);
    console.log(
      `Sau khi chuyen sang he 10, mang ans tro thanh: ${answerDecimal}`
    );
    return answerDecimal;
  };
  // const user = convertToDecimal();
  return (
    <div>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <Header></Header>
          <QuizForm
            onFinish={(choices) => handleUpdateChoices(choices)}
            questions={questions}
          ></QuizForm>
          <Footer />
        </>
      )}
    </div>
  );
}
