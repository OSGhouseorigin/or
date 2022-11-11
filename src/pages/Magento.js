import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const Magento = () => {
  return (
    <>
      <SEO title='Magento' />
      <main className='main-wrapper'>
        <HeaderOne />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-3">
                <div className='sidebar-fixed'>
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="1">
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
                  </Accordion>
                </div>
              </div>
              <div className="title-BC col-lg-9">
                <h1 className='color'>Magento Development</h1>
                <img className= 'img' src='../images/Magento.png' alt=''></img><br></br><br></br>
                <p>Origin Softwares provides Adobe Commerce - Magento development services that cover all technology-related needs for online businesses.<br></br>
                  We have a team of certified experts who rely on their PHP coding skills and Adobe Commerce knowledge to ensure service quality.<br></br>
                  Our team has the development and solution design expertise to deliver smooth communication and results that meet your expectations.</p>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Why Hire a Magento development company?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►   Getting an Adobe Commerce Magento developer who is competent has a few benefits that you may not have considered before. <br></br>
                        ►   For one, you'll save money in the long run because you won't have to keep troubleshooting code or issues that could have been prevented in the first place. <br></br>
                        ►   Additionally, your site's performance and security will be much better off because of the clean code that will be used.<br></br>
                        ►   We want to help you and your business succeed by developing features that prevent issues from happening, rather than being something you have to pay for later on down the road. <br></br>
                        ►   Our team is quick to develop minor features within 1-3 days, while larger-scale projects will be assessed on an individual basis. We're never satisfied with the status quo - we're always investigating eCommerce trends and transformations that can bring real value to your business.<br></br>
                        ►   You can prevent issues from happening in the first place by working with Origin software Adobe Commerce developers. We have a plan of scheduled audits and health checkups that will save you from the consequences of security breaches, performance problems, SEO issues, and poor UX.<br></br>
                        ►   With Origin Softwares and true expertise in Adobe Commerce, we can handle any need you have within the agreed timeline. You can expect tangible business value from our work.<br></br>
                        ►   Let's discuss your development needs today.<br></br>
                        ►   Here are two aspects of Adobe Commerce that we always have under control: performance and security. <br></br>
                        ►   Performance-wise, our goal is to keep load times under 1.5 seconds under normal conditions.<br></br>
                        ►   Additionally, we aim for stability during load peaks. As for security, we maintain a safe environment and protect the file system. We also make sure that the Adobe Commerce instance is patched promptly. Furthermore, we regularly conduct security audits.<br></br>
                        ►   If you have any Adobe Commerce Magento development needs, we can take care of them for you. <br></br>
                        ►   This includes competencies such as Adobe Commerce consulting, customization, UX and UI design, PWA development, migration and upgrade, and integration<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion><br></br>
                <h4>Our Magento Projects</h4>
                <h6>Add Projects Here</h6>
                <p>Here at Origin Softwares, we frequently get asked a lot of questions related to Adobe Commerce. <br></br>
                  ●	Do we undergo Adobe Commerce certifications?<br></br>
                  ●	Are we interested in partnering up with eCommerce businesses and digital agencies as an implementation partner for Adobe Commerce?
                </p>

                <div className="row">
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    The answer to both of those questions is a resounding yes! We have certified Adobe Commerce Magento developers and solution specialists on our team who always put the needs of the client first.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    We firmly believe that cooperation between our company and other eCommerce businesses can be extremely productive and result-oriented.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    If you're thinking about Adobe Commerce for your business but are worried about the cost, don't be. Every business has different needs, so the cost of development will vary depending on what you need.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      You can always get a free quote from us to get an idea of what your specific magento project would cost. And if you're worried about ROI, don't be.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      We can help you calculate the investments needed and estimate the ROI so you can make an informed decision.
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  )
}

export default Magento