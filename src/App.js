import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './assets/scss/header/nav1.css';

import './App.css';

// Blog Import
import BlogGridView from './pages/BlogGrid';
import BlogCategory from './pages/Category';
import BlogArchive from './pages/Archive';
import BlogDetails from './pages/BlogDetails';
// import BlogGrid from './pages/BlogGrid'

// Service 
//import Service from './pages/Service';
import ServiceOne from './pages/ServiceOne';
import ServiceTwo from './pages/ServiceTwo';
import ServiceDetails from './pages/ServiceDetails';

// Project 
import ProjectGridOne from './pages/ProjectGridOne';
import ProjectGridTwo from './pages/ProjectGridTwo';
import ProjectGridThree from './pages/ProjectGridThree';
import ProjectGridFive from './pages/ProjectGridFive';
import ProjectGridFour from './pages/ProjectGridFour';
import ProjectDetails from './pages/ProjectDetails';

// Pages 
// import Splash from './pages/Splash';
import AboutUs from './pages/AboutUs';
import OurOffice from './pages/OurOffice';
import OurClients from './pages/OurClients';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import CaseStudy from './pages/CaseStudy';
import CaseDetails from './pages/CaseStudyDetails';
import Testimonials from './pages/Testimonials';
import PricingTable from './pages/PricingTable';
import Typography from './pages/Typography';
import Contact from './pages/Contact';
import ErrorPage from './pages/404';
import ComingSoon from './pages/ComingSoon';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';


// origin Pages
import Home from './pages/Home'
import HowWeWork from './pages/HowWeWork';
import ManagementTeam from './pages/ManagementTeam';
import VisionAndMission from './pages/VisionAndMission';
import Testimonials1 from './pages/Testimonials1';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import UIUXDesign from './pages/UIUXDesign';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import EcommerceDevelopment from './pages/EcommerceDevelopment';
import MobileApps from './pages/MobileApps';
import CorporateBranding from './pages/CorporateBranding';
import DigitalMarketing from './pages/DigitalMarketing';
import ITStaffing from './pages/ITStaffing';
import Fashion from './pages/Fashion';
import Footwear from './pages/Footwear';
import TravelAndHospitality from './pages/TravelAndHospitality';
import Education from './pages/Education';
import Healthcare from './pages/Healthcare';
import OilAndGas from './pages/OilAndGas';
import Banking from './pages/Banking';
import Manufacturing from './pages/Manufacturing';
import FinancialServices from './pages/FinancialServices';
import Automobile from './pages/Automobile';
import FMCG from './pages/FMCG';
import NodeJs from './pages/NodeJs';
import Java from './pages/Java';
import Python from './pages/Python';
import IOS from './pages/IOS';
import Angular from './pages/Angular';
import Andriod from './pages/Andriod';
import Flutter from './pages/Flutter';
import DotNet from './pages/DotNet';
import Php from './pages/Php';
import React1 from './pages/React1';
import WordPress from './pages/WordPress';

// Sub-Menu Pages
import SoftwareConsulting from './pages/SoftwareConsulting';
import CustomSoftwareDevelopment from './pages/CustomSoftwareDevelopment';
import SoftwareDevelopmentOutsourcing from './pages/SoftwareDevelopmentOutsourcing';
import SoftwareProductDevelopment from './pages/SoftwareProductDevelopment';
import SoftwareDevelopmentAutomation from './pages/SoftwareDevelopmentAutomation';
import SoftwareMaintenanceAndSupport from './pages/SoftwareMaintenanceAndSupport';
import UIDesign from './pages/UIDesign';
import UXDesign from './pages/UXDesign';
import ResponsiveWebDesign from './pages/ResponsiveWebDesign';
import ResponsiveWebAppDesign from './pages/ResponsiveWebAppDesign';
import EcommerceWebsiteDesign from './pages/EcommerceWebsiteDesign';
import WebsiteRedesign from './pages/WebsiteRedesign';
import AndriodApps from './pages/AndriodApps'
import IOSApps from './pages/IOSApps';
import ReactNativeMobileApp from './pages/ReactNativeMobileApp';
import XamarinApps from './pages/XamarinApps';
import HybridApps from './pages/HybridApps';
import MobileAppDesign from './pages/MobileAppDesign';
import MobileEcommerceApps from './pages/MobileEcommerceApps';
import LogoDesign from './pages/LogoDesign';
import Brochure from './pages/Brochure';
import Presentation from './pages/Presentation';
import InformativeVideo from './pages/InformativeVideo';
import PromotionalMaterial from './pages/PromotionalMaterial';
import SEO1 from './pages/SEO1';
import SMM from './pages/SMM';
import PPC from './pages/PPC';
import Recruitment from './pages/Recruitment';
import Resources from './pages/Resources';
import ContractStaffing from './pages/ContractStaffing';
import DirectHire from './pages/DirectHire';
import ExecutiveSearch from './pages/ExecutiveSearch';
import OffshoreStaffing from './pages/OffshoreStaffing';
import Magento from './pages/Magento';
import Portfolio from './pages/Portfolio';


