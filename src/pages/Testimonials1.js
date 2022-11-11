import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';


const Testimonials1 = () => {
  return (
    <>
    <SEO title='Testimonials'/>
    <ColorSwitcher/>
    <main>
        <HeaderOne/>
        <div className='section bg-color-light section-padding'>
            <div className='container'>
                <SectionTitle
                title='Testimonials'
                />
            </div>
        </div>
        <FooterOne/>
    </main>
    </>
  )
}

export default Testimonials1