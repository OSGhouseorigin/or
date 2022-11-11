import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import SEO from "../common/SEO";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
//import { StickyContainer, Sticky } from "react-sticky";

// import { useParams } from 'react-router-dom';
// import SD from '../data/SoftDev/SD.json';
// import Slider from "react-slick";
// import CtaLayoutOne from '../component/cta/CtaLayoutOne';
// import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
// import SectionTitle from '../elements/section-title/SectionTitle';

const SoftwareDevelopment = () => {
  return (
    <>
      <SEO title="Software Development" />
      <main className="main-wrapper">
        <HeaderOne />
        <div className="section-padding-equal">

          <div className="container">
            <div className="row row-40 ">
              <div className="col-lg-3 ">
              
                <div className="sidebar-fixed">
                
                  {<Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Software Development</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <Link
                            to={process.env.PUBLIC_URL + "/SoftwareConsulting"}
                            >
                            Software Consulting
                          </Link>
                          <br></br>
                          <br></br>
                          <Link
                            to={
                              process.env.PUBLIC_URL +
                              "/CustomSoftwareDevelopment"
                            }
                            >
                            Custom Software Development
                          </Link>
                          <br></br>
                          <br></br>
                          <Link
                            to={
                              process.env.PUBLIC_URL +
                              "/SoftwareDevelopmentOutsourcing"
                            }
                            >
                            Software Development Outsourcing
                          </Link>
                          <br></br>
                          <br></br>
                          <Link
                            to={
                              process.env.PUBLIC_URL +
                              "/SoftwareProductDevelopment"
                            }
                            >
                            Software Product Development
                          </Link>
                          <br></br>
                          <br></br>
                          <Link
                            to={
                              process.env.PUBLIC_URL +
                              "/SoftwareDevelopmentAutomation"
                            }
                            >
                            Software Development Automation
                          </Link>
                          <br></br>
                          <br></br>
                          <Link
                            to={
                              process.env.PUBLIC_URL +
                              "/SoftwareMaintenanceAndSupport"
                            }
                            >
                            Software Maintenance and support
                          </Link>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>}
                </div>
              </div>
              <div className="title-BC col-lg-9">
                <h1 className="color">Software Development</h1>
                <div>
                  <img
                    className="img"
                    src="../images/SOFTWARE DEVELOPMENT.png"
                    alt=""
                  />
                </div>
                <br></br>
                <br></br>

                <p>
                  Origin Softwares is a top software development company in
                  India, offering a wide range of software development services.
                  <br></br>
                  <br></br>
                  Origin Softwares is a renowned name in software development
                  work. we offer services to start-up, small and medium
                  enterprises. <br></br>
                  <br></br>
                  Since 9 Years. Origin Softwares has developed incredible
                  software for various industries like retail, banking, school
                  management, etc.<br></br>
                  <br></br>
                  We believe in quality rather than quantity which draws our
                  clients in.<br></br>
                  <br></br>
                  Origin Softwares Design, develop, and deploy software that
                  meets the needs of businesses and government.<br></br>
                  <br></br>
                  <Link
                    to={process.env.PUBLIC_URL + "/contact"}
                    className="axil-btn btn-fill-primary btn-small"
                  >
                    Request Quote
                  </Link>
                  <br></br>
                </p>

                <div className="row paper ">
                  <h4 className="title">
                    Some incredible Softwares We’ve developed
                  </h4>
                  <div className="col-xl-6 col-lg-5">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <ul>
                          <p>
                            At our company, we are always looking for ways to
                            incorporate IT innovations into our work. Our team
                            has a wide range of skills and experience with
                            different types of software development.
                          </p>
                          <li>Enterprise software</li>
                          <li>Industrial software</li>
                          <li>Customer experience</li>
                          <li>Digital channels for the customers</li>
                          <li>Data management software</li>
                          <li>Artificial intelligence(AI)</li>
                          <li>Smart solutions</li>
                          <li>Productivity &amp; Knowledge </li>
                          <li>Emergency &amp; security</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left shadow-box mb--30">
                        <img
                          className="img"
                          src="../images/Web-Application.jpg"
                          alt=""
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row paper">
                  <h4 className="title">Support Industry-Specific Processes</h4>
                  <div className="col-xl-6 col-lg-5">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <ul>
                          <p>
                            Click on the icons below to see some of our most
                            notable projects in the industries that interest
                            you.
                          </p>
                          <li>Manufacturing</li>
                          <li>Healthcare</li>
                          <li>Retail</li>
                          <li>Banking &amp; Financial Services</li>
                          <li>Telecoms</li>
                          <li>Oil and Gas</li>
                          <li>Entertainment</li>
                          <li>Logistics and Transportation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left shadow-box mb--30">
                        <img
                          className="img"
                          src="../images/Web-Application.jpg"
                          alt=""
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>

                <h4>Advanced Business Tasks</h4>
                <p>
                  ➔ We have successfully completed projects in a variety of
                  industries, including big data, artificial intelligence, the
                  internet of things, computer vision, augmented reality (AR),
                  virtual reality (VR), and blockchain.<br></br>➔ You can find
                  more information about our company's capabilities on our
                  website.
                </p>

                <h4>Incredible Software We developed</h4>
                <p>Add the portfolio here </p>

                <h4>Partnerships</h4>
                <p>Add partnerships here</p>

                <h4>Our clients</h4>
                <p>Add client names here</p>

                <h4>Values of our clients</h4>
                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>
                          {" "}
                          “ Outstanding about everything : Support is fast and
                          perfect : I got answers to every questions I asked.
                          Code quality is up to date, modern, structured, clear,
                          easy to understand. Design is pure and esthetic.
                          Origin Provide updates. Thank you Origin team for all
                          of this! Keep going!”{" "}
                        </p>
                        -Saboo Diagnostics
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>
                          “ My project is totally customizable, clean with all
                          the options you could want. The customer support is
                          absolutely unsurpassed.”{" "}
                        </p>
                        -Elite Dental Hospitals
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>
                          “ Origin made my Website extremely well organised, the
                          help and support is terrific and the options provided
                          by the company are about the most perfect I've found -
                          what more could you ask for? ”
                        </p>
                        -Big Dry Fruits
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>

                <h4>Software Development Plans</h4>
                <div className="row">
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>
                          Software Development: From Plan to Delivering Value
                        </h6>
                        <p>
                          There are two main types of software development:
                          enterprises and software products for companies and
                          startups. Each type has its own process and
                          methodology.
                        </p>
                        <h6>Choosing an Optimal Pace for Your Project</h6>
                        <p>
                          Software product companies and startups usually use
                          scrum development or kanban development. These methods
                          focus on delivering value to the customer as quickly
                          as possible.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Software Development Methodologies We Employ</h6>
                        <p>
                          {" "}
                          Enterprises typically use a methodology called agile.
                          In this approach, the software is developed in small
                          portions and new features are delivered on a regular
                          basis.{" "}
                        </p>
                        <p>
                          This allows for continuous improvement and
                          collaboration between the development team and the
                          client.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>

                <h4>
                  Our highlights on the leading software development company in
                  India
                </h4>
                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>
                          Our software development team is experienced in large,
                          complex projects with distributed teams and multiple
                          vendors.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>
                          We have an in-house project management office (PMO)
                          that oversees all aspects of the software development
                          process, from envisioning and planning to design,
                          developing, integrating, deploying, and supporting
                          software solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <p>
                          Our software development services are built around
                          strict KPIs that measure business outcomes, quality of
                          delivered software, code quality, development process
                          efficiency, project time and costs, team productivity,
                          user experience, and user satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>

                <h4>Packages for Our Services based on pricing</h4>
                <p>Add our packages here</p>
                <div className="row">
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Fixed price</h6>
                        <p>
                          The fixed price model is best for feasibility studies,
                          proof of concept projects, and small software
                          development projects with well-defined and stable
                          requirements.<br></br>
                          With this type of pricing, you pay a set price as
                          determined by a contract.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Time &amp; Material with a cap</h6>
                        <p>
                          Time and material contracts, as well as time and
                          material contracts with an upper limit, are best for
                          advisory activities such as business processes
                          analysis, architecture design, and project planning.
                          <br></br>
                          With this type of pricing, you receive an invoice at
                          the end of each month based on the hours or effort
                          expended during that month (up to the stated limit in
                          the case of time and material contracts with a cap).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Per-ticket pricing : </h6>
                        <p>
                          Per-ticket pricing is best for L1 and L2 application
                          support. With this pricing model, you pay for each
                          incident we resolve.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Fixed monthly fee :</h6>
                        <p>
                          Fixed monthly fees are best for L3 application
                          support, which includes in-code defect fixes and
                          functional changes. With this pricing model, you pay a
                          set monthly fee for the services we provide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>

                <h4>Our software development process</h4>
                <p>
                  ➔ We work with you to first understand what business goals you
                  hope to achieve with this project. <br></br>➔ Whether it's
                  increasing revenue, reducing costs, or streamlining processes,
                  we make sure that your goals are always our top priority.
                  <br></br>➔ We then develop a plan and budget that will help us
                  achieve those goals as efficiently as possible. <br></br>➔ And
                  finally, we continuously monitor the progress of the project
                  against those goals to make sure that we are always on track.
                  <br></br>➔ At Origin Softwares as the best software
                  development company in India, we pride ourselves on being able
                  to take on full responsibility for your project from start to
                  finish. <br></br>
                  <br></br>
                  <Link
                    to={process.env.PUBLIC_URL + "/contact"}
                    className="axil-btn btn-fill-primary btn-small"
                  >
                    Request Quote
                  </Link>
                  <br></br>
                </p>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Why Origin Softwares?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ► At Origin Softwares, we have a long track record of
                        successful software projects across a wide range of
                        industries. <br></br>
                        <br></br>► We develop software solutions that are
                        tailored to the specific needs of our clients in
                        different industries, always keeping an eye on the
                        latest technologies and latest industry trends.<br></br>
                        <Link
                          to={process.env.PUBLIC_URL + "/contact"}
                          className="axil-btn btn-fill-primary btn-small"
                        >
                          Request Quote
                        </Link>
                        <br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      What Service Are You Looking For?
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        Select your service and dive into the details of the
                        services.<br></br>
                        <br></br>
                        <h6>Custom software development services</h6>► Our
                        company offers custom software solutions that fit your
                        needs. The delivery is fast with excellent software and
                        zero errors.<br></br>
                        <br></br>
                        <h6>Software product development</h6>► At Origin
                        Softwares, we pride ourselves on our ability to help
                        startups and ISVs not only envision successful software
                        products but also to launch Minimum Viable Products
                        (MVPs) in a timeframe of 1-4 months.<br></br>
                        <br></br>
                        <h6>Development team augmentation</h6>► We have a highly
                        skilled team of software developers and architects who
                        are experienced in the back-end, front-end, web
                        applications, and mobile application development.
                        <br></br>► we are able to provide a self-managed team
                        for your project.<br></br>
                        <br></br>
                        <h6>Software support and maintenance</h6>► We provide
                        support for your current employees &amp; users, constant
                        software performance monitoring, optimization, and quick
                        issue solution. We can also safely add new features and
                        integrations.<br></br>
                        <br></br>
                        <h6>Full software development outsourcing</h6>► Our team
                        has extensive experience developing all types of
                        software, including web and mobile apps, cloud
                        applications, SaaS products, desktop applications, and
                        libraries.<br></br>► Origin Softwares has been working
                        in the IT industry for over 9 years of experience and
                        our team of IT professionals is ready to take on your
                        project.<br></br>
                        <br></br>
                        <Link
                          to={process.env.PUBLIC_URL + "/contact"}
                          className="axil-btn btn-fill-primary btn-small"
                        >
                          Request Quote
                        </Link>
                        <br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>How We Ensure Quality?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        At our company, quality is a top priority from the very
                        beginning stages of development all the way through to
                        the final product.<br></br>► We have a quality
                        management system in place that is ISO 9001 certified,
                        and we have various controls and guidelines in place to
                        ensure that our code is of the highest quality.<br></br>
                        <br></br>► This includes adhering to a style guide,
                        commenting on complex code, breaking up code into small
                        logical units, and conducting code reviews.<br></br>
                        <br></br>► We also use code quality metrics to measure
                        the maintainability and complexity of our code.<br></br>
                        <br></br>► By following these practices, we can ensure
                        that our products meet the highest standards of quality.
                        <br></br>
                        <br></br>● All types of testing:<br></br>
                        <br></br>► At our software testing facility, we provide
                        all different types of testing services including
                        functional, integration, performance, usability, and
                        security.<br></br>
                        <br></br>► We recommend that for large projects,
                        customers automate their functional and performance
                        testing in order to get optimal coverage at a lower
                        cost. Our ISO 27001 certification ensures that our
                        customer's information is always kept secure.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Why contact us?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ► At our company, we are recognized for the software
                        development domain expertise and support. <br></br>► We
                        can help you plan and build new software that achieves
                        your business goals while keeping costs low.<br></br>►
                        We also have experience supporting existing software, so
                        you can be confident that your investment is
                        well-protected.<br></br>► We also offer cross-platform
                        development, and web apps development services and aim
                        for the digital transformation of small &amp; medium
                        businesses<br></br>
                        <Link
                          to={process.env.PUBLIC_URL + "/contact"}
                          className="axil-btn btn-fill-primary btn-small"
                        >
                          Contact Us
                        </Link>
                        <br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  );
};

export default SoftwareDevelopment;

// const allBD = SD();

// const params = useParams();
//     const blogId = parseInt(params.id);

//     const getBlogData = allBD.filter(blog => blog.id === blogId);
//     const detailsBlog = getBlogData[0];

//     var slideSettings = {
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,

//       };

// {
//     Array.isArray(detailsBlog.large_thumb) ?
//     <Slider {...slideSettings} className="slick-arrow-nav">
//         {detailsBlog.large_thumb.map((data, index) => (
//             <div className="slide-item" key={index}>
//                 <img src={`${process.env.PUBLIC_URL}/${data}`} alt="Blog" />
//             </div>
//         ))}

//     </Slider>
//     : <img src={`${process.env.PUBLIC_URL}/${detailsBlog.large_thumb}`} alt="Blog" />
// }
