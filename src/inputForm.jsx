import { useQuizz, addQuestion, updateQuestion, setAlt, setTitle, setCorrect } from "./redux/quizz";


const InputForm = () => {

    const quizzes = useQuizz();
let updateDisabled = false;

if (quizzes.selectedQuestion === null) {
    updateDisabled = true;
}

    return (  
         <div className="flex flex-col">

      <h2 className="text-center mb-10 text-xl  bg-blue-700 text-white px-10 py-2 rounded-xl mt-">Make or update questions</h2>

      <label className="text-xl">Fråga</label>
      <input type="text" className="bg-blue-200" id="inputTitle"  onChange={(e) => setTitle(e.target.value)} value={quizzes.inputFields.question} />
      
      <label className="text-xl">Svarsalternativ 1</label>
      <input type="text" className="bg-blue-200"  id="inputAlt0" onChange={(e) => setAlt({ index: 0, answer: e.target.value})} value={quizzes.inputFields.alt[0]} />
      
      <label className="text-xl">Svarsalternativ 2</label>
      <input type="text" className="bg-blue-200" id="inputAlt1" onChange={(e) => setAlt({ index: 1, answer: e.target.value})} value={quizzes.inputFields.alt[1]} />
      
      <label className="text-xl">Svarsalternativ 3</label>
      <input type="text" className="bg-blue-200" id="inputAlt2" onChange={(e) => setAlt({ index: 2, answer: e.target.value})} value={quizzes.inputFields.alt[2]} />
      
            <label className="text-xl">Rätt svar</label>
     
<select id="inputCorrect" onChange={e => setCorrect(e.target.value)} value={quizzes.inputFields.correctAnswer}>
    <option value={0}>1</option>
    <option value={1}>2</option>
    <option value={2}>3</option>
</select>

      <button onClick={addQuestion} className="mt-14 bg-blue-700 w-52 py-2 text-white rounded-xl" >Add qustion</button>
        <button onClick={updateQuestion} className="mt-14 bg-blue-700 w-52 py-2 text-white rounded-xl" >Update qustion</button>
    </div>
    );
}
 
export default InputForm;