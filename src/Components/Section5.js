import { useContext } from "react";
import { MyContext } from "../MyContext";

const Section5 = () => {
    
  const {blur}=useContext(MyContext)
    return (    
        <section className={`p-5 ${blur ? 'blur':''}`}>
            <h1 className="text-center fw-bolder">Skills</h1>
            <div className="container justify-content-between align-items-center">
                <div className='row g-5'>
                <div className='col-md zoom'>
                    <div className='card bg-dark text-white'>
                       <h1 className="text-center"><i className="bi bi-skill"></i></h1>
                        <div className='card-body text-center'>
                            <h1 className='card-title'><span className='text-warning'>React js</span></h1>
                            <p>I am an expert in using React.js to build user interfaces and Json Animations.</p>
                            
                            </div>

                    </div>
                </div>
                <div className='col-md zoom'>
                <div className='card bg-dark text-white'>
                       <h1 className="text-center"><i className="bi bi-skill"></i></h1>
                        <div className='card-body text-center'>
                            <h1 className='card-title'><span className='text-warning'>Firebase</span></h1>
                            <p>I am proficient in using Firebase to build real-time applications.</p>
                            
                            </div>

                    </div>
                </div>
                <div className='col-md zoom'>
                <div className='card bg-dark text-white'>
                       <h1 className="text-center"><i className="bi bi-skill"></i></h1>
                        <div className='card-body text-center'>
                            <h1 className='card-title'><span className='text-warning'>Node js</span></h1>
                            <p>I am proficient in using Node.js to build web applications, APIs, and microservices.</p>
                            
                            </div>
                    </div>
                </div>

                </div>
            </div> 
        </section>
     );
}
 
export default Section5;