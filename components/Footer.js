import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <a href="#">
                                <img src='Images/cianware.svg' alt="Cianware" />
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                    {/* <li><a href="#"><i className="fa fa-twitter"></i></a></li> */}
                                    {/* <li><a href="#"><i className="fa fa-dribbble"></i></a></li> */}
                                    <li><a href="https://www.facebook.com/LEOGRISES"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/leogris/"><i className="fa fa-linkedin"></i></a></li>
                                    {/* <li><a href="#"><i className="fa fa-skype"></i></a></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-sub">
                                <p><i className="fa fa-copyright"></i>Copyright <span> 2021 Cianware. Todos los Derechos Reservados, a menos que se especifíque lo contrario.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;