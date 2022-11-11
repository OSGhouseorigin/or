import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
//import SectionTitle from '../elements/section-title/SectionTitle';

const ITStaffing = () => {
  return (
    <>
      <SEO title='IT Staffing' />
      <main className='main-wrapper'>
        <HeaderOne />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-3">
                <div className='sidebar-fixed'>
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="1">
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
              <div className="title-BC col-lg-9">
                <h1 className='color'>IT Staffing Services</h1>
                <h2>Slider</h2>
                <p>At Origin Softwares, we pride ourselves on being a leading global IT staffing service provider. We use technology to identify competent full-time IT professionals or software developers for various business organizations.<br></br><br></br>
                  Our staffing partners get sophisticated placement and retention records analysis helps us identify the most highly skilled candidates for each job.<br></br><br></br>
                  So if you're looking for an IT professional to join your in-house team, look no further than origin software! We'll have you cost-effective and demand talent coming up and running in no time.
                </p>

                <h4>Our Staffing Solutions</h4>
                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      At Origin Softwares, we provide staffing solutions tailored to each client's needs.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Whether our client is looking for temporary staffing, permanent staff, employees on a contractual basis, or candidates for a contract-to-hire arrangement, either long-term or short-term, we are here to help. 
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      We also offer recruitment process outsourcing (RPO) services to help our clients find the top talent for their business objectives.
                      </div>
                    </div>
                  </div>
                </div>

                <h4>Our Recruitment Process</h4>
                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Origin Softwares is a leading IT staffing agency that offers customized solutions.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      We take the time to understand our client's specific skills and match them with the perfect candidate. 
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      With our Recruitment Process, we can achieve superior recruiting results in a shorter amount of time. 
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h6>Add Process Images here</h6>

                <h4>Center of Excellence For Recruiting</h4>

                <h4>Our Esteemed Clients</h4>

                <h4>Technology We Cover</h4>

                <h4>Testimonials</h4>
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

                <h4>Hire the Right Candidate at Right Time</h4>
                <p>➔ At Origin Softwares, being among the best staffing companies, we focus on helping you attain your dream job. We understand that a wide range of experiences and perspectives are necessary for our success as a company.</p>

              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  )
}

export default ITStaffing