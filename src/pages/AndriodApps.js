import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import AndriodAppD from '../component/service/AndriodAppD';

const AndriodApps = () => {
  return (
    <>
      <SEO title="Andriod Apps" />
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
                <h1 className='color'>Android App Development </h1>
                <h2>Slider</h2>
                <p>Android app development services cover a wide range of needs for businesses and organizations who want to develop software for the Android platform. Android app development can be conducted using native, hybrid, or cross-platform development techniques. </p>

                <h4>Android Development Services</h4>
                <div className="row">
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    Origin Softwares provides Android development services that result in custom mobile apps, mobile SDKs, and utilities. We excel in in-app integration with the back-end web service and corporate systems.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    If you're looking for someone to develop a custom Android app for you, look no further than Origin Softwares. Our developers have a wealth of experience creating all sorts of Android apps, from utility apps to those integrated with complex back-end systems.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    Whichever your project requires, we have the skills and know-how to get it done right.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    End-to-end Android app development is our specialty and we're always keen to deliver a custom product that meets your specific needs.
                      </div>
                    </div>
                  </div>
                </div><br></br>
                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call To Action</Link><br></br>


                <div className='row'>
                  <AndriodAppD colSize="col-xl-6 col-md-2" servicestyle="" itemshow="2" />
                </div><br></br>

                <h4>Project Management and Mobile Projects Workflow</h4>
                <p>
                  ➔  At Origin Softwares, we understand that mobile projects require a mature and experienced project management team that can handle the challenges and complexities that these types of projects bring. <br></br>
                  ➔  We have a deep understanding of the mobile project workflow .<br></br>
                  ➔  We use our custom, advanced Quality Management System to track the progress of Android app development. <br></br>
                  ➔  This system is backed by our ISO 9001 certificate and provides you with KPI reporting tools to ensure transparency. <br></br>
                </p>

                <h4>Expertise in Security and Integration Process</h4>
                <p>➔  Our team of experts also guarantees the security of your Android app data, as we are ISO 27001 certified. We provide smooth integration of your app with the back-end web service and internal corporate systems (ERP, CRM, ECM, CPM, HRM, and others).</p>

                <h4>Request quote</h4>
                <p>Having an Android app can help you broaden your outreach. Our team can deliver a high-quality app of any complexity, on time, and budget. Contact us today to discuss the development of your app.</p>
                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Request Quote</Link><br></br>

              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  )
}

export default AndriodApps