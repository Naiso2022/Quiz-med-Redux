import { createReduxModule } from "hooks-for-redux";
import AddQuestion from "./actions/addQuestion";
import DeleteQuestion from "./actions/deleteQuestion";
import UpdateQuestion from "./actions/updateQuestion";
import Start from "./actions/start";
import AnswerQuestion from "./actions/answerQuestion";
import SetQuestion from "./actions/setQuestion";
import SetTitle from "./actions/setTitle";
import SetAlt from "./actions/setAlt";
import SetCorrect from "./actions/setCorrect";
import EmptyFields from "./actions/emptyFields";



const questionsList = {
  inputFields: EmptyFields,
  quizStart: false,
  showResult: false,
  currentQuestion: 0,
  score: 0,
  selectedQuestion: null,
  currentQuiz: 0,
  questions: [
    {
      question: "Vad heter världens bästa stavhoppare?",
      alt: ["Emmanuel Macron", "Nikola Jokic", "Armand Duplantis"],
      correctAnswer: 2,
      id: `q0-${Date.now()}`,
    },
    {
      question: "Vad dricker segraren av biltävlingen Indy 500?",
      alt: ["Apelsinjuice", "Mjölk",  "Nocco"],
      correctAnswer: 1,
      id: `q1-${Date.now()}`,
    },
    {
      question: "Hur många olympiska medaljer har Charlotte Kalla?",
      alt: [6, 9, 11],
      correctAnswer: 1,
      id: `q2-${Date.now()}`,
    },
  ],
};


export const [useQuizz, { addQuestion, updateQuestion, deleteQuestion, start, answerQuestion, setQuestion, setTitle, setAlt, setCorrect }] = createReduxModule(
  "quizes",
  questionsList,
  {
addQuestion: AddQuestion,
updateQuestion: UpdateQuestion,
deleteQuestion: DeleteQuestion ,
start: Start,
answerQuestion: AnswerQuestion,
setQuestion: SetQuestion,
setTitle: SetTitle,
setAlt: SetAlt,
setCorrect: SetCorrect,
}
);