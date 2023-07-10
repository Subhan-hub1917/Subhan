import web from './Images/Kids 03.jpg'
const Main = () => {
    return ( 
        <div className="container-fluid nav_bg  main ">
            <div className="row">
                <div className="container col-md-10">
                <div className='row'>

                    <div className="container col-lg-5 order-lg-1 order-2 mt-5 d-flex justify-content-center align-item-center flex-column ">
                        <h2>Play Interested Quiz Game</h2>
                        <h2>Initiative of <strong className="brand-name fw-400">Techsfy</strong></h2>
                        <a className='btn btn-primary fc-light rounded-pill mx-auto ms-0 animated' >Get Started</a>
                    </div>
                    <div className='col-lg-5 mx-auto order-lg-2 order-1 mt-5'>
                        <img src={web} className='image-fluid animated'/>
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Main;