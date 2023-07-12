import Sidebar from "./Sidebar";

const Nav = () => {
    const handleSkill = () => {
        window.scrollTo(0, 100);
      };
      const handleEdu = () => {
        window.scrollTo(0, 200);
      };
    return ( 
        <nav className="navbar bg-dark p-2">
        <div className="container">
        <div className="navbar-brand lead-1 "><span className="text-warning">EdWith</span>Tech</div>
        <div className="d-flex justify-content-center align-items-center text-warning text-center">
        <p onClick={handleSkill}>Skills</p>
        <p onClick={handleEdu}>About Info</p>
            
            {/* <button className='text-xl btn btn-lg  mb-2'><label className='bi bi-cart'></label></button> */}
            {<Sidebar/>}

        </div>
    
        </div>
        </nav>
     );
}
 
export default Nav;