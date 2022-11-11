import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
// import BlogGridOne from '../component/blog/BlogGridOne';
// import BlogSidebar from '../component/blog/BlogSidebar';
// import SectionTitle from '../elements/section-title/SectionTitle';


const Service = () => {
    return (
        <>
            <SEO title="Service" />
            <main className="main-wrapper">
                <HeaderOne />
                <div className="section-padding-equal">
                    <div className="container">
                        <div className="row row-40">
                            <div className="col-lg-3">
                                <div className='sidebar-fixed'>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Software Development</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <Link to={process.env.PUBLIC_URL + "/SoftwareConsulting"}>Software Consulting</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/CustomSoftwareDevelopment"}>Custom Software Development</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/SoftwareDevelopmentOutsourcing"}>Software Development Outsourcing</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/SoftwareProductDevelopment"}>Software Product Development</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/SoftwareDevelopmentAutomation"}>Software Development Automation</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/SoftwareMaintenanceAndSupport"}>Software Maintenance and support</Link>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header> UI/UX Design</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <Link to={process.env.PUBLIC_URL + "/UIDesign"}>UI Design</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/UXDesign"}>UX Design</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/ResponsiveWebDesign"}>Responsive Web Design</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/ResponsiveWebAppDesign"}>Responsive Web App Design</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/EcommerceWebsiteDesign"}>Ecommerce Website Design</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/WebsiteRedesign"}>Website Redesign</Link>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Website Development</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <Link to={process.env.PUBLIC_URL + "/WordPress"}>Wordpress</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/Magento"}>Magento</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/Php"}>PHP</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/DotNet"}>.Net</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/NodeJs"}>Node.Js</Link>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Ecommerce Development</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <Link to={process.env.PUBLIC_URL + "/WordPress"}>Wordpress</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/Magento"}>Magento</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/Php"}>PHP</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/DotNet"}>.Net</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/NodeJs"}>Node.Js</Link>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>Mobile Apps</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <Link to={process.env.PUBLIC_URL + "/AndriodApps"}>Andriod Apps</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/IOSApps"}>iOS Apps</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/ReactNativeMobileApp"}>React Native Mobile App</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/XamarinApps"}>Xamarin Apps</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/HybridApps"}>Hybrid Apps</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/MobileAppDesign"}>Mobile App Design</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/MobileEcommerceApps"}>Mobile Ecommerce Apps</Link>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header> Corporate Branding</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <Link to={process.env.PUBLIC_URL + "/LogoDesign"}>Logo Design</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/Brochure"}>Brochure</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/Presentation"}>Presentation</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/InformativeVideo"}>Informative Video</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/PromotionalMaterial"}>Promotional Material</Link>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>Digital Marketing</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <Link to={process.env.PUBLIC_URL + "/SEO1"}>SEO</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/SMM"}>SMM</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/PPC"}>PPC</Link>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8">
                                            <Accordion.Header>IT Staffing</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <Link to={process.env.PUBLIC_URL + "/Recruitment"}>Recruitment</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/Resources"}>Resourses</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/ContractStaffing"}>Contract Staffing</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/DirectHire"}>Direct Hire</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/ExecutiveSearch"}>Executive Search</Link><br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/OffshoreStaffing"}>Offshore Staffing</Link>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                            <div className="title-BC col-lg-9 section-padding-equal">
                                <h1>Right</h1>
                                <h5>Services</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterOne />
            </main>
        </>
    )
}

export default Service


// {/* Service Nav */}
// <nav id="onepagenav" className="service-scroll-nav navbar onepagefixed">
//     <div className="container">
//         <ul className="nav nav-pills">
//             <li className="nav-item">
//                 <a className="nav-link" href="#section1">Design</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="#section2">Development</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="#section3">Online Marketing</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="#section4">Business</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="#section5">Technology</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="#section6">Content Strategy</a>
//             </li>
//         </ul>
//     </div>
// </nav>
// </div>