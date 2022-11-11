import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import MobApp from '../component/service/MobApp.js';
//import SectionTitle from '../elements/section-title/SectionTitle';

const MobileApps = () => {
  return (
    <>
      <SEO title="Mobile Apps" />
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
                <h1 className='color'>Mobile App Development </h1>
                <h2>Slider</h2>
                <p>
                  At Origin Softwares, we develop mobile apps that are designed to either supplement or replace web solutions. <br></br><br></br>
                  With 20+ mobile app development projects under our belt, we have the eience and expertise necessary to deliver stunning UI, secure code, and robust back-ends.<br></br> <br></br>
                  We specialize in these types of apps: <br></br><br></br>
                  Apps for all versions of iOS, watch OS, Android, and Wear OS<br></br><br></br>
                  Native &amp; cross-platform apps
                </p>

                <div className='row'>
                  <MobApp colSize="col-xl-6 col-md-8" serviceStyle="" itemShow="8" />
                </div><br></br><br></br>

                <div className="row">
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Finally, we develop and implement the app, according to your specific needs and wants.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      At Origin Softwares, we specialize in web development and can complement your mobile app with a web app, web portal, online store, or SaaS.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Our team of experts is well-versed in a wide range of APIs, and we guarantee seamless integration with back ends and any third-party software.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      In addition, our ISTQB-certified test engineers can perform functional, performance, security, UX, and accessibility testing. 
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Once your app is launched, origin software offers post-launch L0-L3 support, compliance, security, and performance management &amp; app evolution.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      If you're looking to modernize your mobile app, look no further than Origin Softwares!
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h4>Our Client's</h4>
                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p> “ Outstanding about everything : Support is fast and perfect : I got answers to every questions I asked. Code quality is up to date, modern, structured, clear, easy to understand. Design is pure and esthetic. Origin Provide updates. Thank you Origin team for all of this! Keep going!” </p>
                        -Saboo Diagnostics
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>“ My project is totally customizable, clean with all the options you could want. The customer support is absolutely unsurpassed.” </p>
                        -Elite Dental Hospitals
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>“ Origin made my Website extremely well organised, the help and support is terrific and the options provided by the company are about the most perfect I've found - what more could you ask for? ”</p>
                        -Big Dry Fruits
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h4>Technologies We Use</h4>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>How much does it cost to develop a Mobile App? </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►	The cost of developing a mobile app depends on the app's functional scope as well as the technology of its implementation. <br></br>
                        ► A native app of medium complexity can cost anywhere from XYZ to XYZ. At Origin Softwares, we use an agile approach and cross-platform tools to minimize these costs.<br></br>
                        ► Depending on the scope and tech stack, mobile app development can take anywhere from 3 to 10 months. However, at origin software, we prioritize features and focus on the core ones first to reduce time-to-market.<br></br>
                        ► This allows us to roll out an MVP app in just 2-3 months. We also have a mature system of KPIs (budget required vs. budget remaining, cycle time, team’s proactivity, etc.) that we use in managing our mobile app projects. <br></br>
                        ► This ensures transparency and cooperation among our team members.<br></br>
                        ► At Origin Softwares, we understand that each app is unique and therefore will have different monetization needs. We offer additional benefits and services for all types of apps to help you maximize your revenue. <br></br>
                        ► For apps that are sold in mobile stores, our UX and UI design team can help create a store browsing experience that is enjoyable for users and results in high conversions. <br></br>
                        ► If your app uses ads or is a freemium app, we can help with ad placement to eliminate user frustration and feature prioritization to make sure the most important features are not hidden behind a paywall. <br></br>
                        ► For paid apps, we offer monitoring and compliance services with App Store and Google Play policies, as well as user issue resolution, to ensure a high rating. <br></br>
                        ► Origin Softwares is committed to helping you reinforce your app monetization strategy so you can achieve your desired results.<br></br>
                        ► There are a lot of different factors to consider when developing a mobile app, so it's important to choose the right service option for your project. <br></br>
                        ► We offer full mobile app development packages as well as specific services like feasibility studies, user research, tech stack advisory, platform, and device compatibility studies, budget estimation, and app architecture blueprints. <br></br>
                        ► If you're interested in learning more about our mobile app design and development services, click the button below.<br></br>
                        ► Our mobile app design and development services cover everything from UX research and UI design to app architecture design, mobile app development, back-end development, QA, integration, and rollout/publication. <br></br>
                        ► We also offer continuous evolution services to keep your app up-to-date.<br></br>
                        ► If you're interested in modernizing your mobile app, we offer a comprehensive suite of services including UX/UI audit & redesign, mobile app code review, mobile (+web) app re-engineering, architecture redesign, database redesign, and custom API development.<br></br>
                        ► To learn more about our mobile app development services, please reach out to our representatives. We'll be happy to share details about our past projects and how we can help you achieve your goals.<br></br>
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

export default MobileApps