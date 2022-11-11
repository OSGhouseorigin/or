import React from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhone, FaFax, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
// FaBehance,

const OffcanvasMenu = ({offcanvasShow, offcanvasHide}) => {
    return (
        <Offcanvas show={offcanvasShow} onHide={offcanvasHide} placement="end" className="header-offcanvasmenu">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                <form action="#" className="side-nav-search-form">
                    <div className="form-group">
                        <input type="text" className="search-field" name="search-field" placeholder="Search..." />
                        <button className="side-nav-search-btn"><i className="fas fa-search"></i></button>
                    </div>
                </form>
                <div className="row">
                    <div className="col-lg-5 col-xl-6">
                        <ul className="main-navigation list-unstyled">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.413312402841!2d78.3605696351363!3d17.439920977549356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9188eec14073%3A0xcfcf66f530883807!2sOrigin%20Softwares%20-%20Website%20Designing%20%2C%20Web%20Development%20%2C%20Software%20Development%20company%20%2C%20Digital%20Marketing%20services%20.!5e0!3m2!1sen!2sin!4v1663672926075!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            <li><Link to={process.env.PUBLIC_URL + "/digital-agency"}>Home</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/creative-agency"}>Contact Us</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/personal-portfolio"}>Services</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-7 col-xl-6">
                        <div className="contact-info-wrap">
                            <div className="contact-inner">
                                <address className="address">
                                    <span className="title">Contact Information</span>
                                    <p>Flat No : 302, 4th Floor, Cyber Residency, <br/> Gachibowli, Hyderabad-500053</p>
                                </address>
                                <address className="address">
                                    <span className="title">We're Available 24/7. Call Now.</span>
                                    <a href="tel:+91- 9614085555" className="tel"><FaPhone /> +91- 9614085555</a>
                                    <a href="tel:+91 4035720216" className="tel"><FaFax /> +91 4035720216</a>
                                    <a href="info@originsoftwares.com"><FaEnvelope />info@originsoftwares.com</a> 
                                </address>
                            </div>
                            <div className="contact-inner">
                                <h5 className="title">Find us here</h5>
                                <div className="contact-social-share">
                                    <ul className="social-share list-unstyled">
                                        <li>
                                            <a href="https://facebook.com/"><FaFacebookF /></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/"><FaTwitter /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                                        </li>
                                        <li>
                                            <a href='#'><FaMapMarkedAlt/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffcanvasMenu;
