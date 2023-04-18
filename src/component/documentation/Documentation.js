import React from 'react'
import bgimg from '../../assets/Group4.png'
import img from '../../assets/Group.png'

function Documentation() {
    return (
        <div className='pt-[6.3rem]'>
            <div className='lg:px-40 px-6'>
                <h1 className='text-[#FF2D59] text-xl mb-5 font-semibold text-center'>Our Documentation</h1>
                <p className='text-center mb-[3.7rem] font-semibold lg:text-[2.6rem] leading-8 lg:leading-[3.5rem] text-2xl'>See what our profile is like and how we work for your business</p>
            </div>

            <div className='justify-center bg-cover lg:px-40 px-6'
                style={{ backgroundImage: `url(${bgimg})` }}>

                <div className=''>
                    <img src={img} alt='img not found' />
                </div>
            </div>
        </div>
    )
}

export default Documentation