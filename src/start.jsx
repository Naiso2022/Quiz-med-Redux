import { start } from "./redux/quizz";

const Start = () => {


    return (
      <div className="flex flex-col items-center">
        <h1 className="text-red-700 text-7xl mt-10">Welcome!</h1>
        <button
          className="bg-blue-800 text-white px-10 py-3 rounded-lg mt-10 text-3xl mb-10"
          onClick={start}>
          Start Quizz
        </button>
      </div>
    );
}
 
export default Start;