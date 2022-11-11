import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram,} from "react-icons/fa";
// FaEnvelopeOpen, FaPinterestP,FaVimeoV, FaDribbble, FaBehance, 
import ServiceData from "../../data/service/ServiceMain.json";
import Logo from '../../elements/logo/Logo';
//import { slugify } from '../../utils';

 // eslint-disable-next-line
const getServiceData = ServiceData;

const FooterOne = ({parentClass}) => {
    
    return (
        <footer className={`footer-area ${parentClass}`}>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-social-link">
                        <ul className="list-unstyled">
                        <li class="social-icons-facebook"><a href="https://www.facebook.com/originsoftwares1/" title="Facebook"><FaFacebookF /></a></li>
                        <li class="social-icons-twitter"><a href="https://twitter.com/originsoftware1" title="Twitter"><FaTwitter /></a></li>
                        <li class="social-icons-linkedin"><a href="https://www.linkedin.com/company/originsoftwares/" title="Linkedin"><FaLinkedin /></a></li>
                        <li class="social-icons-instagram"><a href="https://www.instagram.com/originsoftwares/" title="Instagram"><FaInstagram /></a></li>
                            {/* <li><Link to="https://www.facebook.com/originsoftwares1/"><FaFacebookF /></Link></li>
                            <li><Link to="https://twitter.com/originsoftware1"><FaTwitter /></Link></li>
                            <li><Link to="https://www.linkedin.com/company/originsoftwares/"><FaLinkedin /></Link></li>
                            <li><Link to="https://www.instagram.com/originsoftwares/"><FaInstagram /></Link></li> */}
                            {/* <li><Link to="https://www.pinterest.com/"><FaPinterestP /></Link></li>
                            <li><Link to="https://vimeo.com/"><FaVimeoV /></Link></li>
                            <li><Link to="https://dribbble.com/"><FaDribbble /></Link></li>
                            <li><Link to="https://www.behance.net/"><FaBehance /></Link></li> */}
                        </ul>
                    </div>
                </div>
                <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="footer-widget border-end">
                                <div className="footer-newsletter">

                                <Logo limage="/images/logo-4.png"
                                
                                />
                                    
                                    <br></br><br></br>

                                    {/* <h2 className="title">Contact Us</h2>
                                    <h6 className="widget-title">Address :</h6> */}
                                    <p>Flat No : 302, 3rd Floor,<br></br>
                                       Cyber Residency,<br></br>
                                       Gachibowli, Hyderabad-500053<br></br>
                                       Ph no : <a href="tel: +91- 9614085555">+91- 9614085555</a><br></br>
                                       Email : <a href="mailto: info@originsoftwares.com">info@originsoftwares.com</a></p>  
                                    {/* <form>
                                        <div className="input-group">
                                            <span className="mail-icon"><FaEnvelopeOpen /> </span>
                                            <input type="email" className="form-control" placeholder="Email address" />
                                            <button className="subscribe-btn" type="submit">Subscribe</button>
                                        </div>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-6">
                            <div className="row">

                            <div className="col-sm-5">
                                    <div className="footer-widget">
                                    <h6 className="widget-title">Services</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/WebsiteDevelopment"}>Website Development</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/EcommerceDevelopment"}>Ecommerce Development</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/MobileApps"}>Mobile Apps</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/CorporateBranding"}>Corporate Branding</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/DigitalMarketing"}>Digital Marketing</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="footer-widget">
                                    <h6 className="widget-title">Resourses</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Terms &amp; Conditions</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/case-study"}>Career</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Partnerships</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Get a Quote</Link></li>
                                            </ul>
                                        </div>
                                        {/* <h6 className="widget-title">Services</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                {getServiceData.slice(0, 6).map((data, index) => (
                                                    <li key={index}>
                                                        <Link to={process.env.PUBLIC_URL + `/service-details/${slugify(data.title)}`}>{data.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>

                                

                                    {/* <div className="col-sm-4">
                                    <div className="footer-widget">
                                <h6 className="widget-title">Services</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                {getServiceData.slice(0, 6).map((data, index) => (
                                                    <li key={index}>
                                                        <Link to={process.env.PUBLIC_URL + `/service-details/${slugify(data.title)}`}>{data.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        </div>
                                        </div> */}


                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                    <h6 className="widget-title">Support</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Refund &amp; Cancellation Policy</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>FAQ's</Link></li>
                                            </ul>
                                        </div>
                                        {/* <h6 className="widget-title">Resourses</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>Terms &amp; Conditions</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/case-study"}>Career</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Partnerships</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Get a Quote</Link></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        {/* <h6 className="widget-title">Support</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Refund &amp; Cancellation Policy</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Shipping &amp; Delievery Policy</Link></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"> 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://originsoftwares.com/">Origin Softwares</a>.</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-bottom-link">
                                <ul className="list-unstyled">
                                    <li><Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Terms of Use</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterOne;