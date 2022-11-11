import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Tilty from 'react-tilty';
// import { Link } from 'react-router-dom';


const BannerThree = () => {
    return (
            <div className="banner banner-style-1" style={{ Height : '900px'}}>
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                <div className="col-lg-6">
                    <div className="banner-content">
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={100}>
                            {/* <span className="subtitle">JOHNATHAN SMITH</span> */}
                        </AnimationOnScroll>
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                            <h1 className="title">Origin is Most Incredible Software Company</h1>
                        </AnimationOnScroll>
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                        <div className="btn-group">
                            <a href="http://localhost:3000/Contact" className="axil-btn btn-fill-primary btn-large">Contact Us</a>
                            {/* <Link to={process.env.PUBLIC_URL + "/about-us"} className="about-btn">About Me</Link> */}
                        </div>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner-thumbnail">
                    <div className="large-thumb">
                    <img src={process.env.PUBLIC_URL + "/images/banner/appdevelopment.png"} alt="Shape" />
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                            <Tilty perspective={2000} reset={false}>
                               
                            </Tilty>
                        </AnimationOnScroll>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-20">
                <li className="shape shape-1">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-39.png"} alt="Bubble" />
                </li>
                <li className="shape shape-2">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-38.png"} alt="Bubble" />
                </li>
                <li className="shape shape-4">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-5">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"} alt="Bubble" />
                </li>
                <li className="shape shape-6">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-30.png"} alt="Bubble" />
                </li>
                <li className="shape shape-7">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-31.png"} alt="Bubble" />
                </li>
                <li className="shape shape-8 marque-images" />
            </ul>
        </div>

    )
}

export default BannerThree;
