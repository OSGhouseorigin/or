import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
// import Accordion from 'react-bootstrap/Accordion';


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <li><Link to={process.env.PUBLIC_URL + "/"}>Home </Link></li>
                </li>
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/AboutUs"}>About Us<FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/AboutUs"}>How We Work</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/Team"}>Management Team</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/VisionAndMission"}>Vision &amp; Mission</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/Testimonials"}>Testimonials</Link></li>
                    </ul>

                </li>
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/Service"}>Services <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        
                        <li><Link to={process.env.PUBLIC_URL + "/SoftwareDevelopment"}>Software Development</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/UIUXDesign"}>UI/UX Design</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/WebsiteDevelopment"}>Website Development</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/EcommerceDevelopment"}>Ecommerce Development</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/MobileApps"}>Mobile Apps</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/CorporateBranding"}>Corporate Branding</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/DigitalMarketing"}>Digital Marketing</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/ITStaffing"}>IT Staffing</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">Technologies<FaAngleDown /> </Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/Java"}>Java</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/NodeJs"}>Node.JS</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/Python"}>Python</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/IOSApps"}>iOS</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/AndriodApps"}>Andriod</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/Angular"}>Angular</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/Flutter"}>Flutter</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/DotNet"}>.Net</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/Php"}>PHP</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/ReactNativeMobileApp"}>React</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/WordPress"}>Word Press</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">Industries<FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/Fashion"}>Fashion</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/Footwear"}>Footwear</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/TravelAndHospitality"}>Travel &amp; Hospitality</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/Education"}>Education</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/Healthcare"}>Healthcare</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/OilAndGas"}>Oil &amp; Gas</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/Banking"}>Banking</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/Manufacturing"}>Manufacturing</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/FinancialServices"}>Financial Services</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/Automobile"}>Automobile</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/FMCG"}>FMCG</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/Portfolio"}>Portfolio</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/CaseStudy"}>Case Studies</Link>
                </li>
                <li><Link to={process.env.PUBLIC_URL + "/Contact"}>Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;