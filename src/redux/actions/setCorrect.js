const SetCorrect = (state, payload) => {


    return {
      ...state,
      inputFields: {
        ...state.inputFields,
        correctAnswer: payload,
      },
    };
}
 
export default SetCorrect;