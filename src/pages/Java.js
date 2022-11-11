import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
//import Accordion from 'react-bootstrap/Accordion';
//import { Link } from 'react-router-dom';

const Java = () => {
  return (
    <>
    <SEO title='Fashion'/>
    <main className='main-wrapper'>
        <HeaderOne/>
        <div className='section bg-color-light section-padding'>
            <div className='container'>
              <h1>Java</h1>
            </div>
        </div>
        <FooterOne/>
    </main>
    </>
//     <>
//       <SEO title='Direct Hire' />
//       <main className='main-wrapper'>
//         <HeaderOne />
//         <div className="section-padding-equal">
//           <div className="container">
//             <div className="row row-40">
//               <div className="col-lg-3">
//                 <div className='sidebar-fixed'>
//                   <Accordion defaultActiveKey="1">
//                     <Accordion.Item eventKey="1">
//                       <Accordion.Header>IT Staffing</Accordion.Header>
//                       <Accordion.Body>
//                         <ul>
//                           <Link to={process.env.PUBLIC_URL + "/Java"}>Java</Link><br></br>
//                           <Link to={process.env.PUBLIC_URL + "/NodeJs"}>Node.Js</Link><br></br>
//                           <Link to={process.env.PUBLIC_URL + "/Python"}>Python</Link><br></br>
//                           <Link to={process.env.PUBLIC_URL + "/IOSApps"}>iOS</Link><br></br>
//                           <Link to={process.env.PUBLIC_URL + "/AndriodApps"}>Andriod</Link><br></br>
//                           <Link to={process.env.PUBLIC_URL + "/Angular"}>Angular</Link><br></br>
//                           <Link to={process.env.PUBLIC_URL + "/Flutter"}>Flutter</Link><br></br>
//                           <Link to={process.env.PUBLIC_URL + "/DotNet"}>.Net</Link><br></br>
//                           <Link to={process.env.PUBLIC_URL + "/Php"}>PHP</Link><br></br>
//                           <Link to={process.env.PUBLIC_URL + "/ReactNativeMobileApp"}>React</Link><br></br>
//                           <Link to={process.env.PUBLIC_URL + "/WordPress"}>Word Press</Link>
//                         </ul>
//                       </Accordion.Body>
//                     </Accordion.Item>
//                   </Accordion>
//                 </div>
//               </div>
//               <div className="title-BC col-lg-9">
//                 <h1 className='color'>Java Development Company</h1>
//                 <h2>Slider</h2>
//                 <p>If you're looking for a Java development company to help with your java enterprise apps, software products, or SaaS solutions, consider originsoftwares. <br></br><br></br>
//                   We've been helping clients build sustainable Java-based software for over XYZ years, and our team of XYZ developers has a wealth of experience to draw on. <br></br><br></br>
//                   We're also committed to quality, with over XYZ Java developers on our team and an average experience of XYZ years.
//                 </p>

//                 <Accordion defaultActiveKey="1">
//                   <Accordion.Item eventKey="1">
//                     <Accordion.Header>What do Our Java Development Services Cover?</Accordion.Header>
//                     <Accordion.Body>
//                       <ul>
//                         ►  Our Java development services cover a wide range of needs, from building secure and high-performing web applications to creating cloud-native and serverless apps.<br></br>
//                         ►  We also specialize in Java-based SaaS application development, which allows us to build secure SaaS products that can be released quickly and easily to meet the needs of clients.
//                       </ul>
//                     </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="2">
//                     <Accordion.Header>What do We build in Java?</Accordion.Header>
//                     <Accordion.Body>
//                       <ul>
//                         ►  Java-based enterprise applications, web services portals, eCommerce websites, and self-service network applications.<br></br>
//                         ►  There are many different types of Java-based applications that are built for a variety of purposes. Some of these applications include enterprise systems, industry-specific programs, and web portals.<br></br>
//                         ►   In addition, there are also Java-based products that are designed for self-service desktop applications and multiplayer games.
//                       </ul>
//                     </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="3">
//                     <Accordion.Header>What Makes Origin Softwares Java Developers Stand Out?</Accordion.Header>
//                     <Accordion.Body>
//                       <ul>
//                         ►  What makes Origin Softwares Java developers stand out is their ability to build future-proof app architectures. <br></br>
//                         ►  They are also able to deliver fast and stable Java apps by employing mature Agile and DevOps practices. <br></br>
//                         ►  Additionally, they offer cooperation flexibility by teaming up with other specialists or experts as needed, and can also self-manage projects from start to finish.<br></br>
//                         ►  Having an in-house project management office can be extremely beneficial for larger, complex projects with distributed teams and multiple vendors.<br></br>
//                         ►  Transparency and communication are key to a successful project. Our PMs are experienced and excel in providing these services to our clients. <br></br>
//                         ►  We will monitor and share the results of KPIs with you, including business outcomes, quality of delivered software, code quality, development process efficiency, project time, and costs.<br></br>
//                       </ul>
//                     </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="4">
//                     <Accordion.Header>What do Our Customers say?</Accordion.Header>
//                     <Accordion.Body>
//                       <ul>
//                         ►  “ Outstanding about everything : Support is fast and perfect : I got answers to every questions I asked. Code quality is up to date, modern, structured, clear, easy to understand. Responsive is responsive (any screen size, smartphone &amp; tablet). Design is pure and esthetic. Origin Provide updates. Thank you Origin team for all of this! Keep going!”   -Saboo Diagnostics<br></br><br></br>
//                         ►  “ My project is totally customizable, clean with all the options you could want. The customer support is absolutely unsurpassed.” -Elite Dental Hospitals<br></br><br></br>
//                         ►  “ Origin made my Website extremely well organised, the help and support is terrific and the options provided by the company are about the most perfect I've found - what more could you ask for? ” -Big Dry Fruits
//                       </ul>
//                     </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="5">
//                     <Accordion.Header>How We Develop Java Applications?</Accordion.Header>
//                     <Accordion.Body>
//                       <ul>
//                         <h6> For enterprises</h6>
//                         ►   Enterprises need to be aware of the discovery process, which can last 1-3 months. This is the time when you explore your specific business needs, document key processes, and consider relevant regulatory constraints.<br></br>
//                         ►   You will also gather and process opinions and expectations of all stakeholders, and structure and prioritize the requirements for future software based on business value.<br></br>
//                         ►   Finally, you will analyze the risks of introducing a new software system/operating system to the existing IT infrastructure.<br></br>
//                       </ul>
//                     </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="6">
//                     <Accordion.Header>How We Start and Organize Cooperation?</Accordion.Header>
//                     <Accordion.Body>
//                       <ul>
//                         <h6>Staff Augmentation:</h6>
//                         ►   We understand that you need staff augmentation to get the job done right. That's why we take care of finding the right Java developers for you, based on your specific needs and requirements.<br></br>
//                         ►   We schedule interviews and handle all the negotiations, so you can focus on getting the job done.<br></br>
//                         ►   Plus, we're always available to provide performance reports and feedback, so you can be confident that your project is on track.<br></br><br></br>
//                         <h6>Dedicated Java team/Full Java project outsourcing</h6>
//                         ►   At Java Team, we take your RFPs seriously. We'll send you a comprehensive proposal with technical solutions and development approaches estimated.<br></br>
//                         ►   On-demand, we'll negotiate SLAs and suggest project and software KPIs. If everything looks good on both ends, we'll sign the contract and get to work setting up the development process and implementing CI/CD (if needed).<br></br>
//                         ►   We might also need to integrate with other vendors' processes (if needed). You can transfer responsibility for the project/project part to us with confidence that we'll keep all stakeholders updated with regular status reports.<br></br>
//                       </ul>
//                     </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="7">
//                     <Accordion.Header>How We keep up with Java Code Quality?</Accordion.Header>
//                     <Accordion.Body>
//                       <ul>
//                         ►  There are a few key things to keep in mind when it comes to coding: following the style guide, creating descriptive names, leaving comments, documenting code dependencies and functions, and keeping code portable.<br></br>
//                         ►  Additionally, it's important to practice code review to ensure code quality. There are a few different code review practices, including ad hoc review, pass-around, walkthrough, pull request, inspection, and code quality metrics.<br></br>
//                       </ul>
//                     </Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion><br></br>

//                 <h4>Sample of the Java Solutions We Offer</h4>
//                 <p>Add the image here with java processes</p>

//                 <h4>Opt for Risk-Free, Expert Java Development</h4>
//                 <p>
//                   ➔  Our Java skills are second to none, and we have the experience to back them up.<br></br>
//                   ➔  We've worked in 30 industries (manufacturing, healthcare, eCommerce, banking, telecommunications, and more) and we're familiar with all the latest tech (e.g., AI/ML, AR/VR, blockchain, big data, cloud computing).<br></br>
//                   ➔  So whatever your needs are when it comes to Java development - code review and maintenance, new app planning, custom development, legacy migration - we can help.
//                 </p>

//                 <h4>Hard and Soft Skills origin software Excels At</h4>
//                 <p>Add all the skills we excel at here</p>

//                 <h4>Meet Our Java Expert</h4>
//                 <p>Add one of the senior java expert details here</p>

//                 <h4>We Have a Track of Successful Projects in Various Industries</h4>
//                 <p>Add all industries with links</p>

//                 <h4>Choose Your Service Option</h4>
//                 <p>
//                   ➔  If you're looking to add some Java firepower to your in-house team, then you have a few options.
//                   ➔  You can hire a dedicated Java developer or team, get a self-managed team that works in collaboration with your other vendors, or hand over the full Java project. With the full Java project option, we take care of everything from project planning to programming and app support.
//                 </p>

//                 <h4>Pricing Options for Java Software Development Services</h4>
//                 <div className="row">
//                   <div className="Box col-xl-4 col-lg-4">
//                     <div className="why-choose-us">
//                       <div className="section-heading heading-left">
//                         <p>You need to be able to make decisions quickly and sometimes they don't have the time to fully evaluate their options. In these cases, a fixed-price contract can be the best option. </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="Box col-xl-4 col-lg-4">
//                     <div className="why-choose-us">
//                       <div className="section-heading heading-left">
//                         <p>With a fixed-price contract, you pay the price established by the contract upfront. This type of contract is best for Java project feasibility studies, PoCs, and small Java projects with clear and stable requirements.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="Box col-xl-4 col-lg-4">
//                     <div className="why-choose-us">
//                       <div className="section-heading heading-left">
//                         <p>If you need more flexible pricing, you can consider a Time &amp; Material or Time &amp; Material with a cap contract.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="Box col-xl-4 col-lg-4">
//                     <div className="why-choose-us">
//                       <div className="section-heading heading-left">
//                         <p>With these types of contracts, you pay based on the hours or efforts reported per month. This can be a good option for advisory activities, agile Java app development, and implementation, or Java app evolution.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="Box col-xl-4 col-lg-4">
//                     <div className="why-choose-us">
//                       <div className="section-heading heading-left">
//                         <p>Per-ticket pricing is best for Level 1 and 2 Java application support. With this type of pricing, we will agree on a ticket cost at the beginning of our partnership, and you will be charged monthly based on the number of incidents that we resolve.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="Box col-xl-4 col-lg-4">
//                     <div className="why-choose-us">
//                       <div className="section-heading heading-left">
//                         <p>The fixed monthly fee is best for Level 3 Java application support, which includes in-code defect fixes and functional changes. </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="Box col-xl-12 col-lg-1">
//                     <div className="why-choose-us">
//                       <div className="section-heading heading-left">
//                         <p>With this type of pricing, we will agree on an hourly rate for Java app support activities at the beginning of our partnership. After the service is delivered, you will pay for a set number of hours that we have provided support.</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div><br></br>

//                 <h4>Selected Projects</h4>
//                 <h6>Add case studies here</h6>
//                 <p>
//                   ➔  At our company, we provide fast and efficient Java application development services.
//                   ➔  Our team of skilled developers are experts in popular programming languages, especially java programming language, and can help you get your java platform project done quickly, safely, and within budget. Contact us today to learn more about how we can help you with your next Java development project.
//                 </p>
//                 <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Request Quote</Link><br></br>
//               </div>
//             </div>
//           </div>
//         </div>
//         <FooterOne />
//       </main>
//     </>
   )
 }

export default Java