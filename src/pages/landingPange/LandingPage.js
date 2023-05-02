import React from 'react'
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import FirstSection from '../../component/firstSection/FirstSection'
import OurServices from '../../component/ourServices/OurServices'
import Documentation from '../../component/documentation/Documentation'
import Customer from '../../component/customer /Customer '
import WorkSpace from '../../component/workSpace/WorkSpace'
import Slider from '../../component/slider/Slider'
import Frequently from '../../component/ frequently / Frequently'
import Testimonials from '../../component/testimonials/Testimonials'
import Project from '../../component/project/Project'

function LandingPage() {
    return (
        <div>
            <Header />
            <FirstSection />
            <OurServices />
            <Documentation />
            <Customer />
            <WorkSpace />
            <Slider/>
            <Frequently />
            <Testimonials />
            <Project />
            <Footer />
        </div>
    )
}

export default LandingPage