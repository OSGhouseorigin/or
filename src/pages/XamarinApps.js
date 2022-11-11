import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import XamAppD from '../component/service/XamAppD';


const XamarinApps = () => {
  return (
    <>
      <SEO title="Xamarin Apps" />
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
                <h1 className='color'>Xamarin App Development </h1>
                <h2>Slider</h2>
                <p>Xamarin app development services: Xamarin is a powerful tool for developing mobile apps that run on both iOS and Android devices. Origin Softwares has been delivering mobile apps using Xamarin since 9 Years.</p>

                <h4>Our Xamarin Mobile Apps Portfolio</h4>
                <p>Add the portfolio here</p>

                <div className='row'>
                  <XamAppD colSize="col-xl-6 col-md-2" serviceStyle="" itemshow="2" />
                </div><br></br>


                <h4>User Interface</h4>
                <div className="row">
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      The user interface is extremely important for users. At Origin Softwares, we use Xamarin to offer two ways to implement the interface in your application:
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Xamarin.Forms – This results in a cozy and intuitive one-size-fits-all design with totally native controls for Android and iOS.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Xamarin.iOS and Xamarin.Android – your cross-platform application will have truly native interfaces, separately developed by our Xamarin experts.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      If you are uncertain about what technology to choose – our architects will carefully examine.
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Why Origin Softwares?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►	At Origin Softwares, we pride ourselves on our ability to deliver high-quality mobile applications. With more than 350 delivered mobile applications, our team has a thorough understanding of the mobile development market. <br></br>
                        ►	In addition to our expertise in full-cycle cross-platform mobile application development, our specialists are also involved in native mobile development. <br></br>
                        ►	We have already delivered projects that have received praise from the public and are used by major corporations such as Fox Entertainment, BBC, T-Mobile, Orange, KFC, and others.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>why Xamarin?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►   Xamarin provides developers with a unique opportunity to create cross-platform applications using native code.<br></br>
                        ►   This means that developers can easily access all platform-specific hardware and create applications that look and feel like they belong on each specific platform.<br></br>
                        ►   Additionally, the ability to tailor a UI to the original look and feel of iOS and Android makes it easy to create beautiful, functional applications that will appeal to even the most dedicated platform admirers.<br></br>
                        ►   Contact  Xamarin app development services company now.<br></br><br></br>
                        <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Contact Us</Link><br></br>
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

export default XamarinApps