import React, {useState, useEffect,} from 'react';
import { Link } from 'react-router-dom';
import PricingData from "../../data/pricing/PricingData.json";
import { FaCheck} from "react-icons/fa";
// import Carousel from 'react-elastic-carousel';
import Carousel from 'react-slick';



const getPriceingData = PricingData;

const billed = [
    {
        id: 1,
        label: "Billed Yearly"
    },
    {
        id: 2,
        label: "Billed Monthly"
    }
]
const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1500,
    cssEase: "linear"
  };

  const settingsM = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear"
  };

const PricingOne = () => {

    const [isActive, setActive] = useState("");

    useEffect(() => {
        setActive(billed[0].label.toLowerCase());
		
    }, []);

    // eslint-disable-next-line
    const handleChange = (e) => {
        setActive(e.target.textContent.toLowerCase());
        
    };


    return (
        <>
        <Carousel className='price-mobile' {...settingsM}>
            {/* <Carousel enableAutoPlay autoPlaySpeed={1500} itemsToShow={2} infiniteLoop={true}> */}
                {getPriceingData.map((data, index) => (
                    <div className="col-lg-10" key={index}>
                        <div className="pricing-table pricing-borderd">
                            <div className="pricing-header">
                                <h3 className="title">{data.title}</h3>
                                <span className="subtitle">{data.subtitle}</span>
                                <div className="price-wrap">
                                    <div className="yearly-pricing">
                                        <span className="amount">{billed[0].label.toLowerCase() === isActive ? data.yprice : data.mprice }</span>
                                        <span className="duration">{billed[0].label.toLowerCase() === isActive ? data.yduration : data.mduration }</span>
                                    </div>
                                </div>
                                <div className="pricing-btn">
                                    <Link to="#" className="axil-btn btn-large btn-borderd">Get Started Today</Link>
                                </div>
                            </div>
                            <div className="pricing-body">
                                <ul className="list-unstyled">
                                    {data.facility.map((data, index) => (
                                        <li key={index}><FaCheck /> {data}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                ))}
  {/* <h1>1</h1>
  <h1>2</h1>
  <h1>3</h1>
  <h1>4</h1>
  <h1>5</h1>
  <h1>6</h1> */}
</Carousel>
        
        <Carousel className='price-media' {...settings}>
            {/* <Carousel enableAutoPlay autoPlaySpeed={1500} itemsToShow={2} infiniteLoop={true}> */}
                {getPriceingData.map((data, index) => (
                    <div className="col-lg-10" key={index}>
                        <div className="pricing-table pricing-borderd">
                            <div className="pricing-header">
                                <h3 className="title">{data.title}</h3>
                                <span className="subtitle">{data.subtitle}</span>
                                <div className="price-wrap">
                                    <div className="yearly-pricing">
                                        <span className="amount">{billed[0].label.toLowerCase() === isActive ? data.yprice : data.mprice }</span>
                                        <span className="duration">{billed[0].label.toLowerCase() === isActive ? data.yduration : data.mduration }</span>
                                    </div>
                                </div>
                                <div className="pricing-btn">
                                    <Link to="#" className="axil-btn btn-large btn-borderd">Get Started Today</Link>
                                </div>
                            </div>
                            <div className="pricing-body">
                                <ul className="list-unstyled">
                                    {data.facility.map((data, index) => (
                                        <li key={index}><FaCheck /> {data}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                ))}
  {/* <h1>1</h1>
  <h1>2</h1>
  <h1>3</h1>
  <h1>4</h1>
  <h1>5</h1>
  <h1>6</h1> */}
</Carousel>
{/* </Carousel> */}
        
            {/* <div className="pricing-billing-duration">
                <ul>
                    {billed.map((data) => (
                        <li className="nav-item" key={data.id}>
                            <button onClick={handleChange} className={`nav-link ${data.label.toLocaleLowerCase() === isActive ? "active": ""}`}>{data.label}</button>
                        </li>
                    ))}
                </ul>
            </div> */}
            
            {/* <div className="row">
            <Carousel itemToShow={2}>
                {getPriceingData.map((data, index) => (
                    <div className="col-lg-4" key={index}>
                        <div className="pricing-table pricing-borderd">
                            <div className="pricing-header">
                                <h3 className="title">{data.title}</h3>
                                <span className="subtitle">{data.subtitle}</span>
                                <div className="price-wrap">
                                    <div className="yearly-pricing">
                                        <span className="amount">{billed[0].label.toLowerCase() === isActive ? data.yprice : data.mprice }</span>
                                        <span className="duration">{billed[0].label.toLowerCase() === isActive ? data.yduration : data.mduration }</span>
                                    </div>
                                </div>
                                <div className="pricing-btn">
                                    <Link to="#" className="axil-btn btn-large btn-borderd">Get Started Today</Link>
                                </div>
                            </div>
                            <div className="pricing-body">
                                <ul className="list-unstyled">
                                    {data.facility.map((data, index) => (
                                        <li key={index}><FaCheck /> {data}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                ))}
                </Carousel>
            </div> */}
            
       
        </>
    )
}

export default PricingOne;