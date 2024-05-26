//import pizza from './pizza.avif'
import './Page1.css';
import logo from './logo.avif';
import './components/browse/Browse';
//import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
function Page1() {


    const openNav = () => { document.getElementById('mySidenav').style.width = "250px" }

    const closeNav = () => { document.getElementById('mySidenav').style.width = "0" }

    //const navigate = useNavigate();

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-warning text-dark">
                <div className="container-fluid">

                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn " onClick={closeNav}>&times;</a>
                        <ul>
                            <li>Pizza</li>
                            <li>Burger</li>
                            <li>Chinese</li>
                            <li>Biryani</li>
                        </ul>
                        
                    </div>
                    <img src={logo} className='navbar-brand logo' alt='logo'></img>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" >
                                
                                <button onClick={openNav} className='nav-link'>Orders</button>
                            </li>
                            <li className="nav-item" >
                                <Link className=' nav-link' to='/browse' >Add Orders
                                </Link>
                            </li>
                            
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" id="search" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>




            {/* <div className="containerPage1">
                <img src={pizza} alt='pizza' className='pizza'></img>
            </div> */}
        </>
    )
}
export default Page1;