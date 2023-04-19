import { useQuizz } from "./redux/quizz";
import ListItem from "./listItem";


const QuestionsList = () => {

const quizzes = useQuizz();

    return (
      <div className="flex flex-col border border-gray-500 bg-blue-400 rounded-lg p-4 h-full">
        <h2 className="text-xl font-semibold bg-blue-700 text-white pl-6 pr-6 rounded-xl py-2">Questions</h2>
        <ul className="flex flex-col overflow-y-auto p-4 text-lg text-white">
          {quizzes.questions.map((question, index) => {
            return (
              <ListItem key={question.id} question={question} index={index} />
            );
          })}
        </ul>
      </div>
    );
}
 
export default QuestionsList;