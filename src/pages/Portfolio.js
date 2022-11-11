import React from 'react';
import { Link } from 'react-router-dom';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import SectionTitle from '../elements/section-title/SectionTitle';


const Portfolio = () => {
    return (

        <>
            <SEO title="Portfolio" />
            <main className="main-wrapper">
                <HeaderOne />
                <div className='section bg-color-light section-padding'>
                    <div className='container'>
                        <SectionTitle 
                            title="Portfolio"
                        />
                        <nav className='mainmenu-nav'>
                            <ul className='mainmenu'>
                                <div className='texto'>
                                    <li className='menu-item-has-children'>
                                        <li><Link to={process.env.PUBLIC_URL + "#"}>Show All</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "#"}>Websites</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "#"}>E-commerce</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "#"}>Lms </Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "#"}>Mobile Application</Link></li>
                                    </li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>

                <FooterOne />
            </main>
        </>



    )
}

export default Portfolio


// import React, { useState, useEffect } from 'react';
// import ProjectData from "../../data/project/ProjectData.json";
// import ProjectPropOne from './itemProp/ProjectPropOne';


// const filters = [
//     {
//         id: 1,
//         label: "Show All",
//     },
//     {
//         id: 2,
//         label: "Website",
//     },
//     {
//         id: 3,
//         label: "E-commerce",
//     },
//     {
//         id: 4,
//         label: "LMS",
//     },
//     {
//         id: 5,
//         label: "Mobile Application",
//     }
// ];

// const AllData = ProjectData;

// const Portfolio = ({ parentClass, colSize, itemShow, columnGap }) => {

//     const [getAllItems] = useState(AllData);
//     const [visiableProject] = useState(itemShow ? itemShow : 6);
//     const [activeFilter, setActiveFilter] = useState("");
//     const [visibleItems, setVisibleItems] = useState([]);


//     useEffect(() => {
//         setActiveFilter(filters[0].label);
//         setVisibleItems(getAllItems.filter((item) => item.id <= visiableProject));
//     }, []);

//     const handleChange = (e) => {
//         e.preventDefault();
//         let target = e.target.textContent;

//         setActiveFilter(target);

//         let tempData = [];
//         if (target === filters[0].label) {
//             tempData = getAllItems.filter((data) => data.id <= visiableProject);
//         } else {
//             for (let i = 0; i < getAllItems.length; i++) {
//                 const element = getAllItems[i];
//                 let categories = element['category'];

//                 if (categories.includes(target)) {
//                     tempData.push(element)
//                 }
//             }
//         }
//         setVisibleItems(tempData);
//     };
//     return (
//         <div className='section section-padding-2 isotope-button isotope-project-btn'>
//             <div className='container'>
//                 <h1>Portfolio</h1>
//                 {filters.map((filter) => (
//                     <button onClick={handleChange} className={
//                         filter.label === activeFilter
//                             ? "is-checked"
//                             : " "
//                     }
//                         key={filter.id}>{filter.label}</button>
//                 ))}

//                 <div className={`row ${columnGap ? columnGap : "row-35"}`}>
//                     {visibleItems.map((data) => (
//                         <div className={colSize ? colSize : "col-md-6"} key={data.id}>
//                             <ProjectPropOne projectStyle="" portfolio={data} />
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </div>
//     )
// }

//export default Portfolio