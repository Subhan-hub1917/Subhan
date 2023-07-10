import 'bootstrap/dist/css/bootstrap.css'
import web from './Images/7SCW.gif'
const Section1 = () => {
    return ( 
            
            <section className='text-center bg-light p-5 text-dark text-center text-sm-start'>
                <div className='container'>
                    <div className='d-md-flex align-items-center justify-content-between'>
                        <div className=''>
                            <h1>Brought To You By <span className='text-warning'>Techsfy</span></h1>
                            <p className='lead my-4'>In 1932 appeared two books by Englishmen of life-long Indian experience, both refuting the arguments of those who 
                            pleaded for the existence and future of an Indian nationalism. Sir Reginald Craddock asked that if Norway and Sweden chow caound
                            hope of natural and healthy growth in their recognition.
                            </p>
                            <button className='btn btn-warning btn-lg'>Explore Eduvert</button>
                            </div>
                        <img className='img-fluid w-50 d-none d-md-block image animated' src={web}/>
                    </div>
                </div>
            </section>

     );
}
export default Section1;