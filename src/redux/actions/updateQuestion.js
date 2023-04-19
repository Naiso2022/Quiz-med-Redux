import EmptyFields from "./emptyFields";


const UpdateQuestion = (state) => {


   if (state.selectedQuestion === null) {
     return state;
   }

   const questions = state.questions.map((question) => {
     if (question.id === state.selectedQuestion) {
       return {
         question: state.inputFields.question,
         alt: state.inputFields.alt,
         correctAnswer: parseInt(state.inputFields.correctAnswer),
         id: state.selectedQuestion,
       };
     } else {
       return question;
     }
   });

   return {
     ...state,
     selectedQuestion: null,
     inputFields: EmptyFields,
     questions,
   };
}
 
export default UpdateQuestion;