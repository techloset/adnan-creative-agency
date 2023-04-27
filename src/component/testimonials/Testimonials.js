import React from 'react'
import TestimonalsCard from '../card/TestimonalsCard'
import { testimonalsData } from '../../constent/Constent'

function Testimonials() {
    return (
        <div className='bg-[#F9F9FD] py-[6.2rem]'>
            <div className='max-w-full xl:max-w-[1120px] xl:px-0 lg:px-4 lg:mx-auto mx-6'>

                <p className='text-center text-[#FF2D59] text-xl font-semibold'>Testimonials</p>
                <h1 className='text-center sm:text-[2.6rem] sm:leading-[3.5rem] leading-8 text-2xl mt-5 font-semibold '>Some testimonials from our customers</h1>
                <div className='flex xl:gap-8 gap-4 flex-wrap justify-center'>
                    {
                        testimonalsData.map((item) => {
                            return <TestimonalsCard testimonalsData={item} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonials