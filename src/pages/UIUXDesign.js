import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import SectionTitle from '../elements/section-title/SectionTitle';

const UIUXDesign = () => {
  return (
    <>
      <SEO title='UI UX Design' />
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
                <h1>Right</h1>
                <p>UI UX Design</p>
              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  )
}

export default UIUXDesign