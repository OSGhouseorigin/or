import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const OffshoreStaffing = () => {
  return (
    <>
      <SEO title='Offshore Staffing' />
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
                <h1 className='color'>OffShore Staffing Services</h1>
                <h2>Slider</h2>
                <p>Working with an offshore staffing service can help you get your digital projects off the ground quickly and efficiently. <br></br><br></br>
                  With a wealth of talent to choose from, you can find the perfect team to support your project every step of the way. <br></br><br></br>
                  From experienced IT professionals to those with strong work ethics and attention to detail, our offshore staff are hand-picked and rigorously trained to deliver outstanding results. <br></br><br></br>
                  Not to mention, sourcing talent overseas can help you save on personnel and infrastructure costs. So if you're looking for greater organizational agility, working with an offshore staffing agency is the perfect solution.<br></br>
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

export default OffshoreStaffing