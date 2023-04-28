import React from 'react'
import bgimg from '../../assets/Group4.png'
import img from '../../assets/Group.png'

function Documentation() {
    return (
        <div className='pt-[6.3rem]'>
            <div className='lg:px-40 px-6'>
                <h1 className='text-[#FF2D59] text-xl mb-5 font-semibold text-center'>Our Documentation</h1>
                <p className='text-center font-semibold xl:max-w-[1120px] lg:max-w-[650px] max-w-full mx-6 lg:mx-auto  xl:text-[2.6rem] leading-8 lg:leading-[3.5rem] text-xl lg:text-2xl'>See what our profile is like and how we work for your business</p>
            </div>

            <div className='justify-center bg-cover h-full lg:px-40 px-6  lg:pb-24 sm:pb-12 pb-0'
                style={{ backgroundImage: `url(${bgimg})` }}>

                <div className='w-full'>
                    <img src={img} alt='img not found' />
                </div>
            </div>
        </div>
    )
}

export default Documentation