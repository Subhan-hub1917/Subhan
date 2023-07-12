import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useContext } from 'react';
import { MyContext } from '../MyContext';
// import web1 from './Images/graduation_cap.jpg';
import Animation2 from './Animation2';
// import web from './Images/7SCW.gif'
const Section3 = () => {
    const {handleQuiz,blur}=useContext(MyContext)
    return ( 
            
            <section className={`bg-dark text-light ${blur?'blur':''}`} >
                    <div className='text-center text-warning bg-dark p-2'>    
                        <h1><i className='bi bi-flag'></i></h1>
                        <h1>Guess The Countries Flag Game</h1>
                    </div>
                <div className='container text-center p-4'>
                            <div className='d-lg-flex  justify-content-center align-items-center'>
                            <div onClick={handleQuiz} className='cursor-pointer card bg-dark text-light zoom'>
                                <div  className='text-dark bg-warning rounded'>
                                    <h1>Play Game</h1>
                                    <h1><i className='h2 bi bi-play'></i></h1>
                                </div>
                            </div>
            
                            <div>
                                <Animation2/>
                            </div>
                    </div>
                </div>
                
            </section>

     );
}
export default Section3;