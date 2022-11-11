import { Link } from "react-router-dom";
export const menuItems = [
    {
      title: <Link to={process.env.PUBLIC_URL + "/"}>Home </Link>,
    },
    {
      title: <Link to={process.env.PUBLIC_URL + "/AboutUs"}>About Us</Link>,
      submenu: [
        {
          title: <Link to={process.env.PUBLIC_URL + "/AboutUs"}>How We Work</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/Team"}>Management Team</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/VisionAndMission"}>Vision &amp; Mission</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/Testimonials"}>Testimonials</Link>,
        },
      ],
    },
    {
      title: <Link to={process.env.PUBLIC_URL + "/Service"}>Services</Link>,
      submenu: [
        {
          title: <Link to={process.env.PUBLIC_URL + "/SoftwareDevelopment"}>Software Development</Link>,
          submenu:[
            {
              title:<Link to={process.env.PUBLIC_URL + "/SoftwareConsulting"}>Software Consulting</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/CustomSoftwareDevelopment"}>Custom Software Development</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/SoftwareDevelopmentOutsourcing"}>Software Development Outsourcing</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/SoftwareProductDevelopment"}>Software Product Development</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/SoftwareDevelopmentAutomation"}>Software Development Automation</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/SoftwareMaintenanceAndSupport"}>Software Maintenance and Support</Link>,
            }
          ]
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/UIUXDesign"}>UI/UX Design</Link>,
          submenu:[
            {
              title:<Link to={process.env.PUBLIC_URL + "/UIDesign"}>UI Design</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/UXDesign"}>UX Design</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/ResponsiveWebDesign"}>Responsive Web Design</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/ResponsiveWebAppDesign"}>Responsive Web App Design</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/EcommerceWebsiteDesign"}>ECommerce Website Design</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/WebsiteRedesign"}>Website Redesign</Link>,
            }
          ]
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/WebsiteDevelopment"}>Website Development</Link>,
          submenu:[
            {
              title:<Link to={process.env.PUBLIC_URL + "/WordPress"}>WordPress</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/Magento"}>Magento</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/Php"}>PHP</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/DotNet"}>.Net</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/NodeJs"}>Node.Js</Link>,
            }
          ]
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/EcommerceDevelopment"}>Ecommerce Development</Link>,
          submenu:[
            {
              title:<Link to={process.env.PUBLIC_URL + "/WordPress"}>WordPress</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/Magento"}>Magento</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/Php"}>PHP</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/DotNet"}>.Net</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/NodeJs"}>Node.Js</Link>,
            }
          ]
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/MobileApps"}>Mobile Apps</Link>,
          submenu:[
            {
              title:<Link to={process.env.PUBLIC_URL + "/AndriodApps"}>Andriod Apps</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/IOSApps"}>iOS Apps</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/ReactNativeMobileApp"}>React Native Mobile App</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/XamarinApps"}>Xamarin Apps</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/HybridApps"}>Hybrid Apps</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/MobileAppDesign"}>Mobile App Design</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/MobileEcommerceApps"}>Mobile Ecommerce Apps</Link>,
            }
          ]
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/CorporateBranding"}>Corporate Branding</Link>,
          submenu:[
            {
              title:<Link to={process.env.PUBLIC_URL + "/LogoDesign"}>Logo Design</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/Brochure"}>Brochure</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/Presentation"}>Presentation</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/InformativeVideo"}>Informative Video</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/PromotionalMaterial"}>Promotional Material</Link>,
            }
          ]
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/DigitalMarketing"}>Digital Marketing</Link>,
          submenu:[
            {
              title:<Link to={process.env.PUBLIC_URL + "/SEO1"}>SEO</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/SMM"}>SMM</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/PPC"}>PPC</Link>,
            }
          ]
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/ITStaffing"}>IT Staffing</Link>,
          submenu:[
            {
              title:<Link to={process.env.PUBLIC_URL + "/Recruitment"}>Recruitment</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/Resources"}>Resources</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/ContractStaffing"}>Contract Staffing</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/DirectHire"}>Direct Hire</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/ExecutiveSearch"}>Executive Search</Link>,
            },
            {
              title:<Link to={process.env.PUBLIC_URL + "/OffshoreStaffing"}>OffShore Staffing</Link>,
            }
          ]
        }
      ],
    },
    {
      title: <Link to={process.env.PUBLIC_URL + "#"}>Technologies</Link>,
      submenu: [
        {
          title: <Link to={process.env.PUBLIC_URL + "/Java"}>Java</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/NodeJs"}>Node.Js</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/Python"}>Python</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/IOSApps"}>iOS</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/AndriodApps"}>Andriod</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/Angular"}>Angular</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/Flutter"}>Flutter</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/DotNet"}>.Net</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/Php"}>PHP</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/ReactNativeMobileApp"}>React</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/WordPress"}>Word Press</Link>,
        }
      ],
    },
    {
      title: <Link to={process.env.PUBLIC_URL + "#"}>Industries</Link>,
      submenu: [
        {
          title: <Link to={process.env.PUBLIC_URL + "/Fashion"}>Fashion</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/Footwear"}>Footwear</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/TravelAndHospitality"}>Travel &amp; Hospitality</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/Education"}>Education</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/Healthcare"}>Health Care</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/OilAndGas"}>Oil &amp; Gas</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/Banking"}>Banking</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/Manufacturing"}>Manufacturing</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/FinancialServices"}>Financial Services</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/Automobile"}>Automobile</Link>,
        },
        {
          title: <Link to={process.env.PUBLIC_URL + "/FMCG"}>FMCG</Link>,
        }
      ],
    },
    {
      title: <Link to={process.env.PUBLIC_URL + "/Portfolio"}>Portfolio </Link>,
    },
    {
      title: <Link to={process.env.PUBLIC_URL + "/CaseStudy"}>Case Studies</Link>,
    },
    {
      title: <Link to={process.env.PUBLIC_URL + "/Contact"}>Contact Us</Link>,
    }
  ];
  