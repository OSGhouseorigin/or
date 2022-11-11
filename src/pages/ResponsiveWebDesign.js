import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ResponsiveWebDesign = () => {
  return (
    <>
      <SEO title='Responsive Web Design' />
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
                <h1 className='color'>Responsive Web Design</h1>
                <h2>Slider</h2>
                <p>Responsive web design services help a web solution adjust to the screen size it is being displayed on. This is important because mobile devices have become increasingly popular as the primary way people access the internet.</p>
                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call To Action</Link><br></br><br></br>

                Origin Softwares follows the mobile-first strategy, which means that we prioritize the design of a mobile version of your web solution. This results in a digital experience that is easy to use and converts well.<br></br><br></br>
                For more information on responsive web design, please see our responsive web app design page.<br></br><br></br>
                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Portfolio</Link><br></br><br></br>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Do you want your mobile visitors to convert effectively? </Accordion.Header>
                    <Accordion.Body>
                      <ul>► Origin Softwares can help. We deliver responsive websites and web portals that are easy to navigate, have mobile-specific interactive elements, and perform well on any network.</ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Why Origin Softwares? </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        When it comes to choosing a web development partner, there are many factors to consider. One of the most important is whether or not they offer responsive web design. Here's why it matters:<br></br><br></br>
                        ► Today, over half of all global website traffic comes from mobile devices.<br></br>
                        ► Google now uses "mobile-first" indexing for all websites, so a responsive design is key for SEO purposes.<br></br>
                        ► businesses that have responsive websites see an average 68% increase in sales.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Why does Responsive Web Design Matter?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      ► Origin Softwares is a top choice for responsive web design, with over 9 years of experience in IT and a conversion-driven mindset. <br></br><br></br>
                      ► Our experienced UI/UX design teams create beautiful, user-friendly designs that are also compliant with SEO and WCAG2 requirements (if requested).</ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion><br></br><br></br>

                <h4>Advantages of Responsive Web Design Services with Origin Softwares</h4>
                <h5>Mobile-first approach:</h5>

                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>A mobile-first approach is key when it comes to content scaling, touch-screen gestures, and device-specific keys.</p> </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>Interacting with the software on a mobile device is very different from a desktop computer, so it's important to design for mobile and desktop as two separate but connected entities. </p>
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>By starting with mobile design and then moving to desktop design, you can create web solutions that look similar but have independent user experiences that feel natural on all devices.</p>
                      </div>
                    </div>
                  </div>
                </div> <br></br>

                <h5>Driven by your business objectives:</h5>

                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>Origin Softwares design team always strives to bring your business requirements together with the latest responsive website and web portal design trends.</p>
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>Our team understands that every business is different, so we take the time to discuss all of your workflows and business goals before the project launch.</p>
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>This way, we can deliver web designs that meet your most prioritized marketing objectives - ensuring a prolonged dwell time, increased user engagement, and improved conversion rate.</p>
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h4>Our Responsive Web Design Services Options </h4>
                <p>
                  ➔  At our company, we make sure that you can see the potential results of our responsive web design services from the very beginning of the project. <br></br><br></br>
                  ➔  We carry out extensive market research, business analysis, and user research to give you accurate and reliable data on what to expect – things like visitor session time, user engagement rate, and conversions.<br></br><br></br>
                  ➔  You can request responsive design for your PWA as part of any of our three service options. Plus, all of our options can be delivered as a one-off design or as part of a continuous design process.
                </p>

                <h4>Make a Sure Investment in Responsive Web Design</h4>
                <p>
                ➔  Approximately 70% of users do not finish their purchases on websites when they view them on mobile devices due to the impeding mobile UX. In addition, 94% of users state that they do not trust a company if their website or web portal has a poor mobile design.<br></br><br></br>
                ➔  Because of this, they will choose to switch to a competitor. While you are still evaluating the reasons for your investment, responsive web design has already become one of the major conditions for the success of your digital venture. <br></br><br></br>
                ➔  Let Origin Softwares handle the responsive design of your website or web portal to make it fully functional and easy to navigate.<br></br>
                </p>

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

export default ResponsiveWebDesign