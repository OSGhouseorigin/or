import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import SectionTitle from '../elements/section-title/SectionTitle';

const Fashion = () => {
  return (
    <>
    <SEO title='Fashion'/>
    <main className='main-wrapper'>
        <HeaderOne/>
        <div className='section bg-color-light section-padding'>
            <div className='container'>
                <SectionTitle
                title='Fashion'
                />
            </div>
        </div>
        <FooterOne/>
    </main>
    </>
  )
}

export default Fashion