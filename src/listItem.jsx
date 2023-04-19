import { setQuestion, deleteQuestion } from "./redux/quizz";

const ListItem = (props) => {

    const {question, index} = props

    return (
      <li className="flex items-center gap-4 border-b border-gray-400 hover:bg-blue-700 hover:cursor-pointer odd:bg-gray-300/50 p-1 last:border-none">
        <div className="flex items-center gap-4 w-full" onClick={() => {
            
            setQuestion({
              inputFields: {
                question: question.question,
                alt: question.alt,
                correctAnswer: question.correctAnswer,
              },
              selectedQuestion: question.id,
            })}}>


          <div className="font-semibold">{index + 1}.</div>
          <div className="w-full">{question.question}</div>
        </div>
        <div
          className="hover:bg-red-500/80 group rounded-lg px-1 text-red-600 bg-white font-semibold hover:text-white"
          onClick={() => {
            deleteQuestion(question.id);
          }}>
        Delete</div>
      </li>
    );


}
 
export default ListItem;