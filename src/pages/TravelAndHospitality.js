import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SectionTitle from '../elements/section-title/SectionTitle';

const TravelAndHospitality = () => {
  return (
    <>
    <SEO title='Travel &amp; Hospitality'/>
    <ColorSwitcher/>
    <main className='main-wrapper'>
        <HeaderOne/>
        <div className='section bg-color-light section-padding'>
            <div className='container'>
                <SectionTitle
                title='Travel &amp; Hospitality'
                />
            </div>
        </div>
        <FooterOne/>
    </main>
    </>
  )
}

export default TravelAndHospitality