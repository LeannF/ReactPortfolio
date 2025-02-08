import '../components/css/Home.css';

const Home = () => {
    return(
        <main className="home">
            <section id="intro" className="text-white text-center ">
                <h1 className="fw-bold">Bonjour, je suis Léann Farant</h1>
                <h2 className="fw-bold">Développeur web full stack</h2>
                <button className="btn bg-danger text-white mt-3" type="button" data-bs-toggle="modal" data-bs-target="#modal">En savoir plus</button>
            </section>

            <section id="pres" className="container shadow-lg p-4 my-5">
                <div className="row">
                    <div id="aboutme" className="col-md-6">
                        <h3>A propos</h3>
                        <img src="/img/john-doe-about.jpg" className="img-fluid" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend rhoncus. 
                            Duis non commodo purus, vitae varius tellus. Fusce vestibulum aliquam molestie. 
                            Quisque orci turpis, pellentesque a viverra vitae, finibus eget quam. Vivamus ultricies viverra ex. <br />
                            Nunc dignissim luctus vulputate. Nam et cursus massa, non finibus libero. 
                            Nunc sed lorem aliquam, porta eros at, feugiat odio. Morbi id auctor mauris.
                            Donec eros felis, fringilla quis lorem nec, fermentum elementum tortor.
                            In mattis ante id neque gravida, sed eleifend eros vestibulum.
                        </p>
                    </div>

                    <div id="skills" className="col-md-6">
                        <h3 id="titleBorder">Mes compétences</h3>
                        <h4>HTML 80%</h4>
                        <div className="progress mb-4" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">              
                            <div className="progress-bar bg-danger" style={{width: 80+'%'}}></div>
                        </div>

                        <h4>CSS 60%</h4>
                        <div className="progress mb-4" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-info p-4" style={{width: 60+'%'}}></div>
                        </div>

                        <h4>Javascript 25%</h4>
                        <div className="progress mb-4" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-success" style={{width: 25+'%'}}></div>
                        </div>

                        <h4>PHP 50%</h4>
                        <div className="progress mb-4" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning" style={{width: 50+'%'}}></div>
                        </div>
                        <h4>React 30%</h4>
                        <div className="progress mb-4" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-primary" style={{width: 30+'%'}}></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;