import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
//import SectionTitle from '../elements/section-title/SectionTitle';

const CorporateBranding = () => {
  return (
    <>
      <SEO title="Corporate Branding" />
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
                <h1 className='color'>Corporate Branding</h1>
                <h2>Slider</h2>
                <p>
                  At the Origin Softwares branding agency in Hyderabad, we understand that in order to build a successful brand, you need to start with a strong foundation.<br></br><br></br>
                  Our team has over 9 years of experience in the branding industry, and we are always up-to-date with the latest trends and technology.<br></br><br></br>
                  We offer complete Corporate branding solutions for your business, including design, development, and more.<br></br><br></br>
                  Our creative team is dedicated to creating innovative methods to make your products stand out from the competition.
                </p>
                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call To Action</Link><br></br>

                <div className="row">
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    At Origin Softwares, we specialize in helping you create a strong brand identity that will make your business stand out in the Hyderabad market.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    We offer a full range of corporate branding services, from market research and brand strategy to brand design and advertising.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    Our in-house team of creative professionals is always up-to-date on the latest trends and technologies, so you can be confident that your brand is in good hands
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    At our branding agency, we provide a full suite of services that encompasses everything from design and creative strategy to digital marketing and advertising.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    Our team of experts specializes in helping companies to consolidate their brand identity and create a cohesive message that will resonate with their target audience.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                     Some of the corporate branding services we offer include brochure design, metro pillar branding, and smart card design. But no matter what service you choose, our ultimate goal is always the same: to help you make a great first impression that will set you apart from the competition
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h4>BRAND IDENTITY</h4>
                <p>
                ➔  Branding identity can be a lot like navigation. You want your audience to have a clear sense of where they are and where they're going. But you also want to be able to guide them through the unfamiliar territory without getting lost.<br></br>
                ➔  To create a successful branding identity, you need to have a clear understanding of your message, your audience, and your goals. Once you have all of that, you can create a positioning strategy that will help you increase your price.<br></br>
                ➔  Remember, honesty is the best policy when it comes to branding identity.<br></br>
                </p>

                <h4>GETTING STARTED</h4>
                <p>
                ➔  At Origin Softwares, we believe that the whole design process begins with an idea. After that, thoughts are written down in an innovative way to create a vision. This idea is known as Visual Advice or Information Design.<br></br>
                ➔  We make sure that our designs create a vast impact that helps our clients on all fronts. We want our clients' logos to be well-designed so that customers can recall their product and packaging design. But product designing is more than just about how the product looks.<br></br>
                ➔  People should connect with our clients' brands when they see their logo.<br></br>
                </p>

                <h4>OUR SERVICES</h4>
                <p>Add Services Here</p>

                <h4>BRAND YOUR BUSINESS WITH US</h4>
                <div className="row paper">
                  <div className=" col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>At Origin Softwares, we understand that brands are not built overnight. It takes months, sometimes even years, of hard work and dedication to create a brand that people can trust and believe in. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>As a branding agency in Hyderabad, India, we offer our clients a wide range of services that cover all aspects of branding, from design and development to marketing and advertising.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>We believe that a well-designed brand is a key to success for any business, which is why we offer our clients a complete package that covers everything they need to get their business off the ground.</p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p> Our team of experts will work closely with you to understand your business and your goals, and then develop a comprehensive branding strategy that will help you achieve your objectives.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>So if you're looking for a branding partner that can help you take your business to the next level, contact us today.
                        </p>
                      </div>
                    </div>
                  </div>
                </div><br></br>
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

export default CorporateBranding