import EmptyFields from "./emptyFields";

const DeleteQuestion = (state, payload) => {

   let fields;
   let select;

   if (state.selectedQuestion === payload) {
     fields = { ...EmptyFields };
     select = null;
   } else {
     fields = { ...state.inputFields };
     select = state.selectedQuestion;
   }


    return {
      ...state,
      questions: state.questions.filter((question) => {
        if (question.id !== payload) {
          return true;
        } else {
          return false;
        }
      }),
      inputFields: fields,
      selectedQuestion: select,
    };
}
 
export default DeleteQuestion;