import React, { Component } from 'react';

class Service extends Component {
    render () {
        return (
            <div id="service" className="service-area section-padding">
                <div className="borderd"></div>
                <div className="container">
                    <div className="col-l2">
                        <div className="section-title section-title2 text-center">
                            <span>Cultivo una gran variedad de disciplinas, estos son:</span>
                            <h2>Mis Servicios Profesionales</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="service-section">
                                <div className="services-wrapper">
                                    <div className="services-icon-wrapper">
                                        <div className="service-dot">
                                            <div className="dots"></div>
                                        </div>
                                        <i><img src='Images/service/1.png' alt=""/></i>
                                    </div>
                                    <div className="service-content">
                                        <h2>Diseño</h2>
                                        <p> He incusionado desde muy temprana edad en el diseño gráfico,
                                            a través del dibujo, modelado 3D, branding, corte laser,
                                            el diseño de productos y Diseño Ui/Ux.
                                            <br /> Domino una gran cantidad de software para este propósito:
                                            <br /> Suite Adobe: Photoshop - Illustrator - XD.
                                            <br /> Modelado 3D: Blender 3D - 3ds max - Unreal Engine - Unity Engine.
                                            <br /> Software Libre: Inkscape - Gimp.
                                            <br /> Arquitectura: Autocad.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="service-section">
                                <div className="services-wrapper">
                                    <div className="services-icon-wrapper">
                                        <div className="service-dot">
                                            <div className="dots"></div>
                                        </div>
                                        <i><img src='Images/service/2.png' alt=""/></i>
                                    </div>
                                    <div className="service-content">
                                        <h2>Informática</h2>
                                        <p> Soy titulado de la carrera de Analista Programador,
                                            me especializo en dos áreas en particular: Desarrollo Web y Realidad Virtual.
                                            <br />Manejo los lenguajes HTML, CSS, JS, C# y C++.
                                            <br />En bases de datos SQL he trabajado con MySQL, SQL Server y Oracle DB.
                                            <br />Trabajo sobre sistemas operativos Linux y Windows.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="service-section">
                                <div className="services-wrapper">
                                    <div className="services-icon-wrapper">
                                        <div className="service-dot">
                                            <div className="dots"></div>
                                        </div>
                                        <i><img src='Images/service/electric-guitar.svg' alt="" /></i>
                                    </div>
                                    <div className="service-content">
                                        <h2>Maderas</h2>
                                        <p>Soy además un mueblista amateur y aprendiz profesional de Luthería.
                                            <br /> He trabajado como reparador y restaurador especialista en maderas y metal, 
                                            en 2 talleres de Luthería de gran prestigio en
                                            Santiago de Chile, donde he podido conocer muchísimas técnicas 
                                            estándar y especiales sobre la construcción de instrumentos musicales
                                            andinos, rock, blues y jazz, sobre todo guitarras, bajos y charangos.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white_svg">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Service;