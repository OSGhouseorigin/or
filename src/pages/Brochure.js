import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const Brochure = () => {
  return (
    <>
      <SEO title="Brochure" />
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
                <h1 className='color'>Brochure Design</h1>
                <h2>Slider</h2>
                <p>The Importance of Brochure Design<br></br><br></br>
                  In today's digital world, print media still plays an important role in marketing and advertising. Traditional print media provides consumers with something tangible to hold onto and view.<br></br><br></br>
                  At Ideal branding, we understand the importance of brochure and poster design. We have a team of experienced designers who are dedicated to creating posters and brochures that are both creative and eye-catching, while still delivering your message and maintaining your brand image.
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

export default Brochure