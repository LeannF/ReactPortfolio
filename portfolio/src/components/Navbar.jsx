import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {   
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-dark z-2">
                <div className="container-fluid">
                    <Link to="/" aria-current="page/" className="navbar-brand mx-4" >Léann FARANT</Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-4" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link" >Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-link">Portfolio</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/legal" className="nav-link">Mentions Légales</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
} 

export default Navbar;