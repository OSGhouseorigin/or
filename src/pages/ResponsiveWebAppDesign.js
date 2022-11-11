import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ResponsiveWebAppDesign = () => {
  return (
    <>
      <SEO title='Responsive Web App Design' />
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
                <h1 className='color'>Responsive Web Application Design</h1>
                <h2>Slider</h2>
                <p>Responsive Web Application Design: At Origin Softwares, we don't just aim to create responsive web apps - we want to create mobile-first web experiences that are tailored to the specific needs of mobile users.<br></br><br></br>
                  This way, your app will be easy to use and adopt, and users will be more likely to stick with it.<br></br>
                </p>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Offer Your Mobile Audience Without a Native App?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►	Our responsive web app design services ensure that your app will be easy to navigate, fast-loading, and high-interactive regardless of the device in use. <br></br><br></br>
                        ► So if you want to cater to your mobile audience without creating a native app, Origin Softwares is the perfect partner for you.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Why Origin Softwares? </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►   Origin Softwares has over 9 years of experience in the IT industry.<br></br>
                        ►   Our in-house UI and UX designers have 9 years of experience and are experts in mobile software development. We focus on agile web app development that is responsive and user-friendly.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Why does Responsive Web App Design Matter?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►  Our responsive web app design services are important because poor mobile UI and UX can lead to users abandoning your app, costing you $2.6 billion in ROI annually. <br></br>
                        ►  A great mobile design, on the other hand, will keep users coming back to your app time and time again.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion><br></br>

                <h4>Our Responsive Web App Design Service Options</h4>
                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      One-off responsive design from scratch to help you quickly and easily adopt the app and improve customer acquisition.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Responsive redesign to improve responsiveness, fix UI and UX flaws, and support your team.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Continuous responsive design to support your ever-evolving web app.
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h4>Make a Secure Investment in Responsive Web App Design </h4>
                <p>You don't want to lose nearly half of your potential users because your app didn't adapt to their mobile devices! </p>



                <h4>Don’t Let Half of Your Userbase Leave!</h4>
                <p>By investing in responsive web application design, you can make sure that your app is accessible and user-friendly for everyone.</p>

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

export default ResponsiveWebAppDesign