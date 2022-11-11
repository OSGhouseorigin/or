import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UXDesign = () => {
  return (
    <>
      <SEO title='UX Design' />
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
                <h1 className='color'>UX Design Services (User Experience)</h1>
                <h2>Slider</h2>
                <p>UX design services: User experience design is about more than just making software that looks pretty. It's also about making sure that users have a smooth and easy experience when using the software. <br></br><br></br>
                  Origin Softwares comprehensive approach to UX design means that we take care of everything from user satisfaction to maximizing the use of features.<br></br></p>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Aimed at Achieving High Adoption and Conversion Rate?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      ► Our aim is always to achieve a high adoption and conversion rate, so you can be sure that you're getting the best possible UX design when you work with us.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>What UX Services Include?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      ►	User research and analysis are important for understanding your audience.<br></br>
                      ►	This can be done through competitor analysis, web analytics, user interviews, and initial user testing.<br></br>
                      ►	From this data, you can create personas and scenarios. persona are fictional profiles of your real users and scenarios are user-software interaction patterns. <br></br>
                      ►	These different scenarios are combined to create a comprehensive user journey map.<br></br>
                      ►	Wireframing and prototyping are two important tools for product managers. By wireframing, you can create a visual representation of your app or website. <br></br>
                      ►	This can be helpful in communicating your vision to others on your team. Prototyping allows you to test your ideas before investing in front-end development. <br></br>
                      ►	By testing your prototypes, you can eliminate potential UX errors and ensure a high-quality UX design.<br></br><br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Why Origin Softwares?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      ► Origin Softwares' 9 years in the IT industry, shows our dedication and expertise in the field. <br></br>
                      ► Our UX team is experienced and ready to work on your project. <br></br>
                      ►  We believe in rigorous testing to ensure the quality of our work and eliminate any chances of critical errors.<br></br><br></br>
                        <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call To Action</Link><br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Why UX Design Matter?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      ► We know that users will switch to a competitor if they aren’t satisfied with the current UX, which is why we always start with UX research or audit. <br></br>
                      ► This allows us to learn what benefits user experience design or redesign can offer to you. <br></br>
                      ► With our result-driven approach, you can be sure that you’ll see a return on your investment in user experience.<br></br>
                      ► If your users are unhappy with your product's current UX, there's a 79% chance they'll switch to a competitor. <br></br>
                      ► You can improve conversion rates by 400% or more by investing in high-quality UX. For every $1 you invest in user experience, you'll see a $100 return.<br></br><br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>What do You get with Our UX Design?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <h6>Result-Driven Approach</h6>
                        ► Our approach is always results-driven. We begin with UX research (for software in development) or a UX audit (for developed software) to learn how user experience design or redesign can benefit you. <br></br>
                        ► We also recommend iterative UX optimization, which allows us to introduce UX improvements and analyze their effect along the way<br></br><br></br>
                        <h6>Maximum User Flow Coverage</h6>
                        ► To make sure that our personas reflect all typical behavior patterns for your audience, we create user scenarios that cover 90%-95% of all possible interaction situations. <br></br>
                        ► For the remaining ~10%, we conduct additional research during the user journey mapping stage.<br></br><br></br>
                        <h6>UX and UI Design Service Bundle</h6>
                        ► Our UI design and UX design services are closely interconnected and share the objective of facilitating users’ interaction with the software.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>Why You Should Invest in UX Design services?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      ► If you're part of the 73% of companies that understand that user experience is crucial to success, then you're already ahead of the curve. <br></br><br></br>
                      ► UX design is more important than ever before, and if you choose to ignore that fact, you'll be at a disadvantage compared to your competition.<br></br><br></br>
                      ► Don't let your business lag behind - invest in UX design and see conversions increase sixfold.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion><br></br><br></br>

                <h4>Our UX Design Service Options</h4>
                We're experts at crafting amazing user experiences for our clients. Whether you need a one-time service or continuous support, we'll work with you to iteratively improve your UX. <br></br><br></br>
                Some of the areas we specialize in include eCommerce, web and mobile app design, and SaaS. With our help, you can increase your average customer lifetime value, the number of visitors, and the subscription renewal rate.<br></br><br></br>

                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h5>Ecommerce UX design: </h5>
                      eCommerce store experience that will greatly increase your average customer lifetime value (clv).
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h5>Web and/or mobile app UX design: </h5>
                      Incredible UX of your app across all devices to increase the number of visitors and their session time.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h5>SaaS UX design: </h5>
                      SaaS user experience that ensures fast onboarding and a high subscription renewal rate.
                      </div>
                    </div>
                  </div>
                </div><br></br><br></br>

                <h4>Don’t Lag Behind in the User Experience Race!</h4>
                With Origin Softwares experienced team on your side, you're sure to create a great user experience that will keep your customers coming back for more.<br></br><br></br>
                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call TO Action</Link><br></br>
              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  )
}

export default UXDesign