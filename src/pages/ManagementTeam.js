import React from 'react'
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SectionTitle from '../elements/section-title/SectionTitle';


const ManagementTeam = () => {
    return (
        <>
        <SEO title="Management Team"/>
        <ColorSwitcher/>
        <main className='main-wrapper'>
            <HeaderOne/>
            <div className='section bg-color-light section-padding'>
                <div className='container'>
                    <SectionTitle
                    title="Management Team"
                    />
                </div>
            </div>
            <FooterOne/>
        </main>
        </>
    )
}

export default ManagementTeam