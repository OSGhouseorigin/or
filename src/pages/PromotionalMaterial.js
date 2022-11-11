import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const PromotionalMaterial = () => {
  return (
    <>
      <SEO title="Promotional Material" />
      <main className='main-wrapper'>
        <HeaderOne />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-3">
                <div className='sidebar-fixed'>
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header> Corporate Branding</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <Link to={process.env.PUBLIC_URL + "/LogoDesign"}>Logo Design</Link><br></br><br></br>
                          <Link to={process.env.PUBLIC_URL + "/Brochure"}>Brochure</Link><br></br><br></br>
                          <Link to={process.env.PUBLIC_URL + "/Presentation"}>Presentation</Link><br></br><br></br>
                          <Link to={process.env.PUBLIC_URL + "/InformativeVideo"}>Informative Video</Link><br></br><br></br>
                          <Link to={process.env.PUBLIC_URL + "/PromotionalMaterial"}>Promotional Material</Link>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="title-BC col-lg-9">
                <h1 className='color'>Promotional Materials</h1>
                <h2>Slider</h2>
                <p>Looking for the perfect promotional item? Whatever you have in mind, we can make it happen. From mugs to handbags to button pins, we guarantee that our products are of the highest quality. <br></br><br></br>
                  We take care of everything from the logo design to the smallest details, and we offer our services at highly competitive prices. We are a team of professionals who are dedicated to producing the best possible results. Contact us and let’s explore the possibilities.<br></br><br></br>
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

export default PromotionalMaterial