import { useQuizz, start } from "./redux/quizz";

const Result = () => {

const quizzes = useQuizz();


    return (
      <div className="flex flex-col items-center justify-between border border-slate-400 bg-blue-200 rounded-lg p-8 h-3/4 w-2/3">
            <h2 className="text-3xl font-semibold ml-4 border-b border-gray-400 py-2 w-full">Final score!</h2>
            <p className="text-4xl text-center font-semibol mb-20 mt-10">Result: {quizzes.score} of {quizzes.questions.length} correct answers.</p>
            <button
                onClick={start}
                className={"border border-gray-400 bg-blue-700 py-3 px-5 text-white hover:text-blue-700  hover:bg-white hover:border-gray-500 text-4xl font-bold rounded-xl w-full"}>
                Try Again
            </button>
        </div>
      );
}
 
export default Result;