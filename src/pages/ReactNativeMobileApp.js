import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import ReNaMA from '../component/service/ReNaMA';

const ReactNativeMobileApp = () => {
  return (
    <>
      <SEO title="React Native Mobile App" />
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
                <h1 className='color'>React Native App Development </h1>
                <h2>Slider</h2>
                <p>Choosing our React Native app development company means partnering with a team of creative professionals who will amplify your vision and help you quickly achieve business growth with react native app development services.<br></br><br></br>
                  We have the experience and expertise to take your vision and turn it into a reality, faster than you ever thought possible.<br></br>
                </p>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are we the top-rated React Native app development company?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►	We are the top-rated React Native app development company because we believe in the power of human-centered design combined with the features of React Native.<br></br><br></br>
                        ►	Our experience is unmatched, as we have delivered next-gen mobile app development services to hundreds of global clients across different industries for over 13 years. <br></br><br></br>
                        ►	We are consistent in our delivery and have a track record of success, having delivered more than 2000 mobile apps, digital portals, and business solutions. <br></br><br></br>
                        ►	Our team is our most valuable asset, as each member brings something unique to the table that helps us create amazing solutions for our clients.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion><br></br>

                <h4>Success Stories</h4>
                <p>
                  ➔  We have inspired success stories from all of the React Native app development services we have used in the past. Our code and design skills have allowed us to change the game for many businesses.<br></br>
                  ➔  You can check our inspiring success stories to see our dedication and passion for what we do.
                </p><p>Add the portfolio here</p>

                <h4>Our featured clients</h4>
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

                <h4>Advantages of using React Native for mobile app development</h4>
                <p>React Native has quickly become one of the most popular mobile app development platforms for developers all over the world. Here are some of the main benefits of using React Native for developing your mobile app: <br></br><br></br>
                  ➔  When it comes to creating a fast and responsive user interface, React Native excels.<br></br>
                  ➔  React Native is a cross-platform framework, which means that you can develop your app for both iOS and Android using the same codebase.<br></br>
                  ➔  There is a large community of React Native developers who are always willing to help out or answer any questions you may have.
                </p>

                <div className='row'>
                  <ReNaMA colSize="col-xl-6 col-md-6" servicestyle="" itemshow="6" />
                </div><br></br>

                <p>
                  React Native is a popular choice for cross-platform mobile app development, and our React Native app development company offers services to help you make the most of this powerful tool.<br></br><br></br>
                  We offer consultation services to help you choose the right platform and features for your next mobile app project, as well as full-fledged, react native app development services that cover everything from wire-framing and prototyping to design, development, testing, and launch.
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

export default ReactNativeMobileApp