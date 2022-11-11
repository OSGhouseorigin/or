import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const LogoDesign = () => {
  return (
    <>
      <SEO title="Logo Design" />
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
                <h1 className='color'>Logo Design</h1>
                <h2>Slider</h2>
                <p>
                  Our Logo design company in India has a  design team that can help you create a brand that will take your company to the next level. We specialize in logo design, graphic design, and responsive website design.<br></br><br></br>
                  In today's competitive market, it's essential to have a proactive approach to marketing and publicity.<br></br><br></br>
                  Origin Softwares is among the best branding agencies in Hyderabad, India. Our team can help you highlight the character of your business and emphasize your product and services.<br></br>
                </p>


                <h4>Logo Designing Process</h4>
                <div className="row paper">
                  <div className="col-xl-6 col-lg-5">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h4 className="title">Creative Brief:</h4>
                        <p>An effective corporate logo is the foundation of any successful corporate identity. At origin software, we specialize in creating logos that perfectly represent our client's needs and objectives.<br></br>
                          We believe that a well-designed logo can positively impact potential customers and give your company a competitive edge.<br></br>
                          Our team takes the time to understand your business and design a business logo that communicates your mission and vision clearly and memorably.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left shadow-box mb--30">
                        <img className='img' src='../images/Web-Application.jpg' alt=''></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row paper">
                  <div className="col-xl-6 col-lg-5">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <img className='img' src='../images/Web-Application.jpg' alt=''></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h4 className="title">Doing the Research:</h4>
                        <p> As the best logo designing services provider in India, we firmly believe that research and action go hand-in-hand; neither can exist without the other. In this initial stage, we investigate your business and its industry inside and out.<br></br>
                          It allows us to understand what your competitors are up to and what strategies they use to engage potential customers.<br></br>
                          By understanding the latest trends in your industry, we can position your logo design ahead of the curve while maintaining a timeless look and feel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row paper">
                  <div className="col-xl-6 col-lg-5">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h4 className="title">Conceptual phase :</h4>
                        <p>At our company, we pride ourselves on our creative designers.
                          We believe they are some of the most talented in the industry and have a keen eye for detail in finding the right graphic style and image to represent your business.<br></br>
                          As the best logo design company in India, we offer a unique identity to your business based on aspects like aesthetic looks and the best user experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <img className='img' src='../images/Web-Application.jpg' alt=''></img>
                      </div>
                    </div>
                  </div>
                  <div className="row paper">
                    <div className="col-xl-7 col-lg-4">
                      <div className="why-choose-us">
                        <div className="section-heading heading-left">
                          <img className='img' src='../images/Web-Application.jpg' alt=''></img>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-4">
                      <div className="why-choose-us">
                        <div className="section-heading heading-left">
                          <h4 className="title">Fill it with brand Colors:</h4>
                          <p>We understand that coming up with a logo for your business can be a daunting task. But our team of professional and inventive logo designers is here to help!<br></br>
                            We'll work with you to develop a logo that not only represents your business well but also catches the eye of your target audience.<br></br>
                            We're proud to offer customized designing services that consider your ideas and inspiration to create a professional and memorable logo.<br></br>
                            Once our LOGO designer is satisfied with the sketch, they will move forward to fill in the colors and make it look more natural by trying various color combinations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h4>Client Approval</h4>
                <p>
                  ➔  Logo design is all about making your clients happy.<br></br>
                  ➔  We consider your feedback and ideas to create a logo that represents your business in the best way possible.<br></br>
                  ➔  You can expect significant results that exceed your expectations.<br></br>
                  ➔  At our company, we pride ourselves on creating perfect logos for our client's brands.<br></br>
                  ➔  Our logo design process is both professional and transparent, and it includes the following steps:<br></br>
                  1. We take the time to learn about your brand and what makes it unique.<br></br>
                  2. We brainstorm logo brand concepts that capture the essence of your brand.<br></br>
                  3. We refine the concepts and present them to you for feedback.<br></br>
                  4. Once you're happy with a concept, we complete the design and deliver the files.<br></br>
                </p>

                <h4>LOGO DESIGN  ( Brand Identity )</h4>
                <p>
                  ➔ A company's logo is much more than just an attractive piece of artwork. It reflects your company's vision and should be unique and trendy enough to help you stand out from the competition.<br></br>
                  ➔ Our logo designers will work closely with you to create a custom logo design that perfectly captures the essence of your business.<br></br>
                  ➔ Visit our website anytime to learn more about our logo design services.<br></br>
                </p>

                <h4>BUSINESS CARD</h4>
                <p>
                  ➔  A company's corporate identity is very important for sales and marketing. A signature business card design is essential for a company to build its brand image.<br></br>
                  ➔  Letterhead, envelopes, compliment slips, and fax sheets are all examples of office stationery vital to building a brand image.
                </p>

                <div className="row paper">
                  <div className=" col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>BROCHURE DESIGN</h6>
                        <p>Brochures are a great way to get information about a company out to the public. <br></br>
                          They can include statistics, product information, and details about special discounts.<br></br>
                          It makes them an effective tool for communication and marketing for any business.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>WEB DESIGN AND ECOMMERCE WEBSITE</h6>
                        <p>There is a wide range of websites, from simple static websites to eCommerce websites with shopping carts and payment gateways. <br></br>
                          At Origin Softwares, we have the expertise to design and develop a professional website to build your company's online presence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>PACKAGING DESIGN</h6>
                        <p>The design team is award-winning with years of expertise in designing commercial packaging. Our team is proficient in many areas of development of branding, across FMCG, Cosmetics, Food and Beverages, Automobiles to Pharmaceuticals.</p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>PROMOTIONAL PRODUCTS</h6>
                        <p> Branding is important for any company, but knowing where to start, is difficult. Logo Designers in Hyderabad, India, can help you get your brand out with promotional products like mugs, T-shirts, pens, or mouse pads with your company logo. <br></br>
                          By giving away these items, you'll be able to get your brand in front of potential customers and clients and build a positive association with your company.
                        </p>
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h6>Add Packages</h6>

                <h4>Other services</h4>
                <p>
                  1.	Digital Marketing Services<br></br>
                  2.	Mobile App Development<br></br>
                  3.	Social Media
                </p>

                <h4>FAQ</h4>
                <p>Customers frequently have questions when choosing a logo design company.<br></br>
                  To help give customers a clear initial idea about our work, we've compiled a list of FAQs below.<br></br>
                  These will address questions related to our process, pricing, and more.
                </p>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>How much time does it take to create a logo design?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►	As soon as we receive your complete request, our logo designers get to work brainstorming ideas for a unique and innovative logo design that meets your requirements. <br></br>
                        ► Once you've suggested all the tweaks and changes you'd like, the final logo is usually ready within 2-3 weeks.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the logo designing process work?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►  In our first meeting, we want to understand your ideas and vision for the logo. It includes understanding your likes, dislikes, and target audience. This way, we can develop a design concept that matches your needs. <br></br>
                        ►  We will develop and show you samples of the logo. After making all the changes and revisions, we will give you the final logo.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>What will be the cost of logo designing from Origin Softwares?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►  We offer three unique plans to businesses- Basic, Plus, and Premium. Each plan has benefits that you can choose based on your requirements and budget.<br></br> 
                        ►  You can mix and match services from each plan to create a unique package that works for your business.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Will I get support after the project gets done?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►  At our logo design company, we see our clients as our most valuable assets. We're not satisfied just completing the logo design process - we want to establish a long-term relationship with you.<br></br>
                        ► We're always happy to provide support and advice long after your logo is complete.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Is copyright registration done?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►   As among the top logo design agencies India-based, We will begin working on the copyright as soon as you complete the logo and make all the payments. <br></br>
                        ►   Copyright protection gives you exclusive rights to print, display, and distribute the logo so that you can do anything with it.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  )
}

export default LogoDesign