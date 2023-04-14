import React, { useState } from 'react'
import ServicesCards from '../card/ServicesCards'
import { data } from '../../constent/Constent'

function OurServices() {
    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <div className='pb-[6.2rem]'>
            <h1 className='text-[#FF2D59] text-xl font-semibold mb-5 text-center'>Our Services</h1>
            <p className='text-center max-w-[70rem] font-semibold mx-auto text-[2.5rem]'>The various services we provide to make your business more powerful</p>

            <div className='grid grid-cols-3 gap-8 mt-[3.8rem] mx-auto max-w-[70rem]'>
                {
                    data.map((item, index) => {
                        return <ServicesCards data={item} onSetActive={() => setActiveIndex(index + 1)} isActive={index === activeIndex - 1} />
                    })
                }

            </div>

        </div>
    )
}

export default OurServices