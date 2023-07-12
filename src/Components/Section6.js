import { useContext } from 'react';
import Animation1 from './Animation1';
import { MyContext } from '../MyContext';
// import web4 from './Images/3784896.jpg'
const Section6 = () => {
    const {blur}=useContext(MyContext)
    return (    
        <section className={`text-dark ${blur?'blur':''} `}>
            <div className="container">
                <div className='d-md-flex p-5 text-center text-lg-start justify-content-center  align-items-center'>
                    {/* <img src={web4} className='img-fluid h-50 w-50' alt=''/> */}
                    <div className='w-75 img-fluid ms-5'>
                    <Animation1/>
                    </div>
                    <div>
                        <h2>Let's <span className='text-warning'>Collaborate</span></h2>
                        <p>Let's make a Community or make a team that provide different Software Development Services to Clients.Contact Me If you wanna be a part of community.</p>
                    </div>
                </div>
            </div> 
        </section>
     );
}
 
export default Section6;