import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const MobileAppDesign = () => {
  return (
    <>
      <SEO title="Mobile App Design" />
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
                <h1 className='color'>Mobile App Design</h1>
                <h2>Slider</h2>
                <p>Origin Softwares mobile app design services are key in the creation of successful and user-friendly apps. <br></br><br></br>
                  Our team of experts has been delivering sleek, responsive designs with transparent navigation since the early XYZs. We know what it takes to create an app with a high conversion rate and easy adoption.
                </p>

                <h4>Our Featured Mobile App Designs</h4>
                <h6>Add our portfolio here</h6>

                <h4>Our Mobile App Design Service Scope</h4>
                <div className="row paper">
                  <div className=" col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h4>Research and Analysis</h4>
                        <p>At Origin Softwares, we not only design mobile apps, but we also develop software. Our team has a wealth of knowledge and experience that allows us to cater to each project individually, while also understanding general business needs and user expectations.<br></br>
                          The requirements and specifications that we create serve as the foundation for our mobile app designs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h4>UX Design</h4>
                        <p>After our team of analysts creates a comprehensive project roadmap, it's time for our design team to work their magic. We prioritize making apps easy to follow and navigate, so our UX specialists sketch layouts and wireframes with the users in mind. <br></br>
                          This allows us to create apps that are not only functional but also delightful to use.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h4>UI Design</h4>
                        <p>Our UI designers work hard to make sure that your app's design is consistent with your brand image. We understand that you may want to create a visually stand-alone mobile app, and we are eager to present our own ideas!</p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h4>Customer Satisfaction</h4>
                        <p>Although we are confident in and proud of the knowledge and talents of our BAs and designers, our customers’ opinions mean a lot to us.<br></br>
                          We welcome users' feedback and do our best to grasp the vision of an ideal mobile app design by iteratively rolling out UI/UX updates based on user experience data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h4>Platforms We Target</h4>
                <p>Origin Softwares team of experts creates UI/UX designs that are both user-friendly and trendy, be it a native or cross-platform app. <br></br>
                  We have a wealth of experience in implementing sleek designs for iOS and Android apps, as well as for applications on Cordova, Ionic, Flutter, and Xamarin.
                </p>

                <h4>App Development</h4>
                <p>UI/UX design is a core part of our mobile app development services. This important part of our work relies on efficient cross-team communication and time-proved methodologies that ease the entire process from developing a prototype to releasing the app.</p>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Need a Sleek Design for Your Mobile App?</Accordion.Header>
                    <Accordion.Body>
                      <ul>If you want to go with low-code development, technologies require little to no coding to build applications.<br></br><br></br>
                        ► At Origin Softwares serving mobile app design services, we understand that time is of the essence when it comes to developing a new app. That's why we offer to provide sample UX wireframes within just one week of starting discussions about your concept. <br></br>
                        ► And once those wireframes have passed our rigorous UX testing process, we'll begin working on high-quality UI visuals that meet all of your requirements.<br></br>
                      </ul>
                      <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call To Action</Link><br></br>
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

export default MobileAppDesign