import { Link } from "react-router-dom";

const Projects = () => {
    return(
        <main className="projects">
            <section className="text-center mt-4">
                <h1 className="fw-bold">Portfolio</h1>
                <p>Voici quelques une de mes réalisations</p>
                <div id="split" className="container"></div>
            </section>

            <section className="container">
                <div className="row text-center mb-4">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src="/img/portfolio/DBHAccueil.png" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h2 className="card-title">DBH site</h2>
                                <p className="card-text">Site e-commerce du jeu Detroit Become Human</p>
                                <Link to="https://github.com/LeannF">
                                    <button className="btn btn-primary">Voir le site</button>
                                </Link>                     
                            </div>                       
                            <div className="card-footer p-2">
                                <p>Site réalisé avec React, Bootstrap et strapi</p>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src="/img/portfolio/TheLastOfUs.png" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h2 className="card-title">TLoU site</h2>
                                <p className="card-text">Site vitrine du jeu The Last of US</p>
                                <Link to="https://github.com/LeannF">
                                    <button className="btn btn-primary">Voir le site</button>
                                </Link>                     
                            </div>                      
                            <div className="card-footer p-2">
                                <p>Site réalisé avec HTML</p>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src="/img/portfolio/portfolio.png" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h2 className="card-title">Portfolio</h2>
                                <p className="card-text">Exercice de site portfolio</p>
                                <Link to="https://github.com/LeannF">
                                    <button className="btn btn-primary">Voir le site</button>
                                </Link>                     
                            </div>
                            <div className="card-footer p-2">
                                <p>Site réalisé avec HTML, PHP</p>
                            </div>
                        </div>
                    </div>                
                </div>
                
                <div className="row text-center mb-4">

                    <div className="col-md-4 mb-4">
                        <div className="card ">
                            <img src="/img/portfolio/maquette.png" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h2 className="card-title">Maquette d'un site</h2>
                                <p className="card-text">Création du prototype d'un site</p>
                                <Link to="https://github.com/LeannF">
                                    <button className="btn btn-primary">Voir le site</button>
                                </Link>                     
                            </div>
                            <div className="card-footer p-2">
                                <p>Site réalisé avec figma</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src="img/portfolio/cv.png" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h2 className="card-title">Card title</h2>
                                <p className="card-text">Site contenant mon cv</p>
                                <Link to="https://github.com/LeannF">
                                    <button className="btn btn-primary">Voir le site</button>
                                </Link>                     
                            </div>
                            <div className="card-footer p-2">
                                <p>Site réalisé avec HMTL et CSS</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className="card ">
                            <img src="img/portfolio/ennisia.png" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h2 className="card-title">Card title</h2>
                                <p className="card-text">Jeu vidéo de type RPG gacha </p>
                                <Link to="https://github.com/LeannF">
                                    <button className="btn btn-primary">Voir le jeu</button>
                                </Link>                     
                            </div>
                            <div className="card-footer p-2">
                                <p>Jeu réalisé avec Unity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Projects;