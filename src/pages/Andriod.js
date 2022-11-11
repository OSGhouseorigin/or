import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SectionTitle from '../elements/section-title/SectionTitle';

const Andriod = () => {
    return (
        <>
            <SEO title="Andriod" />
            <ColorSwitcher />
            <main className='main-wrapper'>
                <HeaderOne />
                <div className="section bg-color-light section-padding">
                    <div className="container">
                        <SectionTitle
                            title="Andriod"
                        />
                    </div>
                </div>
                <FooterOne />
            </main>
        </>
    )
}

export default Andriod