import React from 'react'
import TestimonalsCard from '../card/TestimonalsCard'
import { testimonalsData } from '../../constent/Constent'

function Testimonials() {
    return (
        <div className='bg-[#F9F9FD] py-[6.2rem]'>
            <div className=' max-w-[70rem] mx-auto'>

                <p className='text-center text-[#FF2D59] text-xl font-semibold'>Testimonials</p>
                <h1 className='text-center text-[2.6rem] font-semibold '>Some testimonials from our customers</h1>
                <div className='flex gap-8 flex-wrap'>
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