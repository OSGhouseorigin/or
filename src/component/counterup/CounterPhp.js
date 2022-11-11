import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import CountPhpData from '../../component/counterup/CountPhpData';

const CounterPhp = () => {
    return (
        <div className="section bg-color-dark">
            <div className="container">
                <SectionTitle
                    title="Looking for trustworthy PHP web development services?"
                    description="Origin Softwares provides qualified PHP developers with the skills and experience to help you leverage the major benefits of PHP-based software: High performance, reduced development cost, compatibility with any operating system, and easy troubleshooting."
                    textAlignment="heading-light"
                    textColor=""
                />
                <div className="row">
                    <CountPhpData colSize="col-lg-3 col-6" layoutStyle="" evenTopMargin="" />
                </div>
            </div>
        </div>
    )
}


export default CounterPhp