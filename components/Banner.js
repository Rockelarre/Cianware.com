

const Scrollbar = () => {

    return(
        <section id="home" className="hero hero-slider-wrapper hero-style-1">
            <div className="hero-slider">
                <div className="slide">
                    <div className="slider-image">
                       <img src="Images/cianware3.svg" alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col col-md-8 col-sm-12 slide-caption">
                                <div className="slide-subtitle">
                                    <h4>Soy un hábil, riguroso e inventivo</h4>
                                </div>
                                <div className="slide-title">
                                    <h2>Diseñador Multipropósito</h2>
                                </div>
                                <div className="btns">
                                    <a href="#contact" className="template-btn go-contact-area">Contácteme</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy"><p>Diseñador y Analista Programador</p></div>
            <div className="social-links">
                <ul>
                    <li><a href="https://www.facebook.com/LEOGRISES"><i className="fa fa-facebook"></i></a></li>
                    {/* <li><a href="#"><i className="fa fa-twitter"></i></a></li> */}
                    <li><a href="https://www.linkedin.com/in/leogris/"><i className="fa fa-linkedin"></i></a></li>
                    {/* <li><a href="#"><i className="fa fa-pinterest"></i></a></li> */}
                 </ul>
            </div>
            <div className="white_svg">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
        </section>
        
    )
}

export default Scrollbar;
