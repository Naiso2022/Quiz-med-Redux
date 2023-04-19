import InputForm from "./inputForm";
import QuestionsList from "./questionsList";

const Admin = () => {
  return (
    <div>
      <div className="flex justify-around">
        <div>
          <InputForm />
        </div>
        <div>
          <QuestionsList />
        </div>
      </div>
    </div>
  );
};

export default Admin;
