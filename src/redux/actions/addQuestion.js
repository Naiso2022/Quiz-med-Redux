import EmptyFields from "./emptyFields";

const AddQuestion = (state) => {

    const question = {
        question: state.inputFields.question,
        alt: state.inputFields.alt,
        correctAnswer: parseInt(state.inputFields.correctAnswer),
        id: `q${state.questions.length}-${Date.now()}`,
    };

    return {

              ...state,
        questions: [
            ...state.questions,
            question
        ],
        selectedQuestion: null,
        inputFields: EmptyFields,

    };
}
 
export default AddQuestion;