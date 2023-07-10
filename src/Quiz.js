 import { useContext } from "react";
import { MyContext } from "./MyContext";
import Question from './Question';

const Quiz = () => {
    const {unable,startquiz,setStartquiz,result,setResult,counter,Setcounter,handleScore,handleNext,handleRight,handleResult}=useContext(MyContext)
    return ( 

        <section className="bg-dark p-5">
            <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6 ">
                            <img src={Question[counter].questionimage} alt="Flage-Image" className="w-100 w-lg-90 img-responsive shadow-5 zom" />                  
                        </div>
                        <div className="col-lg-6 ">
                                {
                                    Question[counter].answeroption.map((ans,i)=>{
                                    return <button key={i}
                                    onClick={()=>handleRight(ans.iscorrect)} 
                                    className={`btn mt-1 mt-lg-3 btn-lg btn-outline-warning rounded-pill w-100 ${ unable!==true && ans.iscorrect? "bg-success text-light":""} `}>
                                        {ans.answertext}
                                    </button>})
                                }            
                                    <div className=" container p-2 p-lg-5">
                                        <div className="d-flex justify-content-between">
                                            <button className=" btn me-2 w-50 btn-outline-warning rounded-pill " onClick={handleResult}>Result</button>
                                            <button disabled={unable} className=" btn me-2 w-50 btn-outline-warning rounded-pill "onClick={handleNext}>Next</button>
                                        </div>
                                    </div>
                        </div>
                    </div>    
            </div>
        </section>
     );
}
 
export default Quiz;