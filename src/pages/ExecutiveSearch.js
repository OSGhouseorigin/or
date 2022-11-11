import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const ExecutiveSearch = () => {
  return (
    <>
      <SEO title='Executive Search' />
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
                <h1 className='color'>Executive Research</h1>
                <h2>Slider</h2>
                <p>
                  Origin Softwares always uses its original executive research methods for every project. But if you want, you can buy extra in-depth research about your choice of target companies too. <br></br><br></br>
                  This research comes in the form of a spreadsheet that has all the info you need, like the person's name and contact information, what company they work for, what their title is, and any diversity data points you requested.<br></br><br></br>
                  Also, new research is created for every new position that gets requisitioned. We do this because it's the best way to identify the right pool of professionals who fit the criteria for your available positions.<br></br><br></br>
                  This, combined with our expert internet sourcing techniques, allows us to efficiently provide our clients with the most accurate and up-to-date long and short lists of qualified individuals at competitor firms.<br></br><br></br>
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

export default ExecutiveSearch