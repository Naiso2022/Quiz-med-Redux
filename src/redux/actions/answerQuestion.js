const AnswerQuestion = (state, payload) => {

  let newScore = state.score;

  if (payload === state.questions[state.currentQuestion].correctAnswer) {
    newScore++;
  }

  let nextQuestion = state.currentQuestion + 1;
  let quizzOn = true;
  let results = false;

  if (nextQuestion === state.questions.length) {
    nextQuestion = 0;
    results = true;
    quizzOn = false;
  }



   return {
     ...state,
     quizzStart: quizzOn,
     score: newScore,
     showResult: results,
     currentQuestion: nextQuestion,
   };
}
 
export default AnswerQuestion;



