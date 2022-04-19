import React, { useEffect, useState } from "react";
import { getApiClient } from "../../client/api";
import Footer from "../Footer";
import Header from "../Header";
import Loading from "../Loading";
import QuizForm from "../QuizForm";
export default function QuizPage({ history, match }) {
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

  const handleConfirmChoice = async (choiceIndex) => {
    if (choiceIndex == null) {
      alert("Bạn nên chọn đáp án trước");
      return;
    }
    generalChoices.push(choiceIndex);

    // current question is the last question
    // if (
    //   chooseQuestion === questions.length - 1 &&
    //   questions[chooseQuestion].type === "Switch"
    // ) {
    //   setLoading(true);
    //   // choose anything but "Không"
    //   if (chooseId < 2) {
    //     const response = await getApiClient().getGeneralQuestions(
    //       fetchObject[chooseId]
    //     );
    //     if (response.status === 200) {
    //       setQuestions([
    //         ...questions,
    //         ...response.data.sort((a, b) => a.id - b.id),
    //       ]);
    //     }
    //   }
    //   if (chooseId == 2) {
    //     const resEmo = await getApiClient().getGeneralQuestions(fetchObject[0]);
    //     const resSex = await getApiClient().getGeneralQuestions(fetchObject[1]);
    //     if (resEmo.status === 200 && resSex.status === 200) {
    //       setQuestions([
    //         ...questions,
    //         ...resEmo.data.sort((a, b) => a.id - b.id),
    //         ...resSex.data.sort((a, b) => a.id - b.id),
    //       ]);
    //     }
    //   }
    //   // reset off set;
    //   setOffset(0);
    //   setLoading(false);
    //   setQuestions((questions) =>
    //     questions.filter((el) => el.type !== "Switch")
    //   );
    //   if (chooseId == 3) {
    //     // exit tai day
    //     console.log("answer general: " + answerGeneral);

    //     let answerID = convertToDecimal(answerGeneral);
    //     setAnswerID(answerID);
    //     // let choice = convertToDecimal(answerGeneral);
    //     history.push({
    //       pathname: "/result",
    //       state: {
    //         choiceID: answerID,
    //         answerType: answerType,
    //       },
    //     });
    //   }
    //   return;
    // }

    // let trueIdx = parseInt(chooseId) + offset;
    // // check type question is specific;
    // // Set index answer +1
    // // update State Answer
    // if (questions[chooseQuestion].type.includes("specific")) {
    //   let newAnswerSpecific = [...answerSpecific];
    //   newAnswerSpecific[trueIdx] = 1;
    //   setAnswerSpecific((_) => [...newAnswerSpecific]);
    // } else {
    //   let newAnswerGeneral = [...answerGeneral];
    //   newAnswerGeneral[trueIdx] = 1;
    //   setAnswerGeneral((_) => [...newAnswerGeneral]);
    // }
    // // update offset
    // setOffset(
    //   (prevState) => questions[chooseQuestion].choices.length + prevState
    // );
    // // Set Choose Id to Null
    // setChooseId(null);
    // // Move Page if end question

    // if (chooseQuestion === questions.length - 1) {
    //   //fix loi phan end result
    //   // Exit tai day
    //   let answerID = convertToDecimal(answerSpecific);
    //   setAnswerID(answerID);
    //   // console.log(answerSpecific);
    //   // console.log( convertToDecimal(answerSpecific))
    //   // let choice = convertToDecimal(answerSpecific);
    //   let answerType = "specific";
    //   setAnswerType(answerType);
    //   history.push({
    //     pathname: "/result",
    //     state: {
    //       // answerGeneral: convertToDecimal(answerGeneral),
    //       choiceID: answerID,
    //       answerType: answerType,
    //     },
    //   });
    //   return;
    // }
  };

  useEffect(() => {
    handleFetchQuestion();
  }, []);

  const handleUpdateChoices = (choices) => {};
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
