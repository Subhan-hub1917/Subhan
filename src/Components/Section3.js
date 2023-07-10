import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useContext } from 'react';
import { MyContext } from '../MyContext';
// import web from './Images/7SCW.gif'
const Section3 = () => {
    const {handleQuiz}=useContext(MyContext)
    return ( 
            
            <section className='bg-light p-5' >
                <div className='container text-center'>
                    <h1>Quizes</h1>
                    <p>w eckjwkwe ckwe ckewckew kcew ewkcj ewkjc ewkc</p>
                    <div className='row justify-content-between align-items-center g-4'>
                        <div className='col-md text-center'>
                            <div onClick={handleQuiz} className='cursor-pointer card bg-dark text-light zoom'>
                                <div className='h1 text-warning'>
                                    <i className='bi bi-flag'></i>
                                </div>
                                <div className='card-body'>
                                    <h1 className='text-warning'>Guess The Countries Flag</h1>
                                    <p className='lead'>loremiew iw ijwe ic weicj ewicj ewjc wejic iwe ciwe jcjiwje cijjewe wje ciew ci </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md text-center'>
                        <div className='card bg-dark text-light zoom'>
                            <div className='h1 text-warning'>
                                <i className='bi bi-map'></i>
                            </div> 
                                <div className='card-body '>
                                    <h1 className='text-warning '>Guess The Capitals</h1>
                                    <p className='lead'>loremiew iw ijwe ic weicj ewicj ewjc wejic iwe ciwe jcjiwje cijjewe wje ciew ci </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md text-center'>
                        <div className='card bg-dark text-light zoom'>
                            <div className='h1 text-warning'>
                                <i className='bi bi-people'></i>
                            </div> 
                            <div className='card-body'>
                                    <h1 className=' text-warning '>Guess The Personalities</h1>
                                    <p className='lead'>loremiew iw ijwe ic weicj ewicj ewjc wejic iwe ciwe jcjiwje cijjewe wje ciew ci </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>

     );
}
export default Section3;