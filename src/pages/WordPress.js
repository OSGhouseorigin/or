import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import WP from '../component/service/WP'
// import SectionTitle from '../elements/section-title/SectionTitle';

const WordPress = () => {
  return (
    <>
      <SEO title='Word Press' />
      <main className='main-wrapper'>
        <HeaderOne />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-3">
                <div className='sidebar-fixed'>
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
                <h1 className='color'>WordPress Development</h1>
                <img className= 'img' src='../images/Wordpress.png' alt=''></img><br></br><br></br>
                <p>
                  Origin Softwares is a leading WordPress development company in India that provides affordable WordPress web development services that are reliable.<br></br>
                  WordPress is the way to go if you're looking for a great content management system that will improve your development experience.
                </p>
                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call To Action</Link><br></br><br></br>

                <div className='row'>
                  <WP colSize="col-xl-6 col-md-4" serviceStyle="" itemShow="4" />
                </div><br></br><br></br>

                <h4>Our WordPress development services are as follows</h4>
                ➔  WordPress plugin creation <br></br>
                ➔  WordPress services with no header (Headless CMS)<br></br>
                ➔  Creation of WordPress themes <br></br>
                ➔  Theme customization for WordPress<br></br><br></br>

                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>Origin Softwares specializes in WordPress development services that are tailored to your company's specific needs. Our team of designers and developers is passionate about creating WordPress websites and themes.</p>
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>Our experts have the skills and experience necessary to provide high-quality services that meet your expectations.  </p>
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>Contact us today if you're looking for a WordPress website development company that can create a custom website for your business.</p>
                      </div>
                    </div>
                  </div>
                </div><br></br><br></br>

                <h4>Our WordPress website development services include</h4>
                <p>Here at Origin Softwares, we pride ourselves on being the top WordPress development company.<br></br>
                </p>
                <div className="row paper">
                  <div className="col-xl-6 col-lg-5">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p> We offer a wide range of services that cover everything you need to get your WordPress site up and running. These WordPress solutions include:</p>
                        <ul>
                          <li>WordPress Blog Development </li>
                          <li>WordPress Web Development </li>
                          <li>Responsive Website Development</li>
                          <li>WordPress installation &amp; setup </li>
                          <li>Template &amp; Theme for WordPress </li>
                          <li>Custom WordPress Plugin Development</li>
                          <li>WordPress Migration Support and Maintenance </li>
                          <li>WordPress Website Designing Services </li>
                          <li>Mobile App Development</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left shadow-box mb--30">
                        <img className='img' src='../images/Web-Application.jpg' alt=''></img>
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>So why should you choose us for all your WordPress needs?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►  We're focused on providing cutting-edge technology and customization to all our clients. if you're looking for a team to help you create a truly unique WordPress site, look no further than Origin Softwares!<br></br>
                        ►  Origin Softwares is the best choice for a WordPress development partner. We offer experienced and expert WordPress developers who can provide smooth website functionality and a user-friendly interface.<br></br>
                        ►  Our team is dedicated to empowering and strengthening your company. In addition to building websites, our qualified WordPress developers also optimize websites for search engines.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Why choose Origin Softwares?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►   We provide smooth website functionality<br></br>
                        ►   Hire WordPress developers with experience and expertise<br></br>
                        ►   Custom WordPress Theme Development<br></br>
                        ►   SEO Friendly Structure<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion><br></br>

                <h4>Our WordPress development projects</h4>
                <h6>Add Portfolio Here</h6>

                <h4>Our WordPress website development process</h4>
                <h6>Add Process Infographic Here</h6>
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

export default WordPress