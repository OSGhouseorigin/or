import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import DotNetData from '../component/service/DotNetD';
// import SectionTitle from '../elements/section-title/SectionTitle';

const DotNet = () => {
  return (
    <>
      <SEO title='.NET' />
      <main className='main-wrapper'>
        <HeaderOne />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-3"><div className='sidebar-fixed'>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Ecommerce Development</Accordion.Header>
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
                <h1 className='color'>.NET Application Development </h1>
                <img className= 'img' src='../images/DotNet.png' alt=''></img><br></br><br></br>
                <p>Origin Softwares is a .Net application development company with extensive experience in developing web applications using the .NET platform.<br></br><br></br>
                  With over 9 years of experience and successful projects under its belt, Origin Softwares is a company you can trust to deliver quality software quickly and efficiently.
                </p>
                <div className="row paper">
                  <div className="col-xl-6 col-lg-5">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h4 className="title">Shortlisting Vendors for a .NET Project?</h4>
                        Shortlisting vendors for a .NET project can be difficult, but Origin Softwares may be the perfect company for you. <br></br><br></br>
                        With 9 years in .NET application development and Microsoft net Gold Competencies, Origin Softwares has the experience you need for a successful project. <br></br><br></br>
                        In addition, Origin Softwares boasts a full-scale PMO and XYZ .NET developer platform. When you work with Origin Softwares, you can be confident that you're working with the best in the business.<br></br>
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
                </div><br></br>

                <h4>How We Launch .NET  application Development Cooperation?</h4>
                <div className='row'>
                  <DotNetData colSize="col-xl-6 col-md-8" serviceStyle="" itemShow="4" />
                </div><br></br><br></br>

                <h4>Scope of Our .NET Services</h4>
                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    Our .NET development services are extremely flexible and can be customized to each client's individual needs.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    We have a team of experienced business analysts who will assess your project requirements and define the scope of work.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                    We also have a dedicated team of project managers who will develop a detailed project plan, including the tech stack, schedule, and budget
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
            At Origin Softwares, our UX/UI design team is focused on delivering mockups that will not only look great but also be easy for users to adopt and understand.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Our .NET software development team is equipped with all of the latest tools and technologies to create custom software solutions for our clients.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Quality assurance is a process that Origin Softwares XYZ specialists use to guarantee a high level of performance for your software. 
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      This operating system is ISO 9001 certified and can be used to test the functional, performance, usability, security, and exploratory aspects of your software. 
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Our IMAAT approach is designed to help you reduce the costs of testing while maintaining a high level of test coverage. 
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      We also provide support and maintenance services for your software that include performance optimization and compliance.
                      </div>
                    </div>
                  </div>
                </div><br></br><br></br>

                <h4>Software We Develop with .NET</h4>
                <p>
                  ➔  There are many different types of software, each with its advantages and disadvantages. <br></br>
                  ➔  Web apps are usually easy to use but may not be very reliable. <br></br>
                  ➔  IoT apps are becoming more popular but can be difficult to set up.<br></br>
                  ➔  Cloud-based applications are convenient but may not work well offline.<br></br>
                  ➔  SaaS/XaaS solutions are often subscription-based, so you'll need to keep paying to use them.<br></br>
                  ➔  Cross-platform apps on Xamarin can be used on multiple devices but may not work as well as native apps.<br></br>
                  ➔  Desktop apps are usually more reliable but require a bit more effort to set up and use. <br></br>
                  ➔  Databases store data but may not be very user-friendly. <br></br>
                  ➔  APIs allow two or more pieces of software to communicate but can be complex to implement.<br></br>
                  ➔  Embedded systems are often used in devices but can be challenging to develop.<br></br>
                </p>

                <div className="row paper">
                  <div className="col-xl-6 col-lg-5">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h4 className="title">Software applications of various complexity</h4>
                        There are many different types of software applications out there, each with its own set of complexities and challenges. <br></br>
                        Large, complex mobile applications may require teams or more people to develop and maintain them, while business-critical solutions need to meet stringent performance and availability standards. <br></br>
                        Highly secure systems may have additional layers of complexity, and data-intensive applications can be challenging to scale. MVPs (minimum viable products) and libraries present their own unique set of challenges as well.<br></br>
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
                  <div className="col-xl-6 col-lg-5">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left shadow-box mb--30">
                        <img className='img' src='../images/Web-Application.jpg' alt=''></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h4 className="title">For all groups of end users</h4>
                        Different groups of end users use different types of software. Commercial software products are designed for businesses to use, while B2B software is developed for use by other businesses. <br></br><br></br>
                        B2E software is designed for use by employees within an organization, while B2C software is meant for consumers. Custom enterprise platforms and apps are developed specifically for internal use within a company.<br></br><br></br>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h4 className="title">Go for Cost-Effective and Fast .NET Development</h4>
                        Origin Softwares professionals are experts in .NET development and can help you deliver a high-quality product quickly and efficiently. <br></br><br></br>
                        We offer elegant business analysis, intuitive UX and UI design, agile development, and mature project management to ensure your project's success. Plus, our team is available at Origin for support and updates.<br></br><br></br>
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
                </div><br></br>

                <h4>Skills that Drive Our .NET application Development </h4>
                Add skills table<br></br><br></br>
                <h4>Architecture Patterns We Design</h4>
                Add Designs here<br></br><br></br>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Why choose .NET? </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        .NET core offers many benefits for developers, including free distribution, cross-platform development, and modular net apps that are easy to deploy and maintain. <br></br><br></br>
                        Additionally, asp.net core supports object-oriented programming language, which results in cleaner code with more focused units<br></br>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Why use .NET?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        At Origin Softwares, we specialize in designing back-end architectures using microservices, multi-tenancy, headless (decoupled) architecture, serverless computing, domain-driven design (DDD), and Command Query Responsibility Segregation (CQRS).<br></br><br></br>
                        For front-end development, we specialize in Progressive Web Apps (PWA), Single Page Applications (SPA), Model View Controller (MVC), Model View ViewModel (MVVM), and reactive programming. We also have experience with micro-frontends.<br></br>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>How We Ensure Code Quality?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        ►   Coding best practices are important for any software development project. <br></br>
                        ►   Following coding guidelines helps to create consistent, reliable, and secure code. <br></br>
                        ►   Using descriptive names for variables and adding comments to code can help make the code more readable and maintainable. <br></br>
                        ►   Code should be split into short units that are focused on a single task to improve readability and maintainability. <br></br>
                        ►   Version control tools help to track changes to the code and ensure that the code can be easily rolled back to a previous version if necessary. <br></br>
                        ►   Unit tests verify that the code behaves as expected in response to different inputs.<br></br>
                        ►   Unit tests are created as part of the functional requirements specification and should be run after each significant change to the code to ensure proper performance.<br></br>
                        ►   Code review practices can be divided into five groups: ad hoc review, peer review, code walkthrough, code inspection, and code quality metrics. <br></br>
                        ►   Ad hoc review is the least formalized and structured of the five groups, usually involving two programmers who check each other's code informally.<br></br>
                        ►   Peer review is a more formalized process in which two or more programmers review each other's code to find errors and potential improvements.<br></br>
                        ►   Code walkthrough is a process in which the programmer who wrote the code explains it to one or more other programmers who take notes and ask questions.<br></br>
                        ►   Code inspection is a process in which a team of two or more people analyzes the code to find errors and potential improvements. This process is often done using tools that automate some or all of the analysis.<br></br>
                        ►   Code quality metrics are tools that measure various aspects of the code, such as its maintainability index (MI) or cyclomatic complexity (CC).<br></br>
                        ►   Our .NET development team is ready to help. We have a highly productive and flexible team of developers who can provide the skills and expertise you need to get the job done right. <br></br>
                        ►   Origin Softwares is dedicated to providing quality services and we are confident that we can exceed your expectations. <br></br>
                        ►   Contact us today to learn more about our .NET development services.<br></br><br></br>
                        <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call To Action</Link>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Why Choose Our .NET Development Services?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        ►   Our .NET development services are the perfect choice for businesses that need expert project management and fast, efficient development. Our team of experienced.<br></br>
                        ►   NET developers are highly productive and proficient in the latest .NET technologies, which means we can deliver your project net solutions in a fraction of the time of other development companies.<br></br>
                        ►   Plus, our Agile, DevOps, and component reuse approach can save you up to 50% in project costs.<br></br>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>What our Customers Say?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►  “ Outstanding about everything : Support is fast and perfect : I got answers to every questions I asked. Code quality is up to date, modern, structured, clear, easy to understand. Responsive is responsive (any screen size, smartphone &amp; tablet). Design is pure and esthetic. Origin Provide updates. Thank you Origin team for all of this! Keep going!”   -Saboo Diagnostics<br></br><br></br>
                        ►  “ My project is totally customizable, clean with all the options you could want. The customer support is absolutely unsurpassed.” -Elite Dental Hospitals<br></br><br></br>
                        ►  “ Origin made my Website extremely well organised, the help and support is terrific and the options provided by the company are about the most perfect I've found - what more could you ask for? ” -Big Dry Fruits
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>Need .NET Developers for a Dedicated/Augmented Team?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        ► We have extensive experience developing software with high performance and good user experience for a variety of industries. Click on the icons below to learn more about our .NET experience in your industry.<br></br><br></br>
                        <h6>Choose Your Cooperation Model</h6>
                        ► If you're looking for a team of skilled .NET developers to help with your project, look no further than origin software. <br></br>
                        ► Our developers are experts in the .NET framework and can help you get your project done on time and within budget. We offer two pricing models: hourly rate or time and materials with a cap. <br></br><br></br>
                        <h6>Choose the option that best fits your needs and budget.</h6>
                        ► Origin Softwares team of BAs, UX/UI designers, developers, PMs, and QAs can provide full-cycle .NET development outsourcing. <br></br>
                        ► Depending on the project requirements, we can offer a fixed price or time and materials agreement. Our pricing is very competitive, and we can work within your budget to get your project done quickly and efficiently.<br></br>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion><br></br>

                <h4>Our .NET Software Architecture Sample</h4>
                <p>Add the architecture infographic here</p>

                <h4>Want to Rearchitecture Your .NET Software?</h4>
                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call To Action</Link>

                <h4>Our Selected .NET Projects</h4>
                <p>Add case studies here</p>

                <h4>We Know Your Industry</h4>
                <p>Add all the industries listed here with links</p>

              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  )
}

export default DotNet