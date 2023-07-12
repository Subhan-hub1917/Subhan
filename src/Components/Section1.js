import 'bootstrap/dist/css/bootstrap.css'
import web from './Images/7SCW.gif'
import { MyContext } from '../MyContext';
import { useContext } from 'react';
const Section1 = () => {
    
  const {blur}=useContext(MyContext)
    return ( 
            
            <section className={`text-center bg-light p-5 text-dark text-center text-sm-start ${blur ? 'blur':''}`}>
                <div className='container'>
                    <div className='d-md-flex align-items-center justify-content-between text-center text-lg-start'>
                        <div className=''>
                            <h1>Who is <span className='text-warning'>Subhan?</span></h1>
                            <p className='text-bold my-4'>Hello, my name is Subhan, and I am a dedicated student currently pursuing a Bachelor's degree in Computer Science (BSCS) in Sargodha. With a passion for technology and a strong foundation in computer science principles, I am equipped with a diverse range of skills essential to this field. Through my studies, I have gained proficiency in various programming languages, software development, data structures, algorithms, and other key areas of computer science. I am constantly seeking opportunities to expand my knowledge and stay up-to-date with the latest advancements in technology. With a solid educational background and a commitment to continuous learning, I am excited to contribute to the ever-evolving world of technology and make a positive impact in the field of computer science.
                            </p>
                            {/* <button className='btn btn-warning btn-lg'>Explore Eduvert</button> */}
                            </div>
                        <img className='text-center img-fluid w-50 animated' src={web}/>
                    </div>
                </div>
            </section>

     );
}
export default Section1;