import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import IOSAppDa from '../component/service/iOSAppD.js';

const IOSApps = () => {
  return (
    <>
      <SEO title="iOS Apps" />
      <main className='main wrapper'>
        <HeaderOne />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-3">
                <div className='sidebar-fixed'>
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
                <h1 className='color'>iOS App Development</h1>
                <h2>Slider</h2>
                <p>At Origin Softwares, we provide iOS app development services that include UX and UI design, implementation, QA, and integration of applications for iPhones and iPads. With 9 years of experience in the industry, we have a wealth of expertise across multiple industries. </p>

                <h4>Our iOS Project Portfolio</h4>
                Our iOS project portfolio includes apps for MTV, BBC, Fox Entertainment, T-Mobile, and Orange, We were also trusted to deliver an iOS app for a global market leader in image processing.<br></br><br></br>

                <h4>iOS Apps We Develop</h4>
                There are two main types of mobile enterprise apps: internal use by a company's managers and employees, and those for customer use.
                <div className="row">
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h5>B2B/B2E Apps </h5>
                      B2B/B2E apps are designed for internal use by a company's managers and employees. These apps can be used by employees who work in-house or in the field.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h5>B2C Apps </h5>
                      B2C apps are designed for customer use. These apps can be used to promote your brand and generate profit.
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <div className='row'>
                  <IOSAppDa colSize="col-xl-6 col-md-6" serviceStyle="" itemShow="6" />
                </div><br></br><br></br>

                <h4>Request a quote</h4>
                <p>Our team of iOS app development service experts are always available to discuss your app idea or existing project. We can provide professional assistance and help you take your project to the next level.</p>
                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Request Quote</Link>
              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  )
}

export default IOSApps