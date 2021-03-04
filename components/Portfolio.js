import React, { Component } from 'react';
import Link from 'next/link'

class Porfolio extends Component {

    state = {
        onWebDesign: false,
        onPrintDesign: false,
        onWebApp: false,
        onPhotography: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onDiseño: true,
                onInformatica: true,
                onLutheria: true,
                onMuebleria: true,
                onMotociclismo: true,
            });
        }

        const diseño = event => {
            event.preventDefault();
            this.setState({
                onDiseño: true,
                onIlustracion: false,
                onInformatica: false,
                onLutheria: false,
                onMuebleria: false,
                onMotociclismo: false,
                isOpen: true,
            });
        }
        const ilustracion = event => {
            event.preventDefault();
            this.setState({
                onDiseño: false,
                onIlustracion: true,
                onInformatica: false,
                onLutheria: false,
                onMuebleria: false,
                onMotociclismo: false,
                isOpen: true,
            });
        }

        const informatica = event => {
            event.preventDefault();
            this.setState({
                onDiseño: false,
                onIlustracion: false,
                onInformatica: true,
                onLutheria: false,
                onMuebleria: false,
                onMotociclismo: false,
                isOpen: true,
            });
        }

        const lutheria = event => {
            event.preventDefault();
            this.setState({
                onDiseño: false,
                onIlustracion: false,
                onInformatica: false,
                onLutheria: true,
                onMuebleria: false,
                onMotociclismo: false,
                isOpen: true,
            });
        }

        const muebleria = event => {
            event.preventDefault();
            this.setState({
                onDiseño: false,
                onIlustracion: false,
                onInformatica: false,
                onLutheria: false,
                onMuebleria: true,
                onMotociclismo: false,
                isOpen: true,
            });
        }

        const motociclismo = event => {
            event.preventDefault();
            this.setState({
                onDiseño: false,
                onIlustracion: false,
                onInformatica: false,
                onLutheria: false,
                onMuebleria: false,
                onMotociclismo: true,
                isOpen: true,
            });
        }


        return (
            <section id="protfolio" className="gallery-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <div className="section-title">
                                    <span>Aquí muestro una selección de los</span>
                                    <h2>Trabajos que he hecho</h2>
                                </div>
                                <ul>
                                    <li><button data-filter="*"  className="current" onClick={allElement}>Todos</button></li>
                                    <li><button data-filter=".Diseño"  onClick={diseño}>Diseño</button></li>
                                    <li><button data-filter=".Ilustracion"  onClick={ilustracion}>Ilustración</button></li>
                                    <li><button data-filter=".Informatica"  onClick={informatica}>Informática</button></li>
                                    <li><button data-filter=".Lutheria"  onClick={lutheria}>Luthería</button></li>
                                    <li><button data-filter=".Muebleria"  onClick={muebleria}>Mueblería</button></li>
                                    <li><button data-filter=".Motociclismo"  onClick={motociclismo}>Motociclismo</button></li>
                                    

                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">
                              
                                <div className={this.state.onInformatica ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/fb500.png' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://youtu.be/U33DgwwjmNY" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onDiseño ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/FB-500.png' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/30086341/Water-treatment-plant" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onDiseño ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/H002.png' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/74146955/Helicoptero-3d" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onDiseño ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/nema17-1.png' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/62559171/Stepper-Nema-17" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onDiseño ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/MaagGearPPU.png' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/62558407/Maag-Gear-PPU" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onInformatica ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/D1.png' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/114760503/Diagrama-Data-Centre" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onMuebleria ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/mueble-1.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/114747279/Mesita-y-Sillas-Rusticas" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            
                              
                                <div className={this.state.onMuebleria ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/mueble-2.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/114747525/Mesa-de-Centro-Robusta" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onMuebleria ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/cuna-1.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/114753591/Cuna-Colecho-Princesa" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onLutheria ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/lutheria-1.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/114760069/Prototipos-Lutheria" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onDiseño ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/CajaAcrilico.png' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/114761735/Corte-Laser-de-Prototipos" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                              
                                <div className={this.state.onMotociclismo ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/moto-1.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/114748953/Bicimoto-Chopper-001" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onDiseño ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/cianware.png' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/114755901/Branding-CIANWARE-Design-Software" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onDiseño ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/EMEX_2.0.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/62559595/Branding-EMEX-Control-de-Plagas" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onDiseño ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/ZC LOGO 01.png' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/62559385/Branding-ZENCAR-Tratamiento-de-Aguas" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onIlustracion? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/BornToGrrrr.png' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/62719857/Born-to-Grrrjjj" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onIlustracion? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/SUMI-E-Felines.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/31790553/SUMI-E-Felines" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onIlustracion? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/INK-Water-01.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/30087019/INK-Water-01" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onIlustracion? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/RATROD.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/30087289/Rat-Rod-01" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onIlustracion? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/Watercolor.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/30087113/Watercolor-Charcoal-pencil" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onInformatica? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/casa.png' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://arquitectura.cianware.com/" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className={this.state.onDiseño ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/Personajes3D.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="https://www.behance.net/gallery/30087205/3d-models-01" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>




                            {/* <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">
                              
                                <div className={this.state.onMuebleria ? "grid active" : "grid"
                                    /* && this.state.onWebApp ? "grid active" : "grid" 
                                    /* && this.state.onPhotography ? "grid active" : "grid" 
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/mueble-2.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="/" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="white_svg svg_white">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
            </section>
        );
    }
}

export default Porfolio;