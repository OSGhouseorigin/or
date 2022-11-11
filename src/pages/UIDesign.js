import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UIDsn from '../component/service/UIDsn';

const UIDesign = () => {
  return (
    <>
      <SEO title='UI Design' />
      <main className='main-wrapper'>
        <HeaderOne />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-3 ">
                <div className='sidebar-fixed'>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
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
                </Accordion>
                </div>
              </div>
              <div className="title-BC col-lg-9">
                <h1 className='color'>UI Design Services (User Interface)</h1>
                <h2>Slider</h2>
                <p>UI design services help to create digital interfaces that are pleasing to the eye and help to strengthen your brand. Our UI Design solutions are tailor-made for your audience, reflect your customers' values and support your business objectives effectively.</p>

                <h4>You want your visitors to stick around, right?</h4>
                <p>Origin Softwares will help you develop a profound user research strategy and slick UIs that your target audience will love.</p>
                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call To Action</Link><br></br><br></br>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Why Origin Softwares?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      ► We've got 9 years in IT under our belt, and we have a team of dedicated and experienced UI and UX designers. <br></br><br></br>
                      ► Plus, we're experts in performing UI and UX research and testing, and we always design with mobile responsiveness in mind.
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Why does UI Design Matter? </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      ► Design plays a crucial role in the success of any digital product. A well-designed user interface can increase clicks by 10%, while poor design can lead to 80% of customers abandoning a product.<br></br><br></br>
                      ► At Origin Softwares, we create tailored UI designs that are competitive and meet the needs of your customers. Our team stays up-to-date on current design trends to give you an edge over your competition.<br></br><br></br>
                      ► We design user interfaces that are tailored to meet your specific marketing and customer service objectives. This includes things like increasing your conversion rate or fostering more user engagement and retention. <br></br><br></br>
                      ► To ensure that we're always on the same page, we'll share early drafts and samples of your UI design project before any contract is signed. That way, there's no confusion about the project vision.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Why You Should Invest in UI Design services?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      ► User interface and user experience design are important factors to consider when developing a new product or website. Poor design can cause up to 80% of potential users to leave, so it's important to invest in quality UI design from the beginning. <br></br><br></br>
                      ► This will help you stay within budget and get the most satisfied customers.<br></br><br></br>
                      ► You can avoid costly mistakes by investing in quality UI design now. <br></br><br></br>
                      ► Origin Softwares UI design services team will make sure your user interface is effective and user-friendly, helping you to convert more customers.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion><br></br><br></br>

                <h4>Our Selected Projects</h4>
                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call To Action</Link><br></br><br></br>

                <h4>Our UI Design Service Options</h4>
                <p>We provide a variety of design services to choose from, whether you need one-time support or continuous design assistance. Our team can help your website evolve over time, and we offer services for every type of device.</p>
                <h6>Some of our design offerings include:</h6>
                <div className='row'>
                  <UIDsn colSize="col-xl-6 col-md-4" serviceStyle="" itemShow="4" />
                </div><br></br><br></br>

                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call To Action</Link><br></br>
              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  )
}

export default UIDesign