import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import DigMarD from '../component/service/DigMarD.js';
//import SectionTitle from '../elements/section-title/SectionTitle';

const DigitalMarketing = () => {
  return (
    <>
      <SEO title='Digital Marketing' />
      <main className='main-wrapper'>
        <HeaderOne />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-3">
                <div className='sidebar-fixed'>
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Digital Marketing</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <Link to={process.env.PUBLIC_URL + "/SEO1"}>SEO</Link><br></br><br></br>
                          <Link to={process.env.PUBLIC_URL + "/SMM"}>SMM</Link><br></br><br></br>
                          <Link to={process.env.PUBLIC_URL + "/PPC"}>PPC</Link>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="title-BC col-lg-9">
                <h1 className='color'>Digital Marketing</h1>
                <h2>Slider</h2>
                <p>At our next generation digital marketing agency in Hyderabad, we have a team of experts who know how to digital growth hack. Our team is also creative, dynamic, and collaborative. If you want to learn more about what we can do for you, schedule a call with us now.</p>

                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call To Action</Link><br></br><br></br>

                <h4>GO DIGITAL WITH US</h4>
                <div className="row">
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      At Origin Softwares, we understand that having a strong digital presence is essential for businesses in the modern age. We offer a platform designed to increase your digital presence and grow your business online. 
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Our digtal marketing services include marketing and awareness, traffic and leads, wider reach, and more. With our experience and industry knowledge, we can help you make the most of your digital presence and achieve your business goals.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      At Origin Softwares, we are focused on being the best digital marketing agency in Hyderabad. We offer a wide range of services including SEO, SMM, PPC marketing, Branding services, and Email marketing services.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      We are a well-known social media  and digital marketing company in Hyderabad that can help improve your overall website performance and conversions.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Origin Softwares provides complete website solutions, which includes various website (including E-commerce) development services, Digital marketing services in Hyderabad, Branding and design.
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h4>Our Approach</h4>
                <div className="row paper">
                  <div className="col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>AWARENESS:</h6>
                        <p>Brand awareness is key to successful digital marketing. We create quality content that is both creative and interesting, making sure you are heard, noticed, and remembered. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>CONSIDERATION:</h6>
                        <p>In such a competitive world, it can be difficult to stand out, but we help you do so by strategically positioning your brand for maximum visibility. <br></br>
                          We work to project your brand in a way that it is considered the one-stop solution for whatever needs your customer might have.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>CONVERSION :</h6>
                        <p>The goal of digital marketing is to convert potential leads into customers. We can help you improve your digital presence to increase your chances of generating leads and converting them into customers.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>ENGAGEMENT :</h6>
                        <p>It's just as important to retain existing customers as it is to acquire new ones. We engage your current customers with quality and innovative content to keep them coming back for more.</p>
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h4>Our Specialization as Digital Marketing Agency</h4>
                <p>
                ➔  Here at our Digital Marketing Agency, we specialize in making things more affordable for small to mid-sized enterprises. In today's cut-throat competition, it can be difficult to make your voice heard. <br></br>
                ➔  We are ready to help you deliver top-notch digital marketing services that will get you noticed.
                </p>


                <h4>Our clients</h4>
                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p> “ Outstanding about everything : Support is fast and perfect : I got answers to every questions I asked. Code quality is up to date, modern, structured, clear, easy to understand. Design is pure and esthetic. Origin Provide updates. Thank you Origin team for all of this! Keep going!” </p>
                        -Saboo Diagnostics
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>“ My project is totally customizable, clean with all the options you could want. The customer support is absolutely unsurpassed.” </p>
                        -Elite Dental Hospitals
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>“ Origin made my Website extremely well organised, the help and support is terrific and the options provided by the company are about the most perfect I've found - what more could you ask for? ”</p>
                        -Big Dry Fruits
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h4>Our Services</h4>
                <div className='row'>
                  <DigMarD colSize = "col-xl-6 col-md-2" servicestyle = "" itemshow = "4"/>
                </div>

                <h4>OUR PORTFOLIO</h4>
                <p>ADD PORTFOLIO </p>


              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  )
}

export default DigitalMarketing