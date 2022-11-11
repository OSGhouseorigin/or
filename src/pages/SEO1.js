import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const SEO1 = () => {
  return (
    <>
      <SEO title='SEO' />
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
                <h1 className='color'>SEO Services</h1>
                <h2>Slider</h2>
                <p>Origin Softwares is a trusted SEO services company in Hyderabad offering organic search engine optimization services in Hyderabad, India.<br></br><br></br>
                  Hyderabad is a bustling hub for start-ups and global MNCs, and our SEO agency is proud to help enterprises of all sizes to stay at the top of the race. We use various SEO tips and tricks to give our clients the edge they need to succeed.
                </p><Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-small">Call To Action</Link><br></br>

                <div className="row">
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      We're considered one of the top SEO agencies in Hyderabad and across India. We're dedicated to helping our clients to achieve their goals.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      At our SEO services company in Hyderabad, we understand how important it is for your company's website to be near the top of the Google search results.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      In today's digital world, a properly designed website is not enough - you need a good SEO strategy to beat out your competitors.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Every firm, from small businesses to large corporations, has a team of SEO experts working hard to improve its ranking. We are here to do the same for you.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      We have a 100 percent success rate with our strategies. Our team is experienced and knowledgeable, and we will help you see results as soon as you work with us. 
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      We are always here to help new companies create an online presence or improve their existing SEO strategy.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Our SEO company in Hyderabad only uses white hat SEO techniques to help our clients improve their website ranking.
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      We believe that while black hat SEO techniques might get you a better ranking in the short term, they are not long-term solutions and may even lead to search engine penalties. 
                      </div>
                    </div>
                  </div>
                  <div className="Box1 col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                      Therefore, we only use white hat SEO marketing strategies to help our clients get better website ranking in google or bing organic results.
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h4>SEO SERVICES</h4>
                <div className="row paper">
                  <div className="col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Local SEO: </h6>
                        <p>It helps you rank in your local region and gain customers for your business. We will help you rank your Google my business listings on top of search engines.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Technical SEO: </h6>
                        <p>Web page load speed, crawl ability, and URL structure are important for website quality and security.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>On-page SEO: </h6>
                        <p>Search engines are always changing the way they rank websites. To ensure your site gets the most traffic possible, you need to build it for your users. <br></br>
                          That means creating interesting and easy content and using keywords and interlinking strategies that will help improve your click-through rates.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-2">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Off-page SEO: </h6>
                        <p>The last step to ensure you are better reached than your competitors is to build high-quality and relevant backlinks that drive heavy traffic.<br></br>
                          Keyword difficulty: More popular keywords are more expensive and will take longer to show up in search results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="row paper">
                  <div className="col-xl-6 col-lg-5">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h4 className="title">Our SEO Process</h4>
                        <li>Get to know the business</li>
                        <li>Follow the keyword research process</li>
                        <li>Content optimization</li>
                        <li>Technical SEO</li>
                        <li>On page SEO</li>
                        <li>Off-page SEO</li>
                        <li>Local SEO</li>
                        <li>Amp</li>
                        <li>Schema /structured data</li><br></br>
                        <li>SEO is important for any business that wants to be successful online. And while many companies claim to help with your SEO, choosing one that will get your results is important.</li>
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
                <li>At Origin Softwares, we specialize in helping businesses achieve top ranking on major search engines like Google, Bing, and more. But we don't just stop there - we also help to generate leads and conversions from your website.</li><br></br>
                <li>If you're ready to take your business to new heights, reach out today……………. for the best SEO services in Hyderabad.</li><br></br>


                <h4>SEO Services in Hyderabad:</h4>
                <h6>Boost Your Business with Our Expertise</h6>
                <div className="row">
                  <div className="Box col-xl-6 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        Companies grow when they operate using effective SEO techniques. Growing a company isn't just about the product-- in today's age, a lot depends on how you market the brand and its services.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        Origin Softwares is crucial to have a professional SEO strategist in our team who can ensure that your company will be seen by the customers searching for what you offer. To get a clear view of the best SEO services in Hyderabad, let's inspect what they offer.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        Search engines are a dime a dozen. They are used to accessing the internet on various topics and in many places worldwide. A search engine's main purpose is to make content more visible or less visible depending on the user's needs.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                         A search engine limits or broadens the visibility of content depending on what the user is looking for.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        A page that's been optimized by a professional is always going to get more attention than one that hasn't. About three of every four web users will skip pages that don't look like they were put together by someone who knows what they're doing.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        There's no doubt that SEO works wonders for companies worldwide. 85% of them have seen amazing results after implementing an SEO strategy.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        But it's not just businesses that benefit from optimization. Customers also use SEO to help them decide better where to spend their money. 90% will research a product or company online before making a purchase.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        So if you want to ensure your site is getting seen by the right people, investing in a good SEO company is wise.
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h4>Benefits of hiring an SEO services company in Hyderabad</h4>
                ➔  If you're looking to create customized solutions that will put you ahead of the competition, talking to the SEO companies in Hyderabad is a great place to start. <br></br>
                ➔  The local and organic SEO providers can help take your brick-and-mortar business and turn it into an online powerhouse using their superior industry knowledge and techniques.<br></br>
                ➔  SEO has many benefits, but perhaps one of the most important is that it can help you track your business leads. <br></br>
                ➔  With data on traffic, keyword rankings, and click-through rates, you can get a clear picture of how your website is performing and make changes as needed.<br></br>
                ➔  If you're looking to boost your website's credibility, there's no greater ally than an SEO agency in Hyderabad. They have some of the best packages available and can tailor them to your specific business needs. <br></br>
                ➔  All you need to do is set up a consultation to discuss your online marketing goals and what areas need improvement.<br></br>
                ➔  Search Engine Optimization is all about how you can get potential customers to find your website through search engines like Google, Yahoo!, and Bing.<br></br>
                ➔  That means making sure your website appears as high up on the list of results as possible when someone types in keywords or phrases related to what you're selling.<br></br>
                ➔  Our SEO Analysts team put together a tailored plan for your website that will help it rank higher on the search engine results pages.<br></br>
                ➔  At our SEO company in Hyderabad, we don't just stop at optimizing your website for search engines. <br></br>
                ➔  We can launch SEO campaigns that will bring traffic to your site right away. <br></br>
                ➔  We're the best SEO service provider in Hyderabad because we offer a comprehensive suite of services, including SEO, search engine penalty recovery, email marketing, content marketing, influencer marketing, SMS marketing, paid advertising, web analytics, web design, and website redesign. <br></br>
                ➔  Plus, we're experts in search engine marketing services like search advertising, display advertising, mobile app advertising, shopping advertising, and video advertising.<br></br><br></br>
                <h6>Origin Softwares is the best SEO company in Hyderabad. </h6>
                ➔  We offer top-notch SEO services to businesses of all sizes, from small businesses to large corporations. Our SEO campaigns are executed with different SEO strategies and packages, so you can find a solution that fits your budget and needs<br></br>
                ➔  We also have customized SEO solutions that can tailor to your specific requirements.<br></br>
                <h6>Add packages here </h6>
                ➔  Each type of SEO plan will have different deliverables, but all plans will include monthly site audit reports, keyword ranking reports, conversion tracking reports, and event tracking reports.<br></br>
                ➔  As a digital marketing agency, we have experts passionate about helping brands get the most out of their social media campaigns. We are based in Hyderabad, India, and offer our services to brands worldwide. We specialize in campaign management and are dedicated to helping our clients get the most ROI from their digital marketing campaigns.<br></br><br></br>

                <h4>DIGITAL MARKETING SERVICES</h4>
                <div className="row paper">
                  <div className="col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Pay Per Click (PPC)</h6>
                        <p>We can help increase your brand's digital footprint with our Pay Per Click campaigns on Google and Bing. We'll work with you to sketch a plan and implement it accordingly. Once that's done, your campaign will be up and running!</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Social Media Marketing</h6>
                        <p>At our company, we are experts in social media marketing implementation. It means we provide full services for social media marketing, from content generation to creative ideation to social branding techniques.<br></br>
                          We work across all popular social media platforms so that you can get the most out of your marketing campaigns.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Email Marketing</h6>
                        <p>Email marketing can be tricky. It's not as simple as just writing an email and sending it off. You must be strategic about whom you're reaching out to and what you're saying.<br></br>
                          A well-executed email marketing campaign can be a great way to connect with your audience and promote your business. But if you don't take the time to do it right, you could end up doing more harm than good.
                        </p>
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <h4>SEO FAQs</h4>
                <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is the average time for SEO to work?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►	Professional services like those necessary for SEO can take longer to show results. Outcomes are never instant, and it can often take at least 3 to 6 months before you see any significant changes.<br></br><br></br>
                        ► It is because much work goes into making technical improvements, off-page developments, and on-page improvements to increase the quality of the web page overall. Your brand and services play a role in increasing credibility.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>What are the best services from the SEO company in Hyderabad?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►	Search engine optimization(SEO) is a process that helps a business get a higher ranking in search engines.<br></br><br></br>
                        ► When a new brand comes along, experienced SEO marketers can help identify the areas where the company should focus its attention to get better results—having someone who knows how to take care of the details can be a big help for launching a new website or product.<br></br><br></br>
                        <h6>Site audit :</h6>
                        ► A website audit is a great way to understand what needs to be done before beginning a project. By auditing the site, you can understand all the technical aspects of the site and what on-page and off-page solutions need to be employed.<br></br><br></br>
                        <h6>SEO strategy:</h6>
                        ► The SEO specialist does much research to see where your website falls compared to your competitors. If there is an enormous gap, they work to improve your website so that it can better compete in the market.<br></br><br></br>
                        <h6>Implementation:</h6>
                        ► The top SEO agencies in Hyderabad know that site auditing is key to successful SEO implementation. Once the problems are identified during the audit, they get to work quickly to solve them. <br></br>
                        ► This way, your site can start ranking higher in search results and attracting more traffic.<br></br><br></br>
                        <h6>Fine Tuning:</h6>
                        ► SERP analysis can help get a website trending. The SEO company in Hyderabad can help a website rapidly rise to the top of the industry by technically approaching the google algorithm of the search engine with new technologies and updates.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Why would I need SEO services?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►  SEO services will help increase traffic to your site. You will bring in new customers that you wouldn't have been able to reach otherwise. The more people you bring in, the more money you will make. Simple enough.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Does SEO matter?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►  In short, yes, it does. It matters a lot. Many fresh businesses are stressing over their site design, content, product features, and tone. But they neglect the most important of all: search engine optimization. According to a study, 90% of Internet users use search engine results to find a product or a service online.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>What does a professional SEO Agency do?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►  The primary aim of professional SEO agencies is to increase a website's visibility in search engines like Google. Such agencies use various techniques to improve search rankings, including link building, keyword optimization, Web development, and web design enhancements. Some agencies focus on specific target markets, such as local businesses, while others offer general optimization.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>How to know if the SEO Agency is real with services?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►  Among marketing agencies in Hyderabad, When looking for an SEO agency to hire, the first thing to remember is that the digital marketing company should have extensive experience in the field and a certified team of digital marketing professionals. <br></br>
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

export default SEO1




