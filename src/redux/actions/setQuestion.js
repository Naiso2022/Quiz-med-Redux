const SetQuestion = (state, payload) => {


   return {
     ...state,
     inputFields: payload.inputFields,
     selectedQuestion: payload.selectedQuestion,
   };
}
 
export default SetQuestion;
