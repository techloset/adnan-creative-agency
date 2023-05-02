import React from 'react'
import TestimonalsCard from '../card/TestimonalsCard'
import { testimonalsData } from '../../constent/Constent'

function Testimonials() {
    return (
        <div className='bg-[#F9F9FD] py-[6.2rem]'>
            <div className='max-w-full xl:max-w-[1120px] xl:px-0 lg:px-4 lg:mx-auto mx-6'>

                <p className='text-center text-[#FF2D59] text-xl font-semibold'>Testimonials</p>
                <h1 className='text-center font-semibold xl:max-w-[1120px] lg:max-w-[650px] max-w-full mx-6 lg:mx-auto  xl:text-[2.6rem] leading-8 lg:leading-[3.5rem] text-xl lg:text-2xlmt-5 mb-4 sm:mb-0'>Some testimonials from our customers</h1>
                <div className='flex xl:gap-8 gap-4 flex-wrap justify-center'>
                    {
                        testimonalsData.map((item,index) => {
                            return <TestimonalsCard key={index} testimonalsData={item} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonials