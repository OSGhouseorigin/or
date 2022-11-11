import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const HybridApps = () => {
  return (
    <>
      <SEO title="Hybrid Apps" />
      <main className='main wrapper'>
        <HeaderOne />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-3"><div className='sidebar-fixed'>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Mobile Apps</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <Link to={process.env.PUBLIC_URL + "/AndriodApps"}>Andriod Apps</Link><br></br><br></br>
                        <Link to={process.env.PUBLIC_URL + "/IOSApps"}>iOS Apps</Link><br></br><br></br>
                        <Link to={process.env.PUBLIC_URL + "/ReactNativeMobileApp"}>React Native Mobile App</Link><br></br><br></br>
                        <Link to={process.env.PUBLIC_URL + "/XamarinApps"}>Xamarin Apps</Link><br></br><br></br>
                        <Link to={process.env.PUBLIC_URL + "/HybridApps"}>Hybrid Apps</Link><br></br><br></br>
                        <Link to={process.env.PUBLIC_URL + "/MobileAppDesign"}>Mobile App Design</Link><br></br><br></br>
                        <Link to={process.env.PUBLIC_URL + "/MobileEcommerceApps"}>Mobile Ecommerce Apps</Link>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                </div>
              </div>
              <div className="title-BC col-lg-9">
                <h1 className='color'>Hybrid App Development </h1>
                <h2>Slider</h2>
                <p>
                  At Origin Softwares, we understand that when it comes to developing a hybrid app, you need a hybrid app development services team that has more than just the basics covered.<br></br> <br></br>
                  That's why our team of experts includes qualified UX and visual designers, as well as software engineers with a deep understanding of mobile web development technologies. <br></br> <br></br>
                  With our robust and high-performing solutions, you can be confident that your app will be scalable and secure, able to handle any business or IT needs.<br></br>
                </p>

                <h4>Origin Softwares as a Hybrid App Development Company</h4>
                <div className="row">
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    Hybrid app development is a popular choice for many companies and developers because it takes advantage of native app features while also putting them on the path toward HTML5 mobile app development.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    Essentially, a hybrid app is a native app that runs its user interface in an embedded browser component. To users, there is not much difference between native apps and hybrid apps.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    They are both downloaded from app stores, stored on mobile devices, and launched in the same way. The main difference is in the development process.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    At some of the most recognizable brands on the planet, we inspire possibility and apply innovation.
                      </div>
                    </div>
                  </div>
                </div><br></br>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Why Origin Softwares?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►	We're experts in Hybrid Mobile App Development, Hybrid Mobile App Design, PhoneGap Development, AngularJS Development, Backbone.js Development, Ember.js Development, Node.js Development, HTML5 Mobile Development, SproutCore Development, Cross-platform Development, HTML5 Development, HTML5 Design, and Multi-platform Development.<br></br><br></br>
                        ► We're a company that specializes in Hybrid App Development, and we're dedicated to creating amazing mobile experiences. Our process is agile and collaborative, and we're focused on communication and transparency with our clients.<br></br>
                        <h6>Add Portfolio</h6>
                        ► We have a team of 300+ experts in global offices, and our rates are competitive. We also have front-end specialists who are experienced in business analysis, UX/UI design, and more.<br></br><br></br>
                        ► Our company has a proven track record of successful project and engagement delivery. We offer rapid, cost-effective services for mobile web development, and our team of experts rigorously tests all features before “Go-Live” events.<br></br><br></br>
                        ► Our solid open technology expertise across multiple platforms makes us the perfect partner for your next hybrid app development project.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  )
}

export default HybridApps