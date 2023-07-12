import { useContext } from "react";
import { MyContext } from "./MyContext";
import Question from "./Question";

const QuizResult = () => {
    const {score,correct,counter,startquiz,setStartquiz,result,setResult,Setcounter,handleScore,handleNext,handleRight,handleQuiz,handleQuit,handleContinue}=useContext(MyContext)
    return ( 
        <section className="bg-dark">
            <div className="container bg-dark text-light">
                <div className="row text-center">
                    <div className="mt-5 mb-2 p-5 ">
                        <h2 className="display-5 fw-bold">Score:<span className="text-warning">{score}</span>/{(counter+1)*5}</h2>
                        <h1 className="display-5 fw-bold">Correct Answers:<span className="text-warning">{correct}</span></h1>
                        <h3 className="display-5 fw-bold">Attempted Questions:<span className="text-warning">{counter+1}</span></h3>
                        <p className="lead">Let me know if you enjoyed it.
                        </p>
                    </div>
                        <div className="d-flex justify-content-center p-1">
                            <button onClick={handleQuit}  className=" btn me-4 btn-outline-warning rounded-pill mb-3" >Give-up</button>
                            {(counter!==Question.length-1) && <button onClick={handleContinue} className=" btn  btn-outline-warning rounded-pill mb-3">Continue-playing</button>}
                            {(counter===Question.length-1) && <button onClick={handleQuit} className=" btn  btn-outline-warning rounded-pill mb-3">Finish</button>}
                        </div>
                    </div>
            </div>
        </section>
     );
}
 
export default QuizResult;