import { useContext } from 'react'
import web1 from './Images/graduation_cap.jpg'
import { MyContext } from '../MyContext'
const Section4 = () => {
    
    const {blur}=useContext(MyContext)
    
    return (    
        <section className=' text-dark'>
            <div className="container">
                <div className={`d-md-flex text-center text-lg-start p-5 justify-content-between  align-items-center ${blur ? 'blur':''}`}>
                    <div className='text-bold'>
                        <h2>My Educational <span className='text-warning'>Journey </span></h2>
                        <p >

<p className='fw-bold'>School Life</p>
I was always a curious and inquisitive child, and I loved learning new things. I was especially interested in technology, and I would often spend hours tinkering with computers and other electronic devices.
<p className='fw-bold mt-1'>College Life</p>
I continued to pursue my passion for technology in college, and I majored in Computer Science at Reader College.
<p className='fw-bold mt-1'>University Life</p>
After  college, I enrolled in a Bachelor's program in Computer Science at the University of Sargodha.
I am excited to continue my journey in the field of computer science.
                        </p>
                    </div>
                    <img src={web1} className='img-fluid h-50 w-50 animated'alt=''/>
                </div>
            </div> 
        </section>
     );
}
 
export default Section4;