import { answerQuestion } from "./redux/quizz";

const AnswerItem = (props) => {

const { text, index} = props;

    return (
      <li>
        <button             
          onClick={() => {answerQuestion(index);}} 
          className={"flex gap-4 border border-gray-400 bg-white py-2 px-5 text-black hover:text-white hover:bg-blue-700 text-2xl rounded-xl w-full"}>
          <div>{index + 1}.</div>
          <div>{text}</div>
        </button>
      </li>
    );
}
 
export default AnswerItem;