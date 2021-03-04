import React, { Component } from 'react';
import Link from 'next/link'

class About extends Component {
    render() {
        return (
            <div id="about" className="about-area">
                <div className="borderd"></div>
                <div className="container">
                    <div className="about-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-img">
                                    <img src='Images/about.png' alt="Daniel Vega Caro"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <h2>Daniel Vega</h2>
                                    <p>Me considero una persona muy
                                        creativa, siempre he alimentado el
                                        anhelo de crear productos
                                        innovadores, lo que me ha impulsado
                                        a estudiar de forma tenaz una gran
                                        cantidad de softwares, técnicas
                                        gráficas, lenguajes informáticos y técnicas constructivas del taller de máquinas.</p>
                                    <p className='mt-20'>He ocupado gran parte de mi tiempo
                                        vital cultivando, observando e
                                        investigando la forma de llegar a
                                        concretar una visión híbrida, entre
                                        arte y tecnología, que me permita
                                        desarrollar un trabajo vanguardista. </p>
                                    {/* <a href="#" className="template-btn">Descargar CV</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white_svg svg_white">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
            </div>
        );
    }
}

export default About;