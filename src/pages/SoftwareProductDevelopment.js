import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import SoftPro from '../component/service/SoftPro';

const SoftwareProductDevelopment = () => {
    return (
        <>
            <SEO title="Software Product Development" />
            <main className='main-wrapper'>
                <HeaderOne />
                <div className="section-padding-equal">
                    <div className="container">
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
                                <h1 className='color'>Software Product Development</h1>
                                <div>
                                    <img className='img' src='../images/Software Product Development Services.png' alt="" />
                                </div><br></br><br></br>
                                <p>
                                    Software product development helps create commercial software for business users. Origin Softwares provides outsourced software product development services to design, architect, and implement user-friendly and engaging software products.<br></br><br></br>

                                    <h4>Essential Features We Create for Market-Leading Software Products</h4>

                                    Some examples of these features could be things like:<br></br><br></br>

                                    ➔	User personalization<br></br>
                                    ➔	Minimalistic design <br></br>
                                    ➔	Data visualization <br></br>
                                    ➔	Push notifications <br></br>
                                    ➔	In-app purchases <br></br><br></br>

                                    <h4>Origin Softwares Offers</h4>
                                    <div className='row'>
                                        <SoftPro colSize="col-xl-6 col-md-8" serviceStyle="" itemShow="8" />
                                    </div><br></br><br></br>

                                    <h4>Our Projects</h4>
                                    <h4>Our Client’s Testimony</h4>
                                    <div className="row">
                                        <div className="Box1 col-xl-4 col-lg-4">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left">
                                                    <p> “ Outstanding about everything : Support is fast and perfect : I got answers to every questions I asked. Code quality is up to date, modern, structured, clear, easy to understand. Design is pure and esthetic. Origin Provide updates. Thank you Origin team for all of this! Keep going!” </p>
                                                    -Saboo Diagnostics
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Box1 col-xl-4 col-lg-4">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left">
                                                    <p>“ My project is totally customizable, clean with all the options you could want. The customer support is absolutely unsurpassed.” </p>
                                                    -Elite Dental Hospitals
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Box1 col-xl-4 col-lg-4">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left">
                                                    <p>“ Origin made my Website extremely well organised, the help and support is terrific and the options provided by the company are about the most perfect I've found - what more could you ask for? ”</p>
                                                    -Big Dry Fruits
                                                </div>
                                            </div>
                                        </div>
                                    </div><br></br>

                                    <h4>Our Software Product Development Services Include</h4>
                                    <Accordion defaultActiveKey="1">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>New Product Development</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>New product development can be a tough process, but a few key things can make it easier:<br></br><br></br>
                                                    ►	It would help if you took the time to understand the needs and expectations of your target users. What are they looking for in a product? What will make them choose your product over others on the market?<br></br>
                                                    ►	You must research any compliance requirements that may apply to your product. For example, if you're developing a health-related product, you'll need to ensure it meets HIPAA standards.<br></br>
                                                    ►	You need to plan your product releases and prioritize features.<br></br>
                                                    It will help you stay on track and ensure that your product is marketable and compliant.<br></br>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Continuous Product Development </Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    ►   Product evolution is a continuous process. By implementing behavior analytics, you can spot friction in user journeys and plan UX and UI improvements accordingly.<br></br>
                                                    ►   You can also deliver new functional modules, and features envisaged in the product roadmap, manage technical backlog, develop APIs to expand your product's integration capabilities, or migrate the product to the cloud.<br></br>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>SaaS Product Customization</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    ►  SaaS product customization can be a lot of work. We will analyze the individual requirements of our clients, consult the roadmap to see if clients' needs are covered in future releases and create custom features and UI components if they're not.<br></br>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Market-constraint Product Growth</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    ►   We also create custom APIs for integration with our client's systems. If you're looking to expand your SaaS product, you have to think about how you will market it to new users and what sort of functionality you will need to add to make it appealing to them.<br></br>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>


                                    <h4>Origin Softwares has a Software Product Development Company</h4>
                                    <h4>Our Core Technologies</h4>
                                    <h4>Our Industries</h4>
                                    <h4>Consult us for Software Product Development </h4>
                                    Origin Softwares can help take your product from the idea stage to fruition. With our software product development services and consulting assistance, you can create a software product that will be marketable and that your target users will love.<br></br><br></br>
                                    <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Contact Us</Link><br></br><br></br>
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

export default SoftwareProductDevelopment