import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import CusSoft from '../component/service/CusSoft';
import { FaAngleRight } from 'react-icons/fa';
// import SectionTitle from '../elements/section-title/SectionTitle';

const CustomSoftwareDevelopment = () => {
    return (
        <>
            <SEO title='Custom Software Development' />
            <main className='main-wrapper'>
                <HeaderOne />
                <div className=' section-padding'>
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
                                <h1 className='color'>Custom Software Development</h1>
                                <div>
                                    <img className='img' src='../images/Custom Software Development.png' alt="" />
                                </div><br></br><br></br>

                                <p className='text'>
                                    Origin Softwares is a custom software development company in India. We specialize in helping clients get the most out of our custom software development services.<br></br><br></br>
                                    We have a team of dedicated consultants who will help you every step of the way, from gathering and analyzing your business requirements to conceptualizing the software to best fit those needs.<br></br><br></br>
                                    And because we've successfully completed over 3,300 projects in 30+ industries, you can be confident that we have the experience and expertise to deliver a solution that powers your business processes.<br></br><br></br>

                                    <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Request Quote</Link><br></br><br></br>
                                    <h3>Origin Softwares Service Scope</h3>

                                    <div className='row'>
                                        <CusSoft colSize="col-xl-6 col-md-9" serviceStyle="" itemShow="9" />
                                    </div><br></br><br></br>

                                    <h3>Custom software development we create and offer</h3>
                                    We create custom software tailored to your business's specific needs at Origin Softwares. We piece together the core functionality for the business
                                    process in focus and enhance the software with unique software features and capabilities in real-time.

                                    <div className="row paper">
                                        <div className="col-xl-6 col-lg-5">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left">
                                                    <h4 className="title">Software for different industries</h4>
                                                    <ul>
                                                        <li>Healthcare</li>
                                                        <li>Manufacturing</li>
                                                        <li>Banking</li>
                                                        <li>Retail</li>
                                                        <li>Oil and Gas</li>
                                                        <li>Telecommunication</li>
                                                        <li>Logistics and Transportation</li>
                                                        <li>Insurance</li>
                                                        <li>Professional Services</li>
                                                        <li>Marketing and Advertising</li>
                                                        <li>Public Services</li>
                                                    </ul>
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
                                    </div><br></br>

                                    <h4>Software for Various business needs</h4>
                                    <h6>Enterprise resource &amp; management software</h6>
                                    ➔  Our software helps businesses manage their day-to-day activities more efficiently by consolidating all of their operations into a single system.<br></br>
                                    ➔  It includes project and task management features, resource and workload management, HR and talent management, sales and marketing automation, risk management, compliance management, and document management.<br></br>
                                    ➔  Having these capabilities in one place makes it simpler and faster for businesses to get work done.<br></br><br></br>

                                    <h6> Customer-centric software</h6>
                                    ➔  Our software is designed with the customer in mind. We consider audience specifics in design to create a user-friendly product for business users or individual consumers that give the best user experience.<br></br><br></br>

                                    <h6>Supply chain management software</h6>
                                    ➔  The software we use for supply chain management is designed to automate and keep track of all the steps involved in getting a product, from sourcing and manufacturing to be available for purchase by the consumer.<br></br>
                                    ➔  At our company, we specialize in software solutions that help manage all aspects, from demand planning and procurement to warehouse and vendor management.<br></br><br></br>

                                    <h6> Knowledge &amp; productivity</h6>
                                    ➔  In addition to streamlining communication and product movement, our software also helps increase employee knowledge and productivity.<br></br>
                                    ➔  At our company, we provide various content management systems that can help with everything from activity tracking to knowledge hubs and intranets.<br></br>
                                    ➔  We understand that corporate learning and training can be complex, so we offer our clients a wide variety of options. With our help, you can find the perfect system for your needs and ensure your employees have all the tools they need to succeed.<br></br><br></br>

                                    <h6> Business Analytics</h6>
                                    ➔  There are many different types of business analytics, each with its benefits depending on what kind of data you need to analyze. For example, predictive analytics can help you decide about future sales or customer trends.<br></br>
                                    ➔  Enterprise-wide data management solutions can give you a big-picture view of your business, while big data solutions can help you make sense of large, complex data sets.<br></br><br></br>

                                    <h6> Internet-connected processes</h6>
                                    ➔  We create software ecosystems that connect physical objects to the internet so that they can transfer information about their state or environment into the data center.<br></br>
                                    ●  It allows for various objects to communicate with one another and creates a more cohesive internet of things.<br></br>
                                    ●  It has applications in many industries, like smart cities, factories, and homes.<br></br>
                                    ●  It is used for remote service and monitoring of connected vehicles.<br></br><br></br>
                                    <h6>Financial management &amp; accounting</h6>
                                    ➔  At our company, we pride ourselves on providing top-tier financial management and accounting tools that help streamline data collection and analysis for improved decision-making processes at all levels.<br></br><br></br>

                                    <h6>Emergency &amp; security</h6>
                                    ➔  We also offer security solutions for emergency response and incident management, information security, and secure video conferencing and messaging.<br></br>
                                    ➔  When it comes to your finances and security, we've got you covered.<br></br><br></br>

                                    <h4>Software for various management levels</h4>
                                    ➔  We create 3 main types of software at our company: enterprise-wide, departmental, and business process management software.<br></br><br></br>

                                    <div className="row">
                                        <div className="Box1 col-xl-4 col-lg-4">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left">
                                                    <h4 className="title">Enterprise-wide software</h4>
                                                    <p>Enterprise-wide software is designed to access multiple users and usually has a user roles and permissions hierarchy</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Box1 col-xl-4 col-lg-4">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left">
                                                    <h4 className="title">Departmental software </h4>
                                                    <p>Departmental software is designed to meet department employees' specific needs. Custom departmental software can uncover functional capabilities not available in mass-market or free tools.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Box1 col-xl-4 col-lg-4">
                                            <div className="why-choose-us">
                                                <div className="section-heading heading-left">
                                                    <h4 className="title">Business process management software</h4>
                                                    <p>Business process management software addresses a particular business workflow and reveals possibilities for automation.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h4>Origin software Answers to Frequent Questions</h4>

                                    <Accordion defaultActiveKey="1">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Is custom software worth the investment? </Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    ►  When it comes to custom software, it's essential to weigh the pros and cons carefully before deciding. Some critical pros of custom development include a tailored feature set and unlimited scalability. <br></br><br></br>
                                                    ►  On the downside, custom software can take longer to develop and may require more input from key stakeholders. There is also usually no free trial or demo available before investment.<br></br>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>What will be the price of custom software development?</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    ►   The cost of custom software development work can vary depending on your project's specifications.<br></br><br></br>
                                                    ►   Some factors that affect price are how many features the software has, how unique the design is, and how many other systems it needs to be compatible with; infrastructure requirements (availability, performance, security, etc.) can also affect the price.<br></br> <br></br>
                                                    ►   If you need a more specific estimate for your project, you can always request a free project cost calculation.<br></br>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>What cooperation model is better for custom development?</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    ►  If you don't have any development resources in-house, you'll need to assemble a dedicated team and outsource your project to a vendor.<br></br><br></br>
                                                    ►  You can use a team augmentation model if you have a team but lack specific competencies.
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Do we have to know development techniques to choose right?</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    ►  You don't need to understand development methodologies to choose the correct option, but if you're curious about the difference, here's a brief overview:<br></br><br></br>
                                                    ►  At Origin Softwares, we use cutting-edge modern technologies like Agile (Scrum, Kanban, XP) to enable fast releases and easy changes.
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>How can we guarantee the success of a custom software development project?</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    ►  There are a few things that can help ensure the success of a custom software development project:<br></br>
                                                    ● A dedicated project manager organizes the work, communicates with stakeholders, continuously re-evaluates requirements, and manages risks.<br></br>
                                                    ● Using lean UX design principles.<br></br>
                                                    ● Creating clean and stable code with a future-proof architecture.<br></br>
                                                    ● Developing the software products with an eye towards easy support and smooth evolution.<br></br>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion><br></br>

                                    Contact us today to learn more about how we can help you relieve some of the pressure of product management. And Get the custom software development services in India within your budget.<br></br><br></br>
                                    <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Contact Us<FaAngleRight /></Link>
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

export default CustomSoftwareDevelopment




