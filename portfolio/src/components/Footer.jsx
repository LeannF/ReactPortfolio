import '../components/css/Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="footer bg-dark text-white p-4">
            <div className="container">
                <div className="row">
                    <section id="" className="col-md-4 p-2 ">
                        <h2>Léann Farant</h2>
                        <address className="p-1">
                            <p className="my-0 py-1">13006 Marseille, France</p>
                            <Link className="py-1" to="tel:0631500847">06 31 50 08 47</Link><br />
                            <Link className="py-1" to="mailto:leann.farant@outlook.fr">leann.farant@outlook.fr</Link>
                        </address>

                        <section id="social" className="py-2">
                            <Link className="px-2" to="https://github.com/LeannF" target="_blank" rel="noreferrer">
                                <img src='/img/icon/github.png' alt="" />
                            </Link>
                            <Link className="px-2" to="https://www.linkedin.com/in/l%C3%A9ann-farant-526232224/" target="_blank"  rel="noreferrer">
                                <img src='/img/icon/linkedin.png' alt="" />
                            </Link>
                            <Link className="px-2" to="https://www.instagram.com/lele97281/#" target="_blank"  rel="noreferrer">
                                <img src='/img/icon/instagram.png' alt="" />
                            </Link>
                        </section>
                    </section>
                    <section id="pages" className="col-md-4 p-2">
                        <h2>Liens utiles</h2>
                        <div className="container">
                            <ul>
                                <li className="py-1 mx-0 px-0">
                                    <Link to="/"  aria-current="page">Accueil</Link>
                                </li>
                                <li className="py-1">
                                    <Link to="/services"  >Services</Link>
                                </li>
                                <li className="py-1">
                                    <Link to="/projects" >Portfolio</Link>
                                </li>
                                <li className="py-1">
                                    <Link to="/contact" >Me contacter</Link>
                                </li>
                                <li className="py-1">
                                    <Link to="/legal" >Mentions Légales</Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section id="projects" className="projects col-md-4 p-2">
                        <h2>Mes dernières réalisations</h2>
                        <div className="container">
                            <ul>
                                <li className="py-1">
                                    <Link to="/projects" >Site e-commerce</Link>
                                </li>
                                <li className="py-1">
                                    <Link to="/projects"  >Site vitrine</Link>
                                </li>
                                <li className="py-1">
                                    <Link to="/projects" >Portfolio</Link>
                                </li>
                                <li className="py-1">
                                    <Link to="/projects" >Ennisia</Link>
                                </li>
                                <li className="py-1">
                                    <Link to="/projects" >CV</Link>
                                </li>
                            </ul>  
                        </div>                
                    </section>
                </div>
            </div>
        </footer>
    )
}

export default Footer;