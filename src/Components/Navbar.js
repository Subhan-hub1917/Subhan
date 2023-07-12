import { useContext } from 'react';
import Sidebar from './Sidebar'
import 'bootstrap/dist/css/bootstrap.css'
import { MyContext } from '../MyContext';
const Navbar = () => {
    const handleSkill = () => {
        window.scrollTo( 1700,1700);
      };
      const handleEdu = () => {
        window.scrollTo(990, 990);
      };
      
    return ( 
            
            <nav className={`navbar navbar-expand bg-dark navbar-dark text-light fixed-top border-bottom border-warning `}>
                <div className='container'>
                        <a className="text-decoration-none h3" href="#">Sub<span className='text-warning'>Han</span></a>
    
                        <div className="align-items-center justify-content-center ">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-warning " href="#" onClick={handleSkill}>Skills</a>
                                </li>
                                <li className="nav-item text-warning">
                                    <a className="nav-link text-warning ms-2" href="#" onClick={handleEdu}>Education</a>
                                </li>
                            <Sidebar/>
                            </ul>
                    </div>
                </div>
            </nav>

     );
}
 
export default Navbar;
