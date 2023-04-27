import React, { useState } from 'react'
import ServicesCards from '../card/ServicesCards'
import { data } from '../../constent/Constent'
import bg from '../../assets/bg-image-1.png'


function OurServices() {
    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <div className='relative pb-[6.2rem] flex flex-col justify-center items-center'>
            <div className='xl:max-w-[1120px]  lg:mx-6 md:mx-20   '>
                <h1 className='text-[#FF2D59] text-xl font-semibold mb-5 text-center'>Our Services</h1>
                <p className='text-center font-semibold  lg:text-[2.6rem] leading-8 lg:leading-[3.5rem] text-2xl'>The various services we provide to make your business more powerful</p>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8  mt-[3.8rem]  '>
                    {
                        data.map((item, index) => {
                            return <ServicesCards key={index} data={item} onSetActive={() => setActiveIndex(index + 1)} isActive={index === activeIndex - 1} />
                        })
                    }
                </div>
            </div>
            <img className='absolute  top-[48%] -z-20' src={bg} alt='wave' />
        </div>
    )
}

export default OurServices