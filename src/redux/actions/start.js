const Start = (state) => {


  return {
    ...state,
    currentQuestion: 0,
    score: 0,
    showResult: false,
    quizStart: true,
  };
}
 
export default Start;



