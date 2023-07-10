import 'bootstrap/dist/css/bootstrap.css'
const Navbar = () => {
    return ( 
            
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark text-light fixed-top">
                <div className='container'>
                        <a class="navbar-brand " href="#">Edvert<span className='text-warning'>Tech</span></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navmenu">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link " href="#">Services</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="#">About us</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="#">Contact us</a>
                                </li>    
                            </ul>
                    </div>
                </div>
            </nav>

     );
}
 
export default Navbar;
