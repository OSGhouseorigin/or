import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import NodeJSD from '../component/service/NodeJSD';
// import SectionTitle from '../elements/section-title/SectionTitle';

const NodeJs = () => {
  return (
    <>
      <SEO title='Node.Js' />
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
                <h1 className='color'>Node.js Development </h1>
                <img className= 'img' src='../images/Node JS.png' alt=''></img><br></br><br></br>
                <p>If you're looking for a company that provides Node.js development services, you've come to the right place.<br></br>
                  Origin Softwares developers use Node.js to efficiently deliver fast, highly scalable software solutions for large-scale industries, including healthcare, retail, and financial services.<br></br>
                </p>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Looking for a Node.js Development Company?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►   Our Node.js outsourcing services are of the highest quality, due in part to our pre-vetted Node.js developers and dedicated node.js teams.<br></br><br></br>
                        ►   Additionally, we provide high-performance development solutions with Node.js at the core. Contact us today to learn more about how we can help you achieve your software development goals and business requirements.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Why Origin Softwares?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►   At Origin Softwares, our developers have an average of 9 years of experience working with Node.js.<br></br>
                        ►   We can set up cooperation within 5 days and specialize in cutting-edge technologies like computer vision, machine learning, IoT, big data, AR, VR, and blockchain.<br></br>
                        ►   Our development processes are mature and include Agile methodology, DevOps practices, and cloud-native development.<br></br>
                        ►   Our headquarters are located in Hyderabad, but we also have offshore development centers in Saudi Arabia and offices in USA, UK, and Sweden.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>What do We develop with Node.js?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►  With Node.js, we develop a wide range of web and mobile apps (data-intensive real-time apps, cloud-native, single-page), web app server side, and custom APIs.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion><br></br>
                <h4>Our Node. Js-Related Development Skills</h4>
                <p>ADD THE SKILLS HERE</p>

                <h4>Featured Node.js Development Projects</h4>
                <p>ADD PROJECTS AND CASE STUDIES</p>

                <h4>OUR INDUSTRY EXPERTISE</h4>
                <p>ADD THE INDUSTRIES WITH LINKS</p>

                <h4>Our Code Quality Practices in Node.js Development</h4>
                There are a few things that good code should have:

                <div className='row'>
                  <NodeJSD colSize="col-xl-6 col-md-4" serviceStyle="" itemShow="4" />
                </div>

                <h4>Our Experts Say</h4>
                <p>ADD EXPERTS TESTIMONY</p>

                <h4>Choose Your Cooperation hiring Model.</h4>
                <p>
                  ➔  We can provide Node.js resources to augment your project team(s) or cover full-cycle Node.js application development.<br></br>
                  ➔  It includes project management, business analysis, UX and UI design, testing, and QA.<br></br>
                  ➔  Our experienced and highly skilled professionals can help ensure that your software is delivered on time and within budget while meeting all business and user needs.<br></br>
                  ➔  Team augmentation with Node.js developers can help you fill the skill gaps and get the job done quickly and efficiently.<br></br>
                  ➔  T&amp;M is the most suitable pricing model for this type of work. Alternatively, you could outsource the entire node.js development services project or part of it to reduce management efforts and streamline project delivery.<br></br>
                </p>

                ADD THE PRICING MODEL HERE WITH A CALL TO ACTION<br></br>
                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call To Action</Link><br></br><br></br>


              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  )
}

export default NodeJs