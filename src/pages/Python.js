import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
//import Accordion from 'react-bootstrap/Accordion';
//import { Link } from 'react-router-dom';

const Python = () => {
  return (
    <>
    <SEO title='Fashion'/>
    <main className='main-wrapper'>
        <HeaderOne/>
        <div className='section bg-color-light section-padding'>
            <div className='container'>
              <h1>Python</h1>
            </div>
        </div>
        <FooterOne/>
    </main>
    </>


    // <>
    //   <SEO title='Direct Hire' />
    //   <main className='main-wrapper'>
    //     <HeaderOne />
    //     <div className="section-padding-equal">
    //       <div className="container">
    //         <div className="row row-40">
    //           <div className="col-lg-3">
    //             <div className='sidebar-fixed'>
    //               <Accordion defaultActiveKey="1">
    //                 <Accordion.Item eventKey="1">
    //                   <Accordion.Header>IT Staffing</Accordion.Header>
    //                   <Accordion.Body>
    //                     <ul>
    //                       <Link to={process.env.PUBLIC_URL + "/Java"}>Java</Link><br></br>
    //                       <Link to={process.env.PUBLIC_URL + "/NodeJs"}>Node.Js</Link><br></br>
    //                       <Link to={process.env.PUBLIC_URL + "/Python"}>Python</Link><br></br>
    //                       <Link to={process.env.PUBLIC_URL + "/IOSApps"}>iOS</Link><br></br>
    //                       <Link to={process.env.PUBLIC_URL + "/AndriodApps"}>Andriod</Link><br></br>
    //                       <Link to={process.env.PUBLIC_URL + "/Angular"}>Angular</Link><br></br>
    //                       <Link to={process.env.PUBLIC_URL + "/Flutter"}>Flutter</Link><br></br>
    //                       <Link to={process.env.PUBLIC_URL + "/DotNet"}>.Net</Link><br></br>
    //                       <Link to={process.env.PUBLIC_URL + "/Php"}>PHP</Link><br></br>
    //                       <Link to={process.env.PUBLIC_URL + "/ReactNativeMobileApp"}>React</Link><br></br>
    //                       <Link to={process.env.PUBLIC_URL + "/WordPress"}>Word Press</Link>
    //                     </ul>
    //                   </Accordion.Body>
    //                 </Accordion.Item>
    //               </Accordion>
    //             </div>
    //           </div>
    //           <div className="title-BC col-lg-9">
    //             <h1 className='color'>Hire Python Developers</h1>
    //             <h2>Slider</h2>
    //             <p>Origin software is a great partner to help you supplement top-tier python developers for hire for your in-house Python development team.<br></br><br></br>
    //               We have a wealth of experience in Python development, data analytics, and data science.<br></br><br></br>
    //               We have successfully implemented over 50 Python projects. We can ramp up new team members quickly so you can get back to business as usual.
    //             </p>

    //             <h4>Get Reliable Python Developers in Under a Week!</h4>
    //             <h6>Are you looking for a Python developer to help you get the job done?</h6>
    //             <div className="row">
    //               <div className="Box col-xl-6 col-lg-2">
    //                 <div className="why-choose-us">
    //                   <div className="section-heading heading-left">
    //                     <p>Origin Softwares has freelance python developers for hire who are experienced and effective and can work with you to complete your project quickly and efficiently.</p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="Box col-xl-6 col-lg-2">
    //                 <div className="why-choose-us">
    //                   <div className="section-heading heading-left">
    //                     <p>With a vast pool of experts in other programming languages, DevOps, security, and QA, origin software can help you get the most out of your project.</p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div><br></br>

    //             <h4>Our Development Skillset</h4>
    //             <p>Add technologies</p>

    //             <h4>Origin Softwares Six-step Hiring Process</h4>
    //             <div className="row">
    //               <div className="Box col-xl-6 col-lg-2">
    //                 <div className="why-choose-us">
    //                   <div className="section-heading heading-left">
    //                     <p>Origin Softwares has an extensive hiring process that helps us weed out the less qualified candidates. </p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="Box col-xl-6 col-lg-2">
    //                 <div className="why-choose-us">
    //                   <div className="section-heading heading-left">
    //                     <p>We carefully scan resumes, conduct interviews with HR specialists and potential team leads, and give test tasks to assess both soft and hard skills. Only the most qualified candidates make it to the CTO's interview. </p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="Box col-xl-6 col-lg-2">
    //                 <div className="why-choose-us">
    //                   <div className="section-heading heading-left">
    //                     <p>While the competition for Python developer roles at Origin Softwares is always very high level, we believe that taking our time to hire only the best candidates is worth it. </p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="Box col-xl-6 col-lg-2">
    //                 <div className="why-choose-us">
    //                   <div className="section-heading heading-left">
    //                     <p>This way, we can be confident that our engineers will deliver high-quality services.</p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div><br></br>

    //             <h4>A Sample Profile of Our Senior Python Developer</h4>
    //             <p>Add sample cv</p>

    //             <h4>How Fast Our Python Programmers Deliver Typical Features</h4>
    //             <p>Signing up for a new account, logging in, and managing personal details – 4 hours<br></br>
    //               Confirming online payments – 8 hours<br></br>
    //               Processing online payments – 16 hours<br></br>
    //               Quality control is essential to any project.
    //             </p>
    //             <div className="row paper">
    //               <div className="col-xl-6 col-lg-5">
    //                 <div className="why-choose-us">
    //                   <div className="section-heading heading-left">
    //                     <h4 className="title">Rules and guidelines we follow</h4>
    //                     At a minimum, we expect all Python code to meet the following standards: 
    //                     <li>Should write all code following the PEP 8 style guide.</li>
    //                     <li>Should comment on All complex code</li>
    //                     <li>All codes should have accompanying unit tests.</li>
    //                     <li>Logical units of code should be broken up into smaller modules.</li>
    //                     <li>Code (as a whole) should be documented in a README file, including dependencies.</li>
    //                     <li>Should use Version control </li>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="col-xl-6 col-lg-5">
    //                 <div className="why-choose-us">
    //                   <div className="section-heading heading-left">
    //                     <img className='img' src='../images/Web-Application.jpg' alt=''></img>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div><br></br>

    //             <h4>An Example of Our Python Code</h4>
    //             <p>Add the code image</p>

    //             <h4>Types of python Applications Our Developers Build</h4>
    //             <div className="row">
    //               <div className="Box col-xl-6 col-lg-2">
    //                 <div className="why-choose-us">
    //                   <div className="section-heading heading-left">
    //                     <p>Back-end programming is often associated with data-intensive custom web apps, database interactions, and APIs. </p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="Box col-xl-6 col-lg-2">
    //                 <div className="why-choose-us">
    //                   <div className="section-heading heading-left">
    //                     <p>Data analysis can involve custom-made statistical models, dashboards and reporting solutions, and test automation.</p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="Box col-xl-6 col-lg-2">
    //                 <div className="why-choose-us">
    //                   <div className="section-heading heading-left">
    //                     <p>Machine learning can enable demand forecasting systems, customer segmentation and behavior prediction systems, product/service recommendation engines, financial risk evaluation, fraud detection systems, predictive maintenance systems, and IoT development. </p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="Box col-xl-6 col-lg-2">
    //                 <div className="why-choose-us">
    //                   <div className="section-heading heading-left">
    //                     <p>IoT app development can encompass data warehouse design and engineering and data analytics implementation.</p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div><br></br>

    //             <h4>Our Featured Python Projects</h4>
    //             <p>Add case studies here</p>

    //             <h4>Complete Your Project with Python Experts</h4>
    //             <p>
    //             ➔  Origin Softwares is the perfect place to go when you need to hire Python developers.<br></br>
    //             ➔  With years of experience, our developers are experts in a wide range of Python-related needs, from code auditing and refactoring to web framework selection and custom software development.<br></br>
    //             ➔  We can even help you with data analysis and reporting.<br></br>
    //             </p>

    //             <Accordion defaultActiveKey="1">
    //               <Accordion.Item eventKey="1">
    //                 <Accordion.Header>How to Hire Python Developers from Origin Softwares?</Accordion.Header>
    //                 <Accordion.Body>
    //                   <ul>
    //                     ►  The process is simple: send us an initial request with your specific needs, and we'll take it from there. We'll scan your CV, schedule interviews, and prepare an SLA once you've found the perfect developer for your project.<br></br>
    //                   </ul>
    //                 </Accordion.Body>
    //               </Accordion.Item>
    //               <Accordion.Item eventKey="2">
    //                 <Accordion.Header>How We Ensure Quick Development and Predictable Cooperation?</Accordion.Header>
    //                 <Accordion.Body>
    //                   <ul>
    //                     ►  Origin software team of Python developers is onboarded and trained to work with tight schedules, ensuring that your project is completed quickly and efficiently.<br></br>
    //                     ►  We only hire developers who have completed at least 2 Python-based projects so that you can be confident in their abilities. <br></br>
    //                     ►  In addition, all of our resources are monitored for productivity, and have access to logging tools (Jira, Trello, Confluence) for progress tracking. This way, you can always be up-to-date on the status of your project.<br></br>
    //                   </ul>
    //                 </Accordion.Body>
    //               </Accordion.Item>
    //               <Accordion.Item eventKey="3">
    //                 <Accordion.Header>In-House vs. Outsourced Python Developers: What's the Difference?</Accordion.Header>
    //                 <Accordion.Body>
    //                   <ul>
    //                     ►  There are two main types of Python developers: in-house and outsourced. In-house developers are employees of a company who work on Python development projects within the company. <br></br>
    //                     ►  Outsourced developers are contractors who are not employed by the company but rather provide their services to the company on a project basis. <br></br>
    //                     ►  There are advantages and disadvantages to both in-house and outsourced Python development. <br></br>
    //                     ►  In-house developers have quick access to high-quality resources but also have the headache of hiring and retaining new employees.<br></br>
    //                     ►  Outsourced developers do not have these hiring expenses, but they may not be as familiar with the company's development process.<br></br>
    //                     ►  Ultimately, whether to use in-house or outsourced Python developers depends on the project's specific needs.<br></br>
    //                     ►  For example, if security risks are a concern, it may be better to use an in-house developer. If communication is a concern, it may be better to use an outsourced developer.<br></br>
    //                   </ul>
    //                 </Accordion.Body>
    //               </Accordion.Item>
    //               <Accordion.Item eventKey="4">
    //                 <Accordion.Header>How we track quality?</Accordion.Header>
    //                 <Accordion.Body>
    //                   <ul>
    //                     ►  There are several ways to review code:<br></br><br></br>
    //                     <li>Ad hoc review.</li>
    //                     <li>Peer review.</li>
    //                     <li>Walkthrough.</li>
    //                     <li>Inspection.</li>
    //                     ►  There are also several metrics used to assess code quality:<br></br>
    //                     ►  Maintainability index (MI).Cyclomatic Complexity (CC).
    //                   </ul>
    //                 </Accordion.Body>
    //               </Accordion.Item>
    //               <Accordion.Item eventKey="5">
    //                 <Accordion.Header>Why Partner Up with Origin Softwares to Hire Python Developers?</Accordion.Header>
    //                 <Accordion.Body>
    //                   <ul>
    //                     <h6>Our Python Highlights</h6>
    //                     ►   Origin Softwares is a company that has been providing Python developers for hire and data scientists for nine years. <br></br>
    //                     ►   We have a team of over 50 Python engineers with a ramp-up time of 2 days to 2 weeks. We are experts in data analytics and data science, with a success rate of 50+ projects.<br></br><br></br>
    //                     <h6>Our Corporate Highlights</h6>
    //                     ►   Origin Softwares has been in the software development game for 33 years, and we have no intention of slowing down. With over 450 developers and 700 employees, we have completed over 3,300 projects in our portfolio.<br></br>
    //                     ►   Not to mention, we have 10 years of experience developing complex cloud applications. <br></br>
    //                     ►   Our process is foolproof, from initial consultation and requirements gathering to post-project maintenance and support. <br></br>
    //                     ►   And our team of certified Scrum masters will be with you every step of the way. All of this is available to you within a week!<br></br>
    //                   </ul>
    //                 </Accordion.Body>
    //               </Accordion.Item>
    //             </Accordion><br></br>

    //             <h4>Choose Your Cooperation Model</h4>
    //             <p>
    //             ➔  Depending on your project's requirements, you may want to consider augmenting your team with additional Python developer services. It can help fill in any gaps in resources or skills.<br></br>
    //             ➔  Alternatively, you can hire a dedicated team of Python developers for hire for project management. Our Team Lead will manage this team and can work on either a Python-based or reliable project part.<br></br>
    //             </p>
                
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <FooterOne />
    //   </main>
    // </>
  )
}

export default Python