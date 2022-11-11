import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import SoftCons from '../component/service/SoftCons';

const SoftwareConsulting = () => {
    return (
        <>
            <SEO title='Software Consulting' />
            <main className='main-wrapper'>
                <HeaderOne />
                <div className=' section-padding-equal'>
                    <div className='container'>
                        <div className="row row-40">
                            <div className="col-lg-3">
                                <div className='sidebar-fixed'>
                                    <Accordion defaultActiveKey="1">
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
                                    </Accordion>
                                </div>
                            </div>
                            <div className="title-BC col-lg-9">
                                <h1 className='color' >Software Consulting</h1>
                                <p>
                                    <img className='img' src='../images/Software Consulting.png' alt=''></img><br></br><br></br>

                                    Origin Softwares is a software consulting company that offers expertise, and resources for software development projects. With over 9 Years of success stories across various IT needs, Origin Softwares can provide software consulting services for different software solutions and industries.<br></br><br></br>

                                    <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Request Quote</Link><br></br><br></br>

                                    <h3 className='color'>Our software consulting Service Scope</h3>

                                    <div className="row paper">
                                        <div className="col-xl-6 col-lg-5">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left">
                                                    <h4 className="title">Software check</h4>
                                                    <p>A software stack assessment is important for businesses to understand how their current software is performing and if it meets their needs.<br></br>
                                                        By conducting an assessment, businesses can plan improvements to resolve any detected flaws and inefficiencies.<br></br>
                                                        Suggested action points from the assessment may include software modernization, refactoring, or migration.<br></br>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-6">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left shadow-box mb--30">
                                                    <img className='img' src='../images/Web-Application.jpg' alt=''></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row paper">
                                        <div className="col-xl-6 col-lg-5">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left">
                                                    <img className='img' src='../images/Web-Application.jpg' alt=''></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-5">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left">
                                                    <h4 className="title">Software architecture redesign</h4>
                                                    <p>A software architecture assessment &amp; redesign is necessary when there are flaws in the architecture that are affecting performance and security or limiting scalability..<br></br>
                                                        The redesign focuses on resilience, quick changes, and optimized maintenance costs.<br></br>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row paper">
                                        <div className="col-xl-6 col-lg-5">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left">
                                                    <h4 className="title">Software modernization</h4>
                                                    <p>Software modernization can be a tricky process- you want to ensure that your software is up-to-date and using the best programming technologies, but you also don't want to disrupt any critical business operations.<br></br>
                                                        Gradually transitioning your software is one way to minimize disruptions.<br></br>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-5">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left">
                                                    <img className='img' src='../images/Web-Application.jpg' alt=''></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div><br></br>


                                    <h3 className='color'>Selection of software</h3>
                                    When it comes to selecting software, it's important to choose a vendor and pricing plan that fit your specific requirements. A software comparison summary can be helpful in pointing you in the right direction.<br></br><br></br>

                                    
                                    <div className='content-ho row'>
                                        <SoftCons colSize="col-xl-6 col-md-8" serviceStyle="" itemShow="8" />
                                    </div><br></br><br></br>

                                    {/* <div className="row">
                                        <div className="col-xl-6 col-lg-5">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left">
                                                    <h4 className="title">Software Development consulting</h4>
                                                    <p>If you need assistance developing software solutions to cover your business needs, software consulting services may be the way to go.<br></br>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-5">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left">
                                                    <h4 className="title">Software Consulting</h4>
                                                    <p>There's a lot that goes into making sure your software is compliant with industry laws and regulations. We can help you assess your software and figure out what requirements you need to license your product.<br></br>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    <Accordion defaultActiveKey="1">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>What client say about the origin software?</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    ►  “ Outstanding about everything : Support is fast and perfect : I got answers to every questions I asked. Code quality is up to date, modern, structured, clear, easy to understand. Responsive is responsive (any screen size, smartphone &amp; tablet). Design is pure and esthetic. Origin Provide updates. Thank you Origin team for all of this! Keep going!”   -Saboo Diagnostics<br></br><br></br>
                                                    ►  “ My project is totally customizable, clean with all the options you could want. The customer support is absolutely unsurpassed.” -Elite Dental Hospitals<br></br><br></br>
                                                    ►  “ Origin made my Website extremely well organised, the help and support is terrific and the options provided by the company are about the most perfect I've found - what more could you ask for? ” -Big Dry Fruits
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Why Contact the origin software consulting company?</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    ►  Technology is always changing, but our expert solution architects and software developers are experienced in a wide range of technologies and can provide software consulting services across many platforms.<br></br><br></br>
                                                    <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary">Contact Us</Link>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterOne />
            </main>
        </>
    )
}

export default SoftwareConsulting