import { useQuizz } from "./redux/quizz";
import Result from "./result";
import Quizz from "./quizz";
import Start from "./start";

const Home = () => {
  const quizzes = useQuizz();

  const renderApp = () => {
    if (quizzes.showResult) {
      return <Result />;
    } else if (quizzes.quizStart) {
      return <Quizz />;
    } else {
      return <Start />;
    }
  };

  return (
    <div className="flex justify-center items-center h-full">{renderApp()}</div>
  );
};

export default Home;
