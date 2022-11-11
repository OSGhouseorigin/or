import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import SMMData from '../component/service/SMMData';

const SMM = () => {
  return (
    <>
      <SEO title='SMM' />
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
                <h1 className='color'>Social Media Marketing</h1>
                <h2>Slider</h2>
                <p>Origin Softwares is a social media marketing agency in India that offers solutions to all your social media marketing problems. <br></br><br></br>
                  We have a team of experienced social media marketers who has a great track record and can help you expand your reach, maximize your web presence, increase traffic, shape your brand image, and connect with influencers.<br></br><br></br>
                  If you're a startup, small business, or white label partner, we can help you take your social media marketing to the next level.
                </p>

                <h4>Social Media Process</h4>
                <div className='row'>
                  <SMMData colSize="col-xl-6 col-md-2" serviceStyle="" itemShow="4" />
                </div>

                <h4>Build awareness through a distinct voice</h4>
                <p>
                ➔ The quickest way to build awareness for your brand is by developing a distinct voice. This voice should be woven into every communications piece, from the website to blog posts to social media updates. <br></br>
                ➔ The tone and message should be consistent across all channels and adapt the delivery to each platform. For example, your Twitter voice might be more conversational than your website copy.
                </p>
                <h6>Add Packages</h6>

                <h4>FULL SERVICES: SOCIAL MEDIA MARKETING</h4>
                <p>We offer a wide range of SMM services which are as follows</p>

                <div className="row paper">
                  <div className="col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Faceboook Marketing</h6>
                        <p>At Origin Softwares, our Facebook marketing experts will help businesses increase awareness, get more customers, and build a brand that people will love. Our unique strategies will help you achieve business success.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Instagram Marketing</h6>
                        <p>As one of the most engaging social media platforms, Instagram is a powerful tool for marketing your brand. Our Instagram marketing services can help you attract followers, increase engagement, and make your account more visible.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Twitter Marketing</h6>
                        <p>Twitter marketing can be a great way to connect with your target audience and promote your business. As a leading social media marketing company, we can help you create unique Twitter marketing campaigns that will get results.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>Pinterest Marketing</h6>
                        <p>Pinterest is a powerful marketing tool for businesses. Our Pinterest marketing services will help drive traffic to your website, boost sales, and attract people with diverse interests.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>LinkedIn Marketing</h6>
                        <p>LinkedIn is a powerful platform that can help connect you with other industry professionals or similar interests. Our team can help you integrate LinkedIn marketing strategies with your advertising efforts to generate more leads and sales.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h6>YouTube Marketing</h6>
                        <p>The power of video marketing is on the rise, and YouTube Marketing is at the forefront. Our team provides services in various aspects of YouTube marketing, from producing online videos to optimizing and advertising them.</p>
                      </div>
                    </div>
                  </div>
                </div><br></br>
                <p>We can help you take your business to the next level with our cutting-edge video marketing solutions.</p>

                <h4>SOCIAL MEDIA MARKETING (SMM) - Taking your audience to the next level.</h4>
                <p>
                Every business wants to transform its audience into loyal, returning customers. But how do you do that? How do you ensure that your leads become successful? <br></br><br></br>
                There are a few key things that you can do to nurture your leads and help them succeed. <br></br><br></br>
                <h6>First, you need to provide value.</h6>
                ➔  It can be in the form of helpful content, educational resources, or even just a friendly ear when they need to vent their frustrations.<br></br><br></br>
                <h6>Second, you need to be consistent in your follow-up and communications.</h6>
                ➔  It doesn't mean badgering them with emails and phone calls, but keeping the lines of communication open so that they feel comfortable reaching out to you when they're ready to buy. <br></br>
                ➔  The sales cycle can be long, and it's important not to give up on a lead too soon. If you stick with it, you may find that your loyal audience becomes your most successful leads.
                </p>

                <h4> Full-Funnel Marketing</h4>
                <p>
                ➔  At its core, full-funnel marketing is about creating a comprehensive and cohesive marketing strategy that takes your potential customers from awareness to purchase.<br></br>
                ➔  To do this effectively, you need to consider all touchpoints along the customer journey and create content and messaging that is relevant and engaging at each stage. <br></br>
                ➔  Taking a holistic marketing approach ensures that your campaigns are working together to drive business results.
                </p>
                <div className="row">
                  <div className="Box col-xl-6 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h5>Native advertising</h5>
                      What is native advertising? Native advertising is a form of online advertising focused on blending in with the surrounding content. Native ads are often less intrusive than other online advertising, and as a result, they can be more effective.
                      </div>
                    </div>
                  </div>
                  <div className="Box col-xl-6 col-lg-6">
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h5>Ad Platforms</h5>
                      Ad platforms can be a great way to get your product in front of a larger audience. However, they can also be much work. You must ensure that your ad platform is well organized and that you monitor your campaigns closely.
                      </div>
                    </div>
                  </div>
                </div><br></br>

                <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does social media agency takeover work?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►	A social media marketing agency is like having a personal assistant for your business's social media campaign accounts. <br></br><br></br>
                        ► They ensure that everything is up-to-date and looking its best, working on getting the attention of your target audience on all the different social networking websites. <br></br><br></br>
                        ► Among the marketing companies in India, Origin Softwares follows several effective social media strategies to ensure that your brand is present and accounted for on all relevant social media platforms.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>How Do We Work as a Social Media Agency?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <h6>Tell your brand story</h6>
                        ► Your brand story is what sets you apart from the competition. It's the reason why people should buy from you and not anyone else. A great brand story will make people want to be a part of your company in India and help you build a loyal following.<br></br><br></br>
                        <h6>Develop viral content</h6>
                        ► Creating content that has the potential to go viral can be a great way to increase your reach and engagement. But it's not easy. To develop viral content, you need to understand what makes people share things online. <br></br><br></br>
                        ► It would help if you also created something original and useful that people want to share.<br></br><br></br>
                        <h6>Identify the right platform</h6>
                        ► It's important to identify the right social media platform for your marketing strategy. Not all platforms are created equal; some will be more effective than others depending on your product, target audience, and goals. <br></br>
                        ► We do the research and then make a decision - the success of your marketing campaign depends on it!<br></br><br></br>
                        <h6>Design</h6>
                        ► Designers who create graphics for social media marketing must be aware of current trends in both design and development and marketing. <br></br><br></br>
                        ► We create visually appealing and attention-grabbing designs while also being on brand for the company or product they are promoting.<br></br><br></br>
                        ► Additionally, the graphic's text should be well written and engaging, without being too long or sales.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>How much is the cost of social media marketing services?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►  The cost of social media management depends on the size of your business and how many platforms you use. There are a lot of different factors that come into play when trying to calculate the perfect social media budget for your company.<br></br>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Do you offer graphic design services?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        ►  Yes, we offer graphic design services. <br></br>
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

export default SMM