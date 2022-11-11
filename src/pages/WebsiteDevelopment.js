import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
// import SectionTitle from '../elements/section-title/SectionTitle';

const WebsiteDevelopment = () => {
  return (
    <>
      <SEO title='Website Development' />
      <main className='main-wrapper'>
        <HeaderOne />
        <div className='section-padding-equal'>
          <div className='container'>
            <div className="row row-40">
              <div className="col-lg-3">
                <div className='sidebar-fixed'>
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Website Development</Accordion.Header>
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
                <h1>Right</h1>
                <p>Website Development</p>
              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  )
}

export default WebsiteDevelopment