import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getApiClient } from "../client/api";
import Header from "../components/Header";
import Loading from "../components/Loading";
import QuizForm from "../components/QuizForm";
export default function QuizPage({ history, match }) {
  const apiClient = getApiClient();
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [generalResult, setGeneralResult] = useState("");
  const handleFetchQuestion = async () => {
    const response = await getApiClient().getGeneralQuestions();
    if (response.status === 200) {
      setQuestions(response.data.sort((a, b) => a.id - b.id));
      setLoading(false);
    }
  };

  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    handleFetchQuestion();
  }, []);

  const handleFinishAndGetResult = async (choices) => {
    let key = choices.join("");
    let getResultRes = await apiClient.getGeneralResult(key);
    let newQuestion = [];
    if (getResultRes?.status === 200) {
      if (getResultRes?.data.roadmap) {
        setGeneralResult(getResultRes?.data?.result[0]);
        const newQuestion = [
          {
            question:
              "Bạn có muốn xác định rõ thêm cho xu hướng tình cảm & tình dục?",
            choices: [
              {
                value: "có",
                key: 0,
              },
              {
                value: "không",
                key: -1,
              },
            ],
          },
        ];
      } else if (getResultRes?.data?.result)
        window.open(`/result?key=${getResultRes.data.key}`);
    }
  };
  // const convertToDecimal = (arr) => {
  //   // convert to string
  //   //arr = [...answerGeneral,...answerSpecific]
  //   let answerArr = arr.join("");
  //   let answerDecimal = parseInt(answerArr, 2);
  //   return answerDecimal;
  // };
  // const user = convertToDecimal();
  return (
    <div>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <Header></Header>
          <QuizForm
            onFinish={(choices) => handleFinishAndGetResult(choices)}
            questions={questions}
            key={generalResult.value}
            generalResult={generalResult}
          ></QuizForm>
        </>
      )}
    </div>
  );
}