// Css Import
import './assets/scss/app.scss';
import Service from './pages/Service';


//import BlogGridOne from './component/blog/BlogGridOne';

const App = () => {
  return (
    <Router>
		<ScrollToTop>
			<Routes>
				<Route path={process.env.PUBLIC_URL + "/"} element={<Home />}/>

				{/* Blogs */}
				<Route path={process.env.PUBLIC_URL + "/blog-grid/"} element={<BlogGridView />}/>
				<Route path={process.env.PUBLIC_URL + "/category/:slug"} element={<BlogCategory />}/>
				<Route path={process.env.PUBLIC_URL + "/archive/:slug"} element={<BlogArchive />}/>
				<Route path={process.env.PUBLIC_URL + "/blog-details/:id"} element={<BlogDetails />}/>

				{/* Service */}
				<Route path={process.env.PUBLIC_URL + "/service-one/"} element={<ServiceOne />}/>
				<Route path={process.env.PUBLIC_URL + "/service-two/"} element={<ServiceTwo />}/>
				<Route path={process.env.PUBLIC_URL + "/service-details/:slug"} element={<ServiceDetails />}/>

				{/* Project  */}
				<Route path={process.env.PUBLIC_URL + "/project-grid-one"} element={<ProjectGridOne />}/>
				<Route path={process.env.PUBLIC_URL + "/project-grid-two"} element={<ProjectGridTwo />}/>
				<Route path={process.env.PUBLIC_URL + "/project-grid-three"} element={<ProjectGridThree />}/>
				<Route path={process.env.PUBLIC_URL + "/project-width-one"} element={<ProjectGridFour />}/>
				<Route path={process.env.PUBLIC_URL + "/project-width-two"} element={<ProjectGridFive />}/>
				<Route path={process.env.PUBLIC_URL + "/project-details/:slug"} element={<ProjectDetails />}/>

				{/* Origin Pages */}
				<Route path={process.env.PUBLIC_URL + "/HowWeWork"} element={<HowWeWork />}/>
				<Route path={process.env.PUBLIC_URL + "/ManagementTeam"} element={<ManagementTeam/>}/>
				<Route path={process.env.PUBLIC_URL + "/VisionAndMission"} element={<VisionAndMission/>}/>
				<Route path={process.env.PUBLIC_URL + "/Testimonials1"} element ={<Testimonials1/>}/>
				<Route path={process.env.PUBLIC_URL + "/SoftwareDevelopment"} element ={<SoftwareDevelopment/>}/>
				<Route path={process.env.PUBLIC_URL + "/UIUXDesign"} element ={<UIUXDesign/>}/>
				<Route path={process.env.PUBLIC_URL + "/WebsiteDevelopment"} element ={<WebsiteDevelopment/>}/>
				<Route path={process.env.PUBLIC_URL + "/EcommerceDevelopment"} element = {<EcommerceDevelopment/>}/>
				<Route path={process.env.PUBLIC_URL + "/MobileApps"} element ={<MobileApps/>}/>
				<Route path={process.env.PUBLIC_URL + "/CorporateBranding"} element ={<CorporateBranding/>}/>
				<Route path={process.env.PUBLIC_URL + "/DigitalMarketing"} element ={<DigitalMarketing/>}/>
				<Route path={process.env.PUBLIC_URL + "/ITStaffing"} element ={<ITStaffing/>}/>
				<Route path={process.env.PUBLIC_URL + "/Fashion"} element ={<Fashion/>}/>
				<Route path={process.env.PUBLIC_URL + "/Footwear"} element ={<Footwear/>}/>
				<Route path={process.env.PUBLIC_URL + "/TravelAndHospitality"} element ={<TravelAndHospitality/>}/>
				<Route path={process.env.PUBLIC_URL + "/Education"} element ={<Education/>}/>
				<Route path={process.env.PUBLIC_URL + "/Healthcare"} element ={<Healthcare/>}/>
				<Route path={process.env.PUBLIC_URL + "/OilAndGas"} element ={<OilAndGas/>}/>
				<Route path={process.env.PUBLIC_URL + "/Banking"} element ={<Banking/>}/>
				<Route path={process.env.PUBLIC_URL + "/Manufacturing"} element ={<Manufacturing/>}/>
				<Route path={process.env.PUBLIC_URL + "/FinancialServices"} element ={<FinancialServices/>}/>
				<Route path={process.env.PUBLIC_URL + "/Automobile"} element ={<Automobile/>}/>
				<Route path={process.env.PUBLIC_URL + "/FMCG"} element ={<FMCG/>}/>
				<Route path={process.env.PUBLIC_URL + "/Java"} element ={<Java/>}/>
				<Route path={process.env.PUBLIC_URL + "/NodeJs"} element ={<NodeJs/>}/>
				<Route path={process.env.PUBLIC_URL + "/Python"} element ={<Python/>}/>
				<Route path={process.env.PUBLIC_URL + "/IOS"} element ={<IOS/>}/>
				<Route path={process.env.PUBLIC_URL + "/Andriod"} element ={<Andriod/>}/>
				<Route path={process.env.PUBLIC_URL + "/Angular"} element ={<Angular/>}/>
				<Route path={process.env.PUBLIC_URL + "/Flutter"} element ={<Flutter/>}/>
				<Route path={process.env.PUBLIC_URL + "/DotNet"} element ={<DotNet/>}/>
				<Route path={process.env.PUBLIC_URL + "/Php"} element ={<Php/>}/>
				<Route path={process.env.PUBLIC_URL + "/React1"} element ={<React1/>}/>
				<Route path={process.env.PUBLIC_URL + "/WordPress"} element ={<WordPress/>}/>
				<Route path={process.env.PUBLIC_URL + "/Portfolio"} element ={<Portfolio/>}/>


				{/* Sub-menu Pages */}
				<Route path={process.env.PUBLIC_URL + "/SoftwareConsulting"} element={<SoftwareConsulting />}/>
				<Route path={process.env.PUBLIC_URL + "/CustomSoftwareDevelopment"} element={<CustomSoftwareDevelopment />}/>
				<Route path={process.env.PUBLIC_URL + "/SoftwareDevelopmentOutsourcing"} element={<SoftwareDevelopmentOutsourcing />}/>
				<Route path={process.env.PUBLIC_URL + "/SoftwareProductDevelopment"} element ={<SoftwareProductDevelopment/>}/>
				<Route path={process.env.PUBLIC_URL + "/SoftwareDevelopmentAutomation"} element ={<SoftwareDevelopmentAutomation/>}/>
				<Route path={process.env.PUBLIC_URL + "/SoftwareMaintenanceAndSupport"} element ={<SoftwareMaintenanceAndSupport/>}/>
				<Route path={process.env.PUBLIC_URL + "/UIDesign"} element ={<UIDesign/>}/>
				<Route path={process.env.PUBLIC_URL + "/UXDesign"} element ={<UXDesign/>}/>
				<Route path={process.env.PUBLIC_URL + "/ResponsiveWebDesign"} element ={<ResponsiveWebDesign/>}/>
				<Route path={process.env.PUBLIC_URL + "/ResponsiveWebAppDesign"} element ={<ResponsiveWebAppDesign/>}/>
				<Route path={process.env.PUBLIC_URL + "/EcommerceWebsiteDesign"} element ={<EcommerceWebsiteDesign/>}/>
				<Route path={process.env.PUBLIC_URL + "/WebsiteRedesign"} element ={<WebsiteRedesign/>}/>
				<Route path={process.env.PUBLIC_URL + "/AndriodApps"} element ={<AndriodApps/>}/>
				<Route path={process.env.PUBLIC_URL + "/IOSApps"} element ={<IOSApps/>}/>
				<Route path={process.env.PUBLIC_URL + "/ReactNativeMobileApp"} element ={<ReactNativeMobileApp/>}/>
				<Route path={process.env.PUBLIC_URL + "/XamarinApps"} element ={<XamarinApps/>}/>
				<Route path={process.env.PUBLIC_URL + "/HybridApps"} element={<HybridApps/>}/>
				<Route path={process.env.PUBLIC_URL + "/MobileAppDesign"} element ={<MobileAppDesign/>}/>
				<Route path={process.env.PUBLIC_URL + "/MobileEcommerceApps"} element ={<MobileEcommerceApps/>}/>
				<Route path={process.env.PUBLIC_URL + "/LogoDesign"} element ={<LogoDesign/>}/>
				<Route path={process.env.PUBLIC_URL + "/Brochure"} element ={<Brochure/>}/>
				<Route path={process.env.PUBLIC_URL + "/Presentation"} element ={<Presentation/>}/>
				<Route path={process.env.PUBLIC_URL + "/InformativeVideo"} element ={<InformativeVideo/>}/>
				<Route path={process.env.PUBLIC_URL + "/PromotionalMaterial"} element ={<PromotionalMaterial/>}/>
				<Route path={process.env.PUBLIC_URL + "/SEO1"} element ={<SEO1/>}/>
				<Route path={process.env.PUBLIC_URL + "/SMM"} element ={<SMM/>}/>
				<Route path={process.env.PUBLIC_URL + "/PPC"} element ={<PPC/>}/>
				<Route path={process.env.PUBLIC_URL + "/Recruitment"} element ={<Recruitment/>}/>
				<Route path={process.env.PUBLIC_URL + "/Resources"} element ={<Resources/>}/>
				<Route path={process.env.PUBLIC_URL + "/ContractStaffing"} element ={<ContractStaffing/>}/>
				<Route path={process.env.PUBLIC_URL + "/DirectHire"} element ={<DirectHire/>}/>
				<Route path={process.env.PUBLIC_URL + "/ExecutiveSearch"} element ={<ExecutiveSearch/>}/>
				<Route path={process.env.PUBLIC_URL + "/OffshoreStaffing"} element ={<OffshoreStaffing/>}/>
				<Route path={process.env.PUBLIC_URL + "/Magento"} element ={<Magento/>}/>

				{/* Pages */}
				<Route path={process.env.PUBLIC_URL + "/AboutUs"} element={<AboutUs />}/>
				<Route path={process.env.PUBLIC_URL + "/our-office"} element={<OurOffice />}/>
				<Route path={process.env.PUBLIC_URL + "/our-clients"} element={<OurClients />}/>
				<Route path={process.env.PUBLIC_URL + "/team"} element={<Team />}/>
				<Route path={process.env.PUBLIC_URL + "/team-details/:slug"} element={<TeamDetails />}/>
				<Route path={process.env.PUBLIC_URL + "/case-study"} element={<CaseStudy />}/>
				<Route path={process.env.PUBLIC_URL + "/case-details/:slug"} element={<CaseDetails />}/>
				<Route path={process.env.PUBLIC_URL + "/testimonials"} element={<Testimonials />}/>
				<Route path={process.env.PUBLIC_URL + "/pricing-table"} element={<PricingTable />}/>
				<Route path={process.env.PUBLIC_URL + "/typography"} element={<Typography />}/>
				<Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />}/>
				<Route path={process.env.PUBLIC_URL + "/404"} element={<ErrorPage />}/>
				<Route path={process.env.PUBLIC_URL + "/coming-soon"} element={<ComingSoon />}/>
				<Route path={process.env.PUBLIC_URL + "/privacy-policy"} element={<PrivacyPolicy />}/>
				<Route path={process.env.PUBLIC_URL + "/terms-use"} element={<TermsOfUse />}/>
				<Route path={process.env.PUBLIC_URL + "/CaseStudy"} element={<CaseStudy />}/>
				<Route path={process.env.PUBLIC_URL + "/CaseStudyDetails"} element={<CaseStudy />}/>
				<Route path={process.env.PUBLIC_URL + "/Service"} element ={<Service/>}/>

			</Routes>
		</ScrollToTop>
    </Router>
  )
}

export default App;
