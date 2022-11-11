import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WebsiteRedesign = () => {
  return (
    <>
      <SEO title='Website Redesign' />
      <main className='main-wrapper'>
        <HeaderOne />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-3">
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
                <h1 className='color'>Website Redesign</h1>
                <h2>Slider</h2>
                <p>If you're not happy with how your website looks or performs, website redesign services can help give it a makeover. UX and UI revamps can go a long way in terms of transforming a website's appearance and feel.<br></br><br></br>
                  And at Origin Softwares, we don't just stop there – our website redesign services also cover things like loading speed optimization and content migration to ensure that visitors have a good experience.</p>

                <h4>Why You Might Consider Getting Website Redesign Services? </h4>
                <p>Here are some statistics that might convince you to give our website redesign services a try: </p>
                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      68% of visitors will leave a company website if they don't like the UI or UX design.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      46% of visitors make business decisions based on a company's website visuals.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      $1.73 Billion in annual revenue is lost by slow-loading eCommerce websites.
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Why Origin Softwares?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      ►   We've got 9 years in IT under our belt, and we have a team of dedicated and experienced UI and UX designers. <br></br><br></br>
                      ►   Plus, we're experts in performing UI and UX research and testing, and we always design with mobile responsiveness in mind.
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>How You Benefit from Website Redesign with Origin Softwares? </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      ►   At Origin Softwares, we guarantee website enhancements by starting with an in-depth UI and UX audit. <br></br>
                      ►   This lets us identify your website's weak points, which we then address with a custom plan that consists of redesign goals and respective business outcomes. <br></br>
                      ►   For example, we can improve responsive mobile design to increase mobile traffic, fix page load and performance issues to reduce the visitor bounce rate or unify several websites into one CMS to reduce support and administration costs.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion><br></br>

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

export default WebsiteRedesign