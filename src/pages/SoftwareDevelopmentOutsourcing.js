import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import SoftOSrc from '../component/service/SoftOSrc';
// import SectionTitle from '../elements/section-title/SectionTitle';

const SoftwareDevelopmentOutsourcing = () => {
  return (
    <>
      <SEO title='Software Development Outsourcing' />
      <main className='main-wrapper'>
        <HeaderOne />
        <div className=' section-padding'>
          <div className='container' >
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
                <h1 className='color'>Software Development Outsourcing </h1>
                <div>
                  <img className='img' src='../images/Software Development Outsourcing.png' alt="" />
                </div><br></br><br></br>

                <p>Software development outsourcing involves assigning responsibility for certain software development activities to an external vendor. It can help businesses cover a lack of internal resources or expertise in business growth or digital transformation initiatives.

                  According to recent predictions, the software development outsourcing market is expected to grow by around 98 billion dollars during 2020-2024, with a CAGR (Compound Annual Growth Rate) of 5%.<br></br><br></br>

                  <h4>Benefits of outsourcing software development </h4>
                  There are many benefits to outsourcing software development, including increased quality and speed and decreased costs. According to statistics, more than 50% of Fortune 500 companies outsource their software development.<br></br><br></br>

                  <h4>Origin Softwares as a Software Development Outsourcing Company</h4>
                  Origin is a software development outsourcing company with over 10 years of experience. We have development centers in Hyderabad and the EU. We cater to both software product companies and non-IT enterprises.<br></br><br></br>
                  Our quality management system is certified by ISO 9001, which means we can deliver projects on time, on budget, and to our customers' quality expectations.<br></br><br></br>

                  <h4>Outsourcing options</h4>
                  Origin Softwares offers three main outsourcing models: staff augmentation, dedicated team, and full process outsourcing.<br></br><br></br>

                  <div className='row'>
                    <SoftOSrc colSize="col-xl-6 col-md-3" serviceStyle="" itemShow="3" />
                  </div><br></br><br></br>

                  <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Request Quote</Link><br></br><br></br>

                  <h4>Our Industry's</h4>
                  <p>We develop industry-specific software for XYZ industries. See our projects in the particular industry you're interested in as a business holder.</p>
                  <div className="row paper">
                    <div className="col-xl-6 col-lg-5">
                      <div className="why-choose-us">
                        <div className="section-heading heading-left">
                          <h4 className="title">Industry competencies:</h4>
                          We develop industry-specific software for XYZ industries.
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
                        <div className="section-heading heading-left shadow-box mb--30">
                          <img className='img' src='../images/Web-Application.jpg' alt=''></img>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-5">
                      <div className="why-choose-us">
                        <div className="section-heading heading-left">
                          <h4 className="title">Our Domain expertise:</h4>
                          you can find the most popular software types we offer.
                            <li>ERP</li>
                            <li>CRM</li>
                            <li>HR management</li>
                            <li>Financial management</li>
                            <li>Supply chain management</li>
                            <li>Asset management</li>
                            <li>Data Analytics</li>
                            <li>Ecommerce Solutions</li>
                            <li>B2B and B2C portals</li>
                            <li>eLearning</li>
                            <li>Fleet management</li>
                        </div>
                      </div>
                    </div>
                  </div><br></br>

                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>How to Assure effective Software Outsourcing?</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          When looking to outsource your software development, there are a few key things to keep in mind to ensure efficiency.<br></br>
                          ●	First, testing a vendor's expertise in practice is important by launching a small pilot project or PoC. It will give you an objective understanding of their competencies.<br></br>
                          ●	Second, sign a service level agreement with the vendor that outlines expectations for timelines, deliverables, quality requirements, and risks.<br></br>
                          ●	And third, decide on a KPI system to monitor the project's progress without being over-involved in the process.<br></br>
                          ●	By following these steps, you can be confident you're getting the most efficient software outsourcing possible.<br></br>
                          ●	Before beginning to work with a vendor, it is important to establish clear communication channels and dedicate the necessary resources to the project.<br></br>
                          ●	It will help ensure everyone is on the same page and avoid any potential misunderstandings further down the line.<br></br>
                          ●	It is also crucial to control outcomes and protect your business interests.<br></br>
                          ●	Signing a non-disclosure agreement (NDA) with your vendor will help to ensure that your confidential information and intellectual property rights are protected.<br></br>
                          ●	You should also check that they have the relevant security measures to protect your data, such as IDS/IPS, DLP, SIEM, etc.<br></br>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>What the procedure of our software development?</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          At our company, we offer a comprehensive outsourcing service that takes your project from start to finish. <br></br><br></br>
                          <h6>Steps to take for outsourcing services </h6>

                          ►   We kick things off with an analysis of your initial request, and then we move into discovery mode to assess your software development needs and craft a service plan.<br></br><br></br>
                          ►   From there, we negotiate an SLA and transfer knowledge and responsibility to our team.<br></br> <br></br>
                          ►   Once service delivery begins, we continue to evolve the service as needed to ensure your ongoing satisfaction.<br></br>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion><br></br>

                  <h4>Our Testimony</h4>
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
                  
                  <h4>Technologies we deal with</h4>

                  <h4>Different cooperation formats </h4>
                  ➔ We offer two different cooperation formats:<br></br>
                  ➔ For new applications, we deliver an application in 3-4 months and then proceed with adding new features every 2-6 weeks.<br></br>
                  ➔ We can join your project at any stage for existing software to support and evolve the codebase.<br></br><br></br>

                  <h4>Success stories</h4>

                  <h4>Contact us</h4>
                  If you're interested in learning more about our software development outsourcing service, please contact us today to discuss your specific needs.<br></br><br></br>

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

export default SoftwareDevelopmentOutsourcing