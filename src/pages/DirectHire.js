import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const DirectHire = () => {
  return (
    <>
      <SEO title='Direct Hire' />
      <main className='main-wrapper'>
        <HeaderOne />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-3">
                <div className='sidebar-fixed'>
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>IT Staffing</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <Link to={process.env.PUBLIC_URL + "/Recruitment"}>Recruitment</Link><br></br><br></br>
                          <Link to={process.env.PUBLIC_URL + "/Resources"}>Resourses</Link><br></br><br></br>
                          <Link to={process.env.PUBLIC_URL + "/ContractStaffing"}>Contract Staffing</Link><br></br><br></br>
                          <Link to={process.env.PUBLIC_URL + "/DirectHire"}>Direct Hire</Link><br></br><br></br>
                          <Link to={process.env.PUBLIC_URL + "/ExecutiveSearch"}>Executive Search</Link><br></br><br></br>
                          <Link to={process.env.PUBLIC_URL + "/OffshoreStaffing"}>Offshore Staffing</Link>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="title-BC col-lg-9">
                <h1 className='color'>Direct Hire</h1>
                <h2>Slider</h2>
                <p>Any direct hire staffing agency can place a person in an open position, but our recruiters focus on finding the right fit for each role. It may seem like a subtle difference, but it makes a big difference in helping you connect with the most qualified IT and engineering talent.</p>
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

export default DirectHire


