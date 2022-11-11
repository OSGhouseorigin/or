import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import CounterPhp from '../component/counterup/CounterPhp';
// import SectionTitle from '../elements/section-title/SectionTitle';

const Php = () => {
  return (
    <>
      <SEO title='PHP' />
      <main className='main-wrapper'>
        <HeaderOne />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-3"><div className='sidebar-fixed'>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Ecommerce Development</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <Link to={process.env.PUBLIC_URL + "/WordPress"}>Wordpress</Link><br></br><br></br>
                        <Link to={process.env.PUBLIC_URL + "/Magento"}>Magento</Link><br></br><br></br>
                        <Link to={process.env.PUBLIC_URL + "/Php"}>PHP</Link><br></br><br></br>
                        <Link to={process.env.PUBLIC_URL + "/DotNet"}>.Net</Link><br></br><br></br>
                        <Link to={process.env.PUBLIC_URL + "/NodeJs"}>Node.Js</Link>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              </div>
              <div className="title-BC col-lg-9">
                <h1 className='color'>PHP Development</h1>
                <img className= 'img' src='../images/PHP.png' alt=''></img><br></br><br></br>
                <p>Origin Softwares PHP development services are perfect for those who need secure and powerful server-sides for their web applications.<br></br><br></br>
                  With our extensive experience in PHP web app development, we are able to tame the language and deliver robust web portals, B2C &amp; B2B web apps, CMSs, and other web-based PHP solutions.<br></br><br></br>
                  Trust us for your next custom PHP development project and enjoy the benefits that come while working with Origin Softwares.<br></br>
                </p>
                <div className='row'>
                  <CounterPhp colSize="col-lg-3 col-6" layoutStyle="" evenTopMargin="" />
                </div><br></br>

                <h2>Partnerships</h2>
                <p>Partnerships with Magento, Pimcore, and Akeneo.</p>
                <h6>Add Partnerships here</h6>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>What Makes Our PHP Web Development Company Stand Out?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►	At Origin Softwares, our team of experts has worked across a wide range of industries, including eCommerce, healthcare, banking, manufacturing, logistics, and professional services. <br></br>
                        ►	This allows us to really understand your business requirements in the best possible way.<br></br>
                        ►	When it comes to software design or web designing, we always make sure that it is stable (with load balancing, system health checks, and failure isolation), scalable (to be prepared for multiple nodes working in parallel), and responsive front-end (thanks to the back end being optimized with asynchronous calls, microservices, etc.).<br></br>
                        ► Technologies like AI, predictive analytics, and IoT can give you a competitive edge in software development. But knowing which technology to use for your project can be a challenge.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion><br></br>

                <h4>Our Happy Customers</h4>
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

                <h4>Technology Competencies</h4>
                <h6>Add Technologies</h6>

                <h4>Choose Your Cooperation Model</h4>
                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Our PHP website consultants can help you select the right technology mix for your project, or provide expert recommendations on how to solve tech challenges in an ongoing project.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      We can help you identify system bottlenecks, check security vulnerabilities and prepare an optimal scalability map.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Depending on the level of interaction you need, you can choose either an offshore dedicated team or team augmentation.
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h4>Selected Projects</h4>
                <h6>Add Case Studies</h6>

                <h4>Request CV</h4>
                <p>If you're looking for PHP developers or PHP development services experts who can help contribute to the success of your projects, look no further than our team of 55+ developers. We're confident that we have the right people for the job, so request a CV today.</p>


              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  )
}

export default Php