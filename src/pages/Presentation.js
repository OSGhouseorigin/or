import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const Presentation = () => {
  return (
    <>
      <SEO title="Presentation" />
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
                <h1 className='color'>Presentation Design</h1>
                <h2>Slider</h2>
                <p>Your corporate identity can be greatly enhanced by having a unique and stylish presentation folder design. If you're looking for a presentation folder design in India, we can help you create a look that will really help your business stand out from the competition.<br></br><br></br>
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

export default Presentation