import React from 'react'
import bgimg from '../../assets/Group4.png'
import img from '../../assets/Group.png'

function Documentation() {
    return (
        <div className='pt-[6.3rem]'>
            <h1 className='text-[#FF2D59] text-xl mb-5 font-semibold text-center'>Our Documentation</h1>
            <p className='text-center max-w-[70rem] mb-[3.7rem] font-semibold mx-auto text-[2.6rem]'>See what our profile is like and how we work for your business</p>
            <div className='justify-center bg-cover'
                style={{ backgroundImage: `url(${bgimg})` }}>

                <div className='max-w-[70rem] mx-auto'>
                    <img src={img} alt='img not found' />
                </div>
            </div>
        </div>
    )
}

export default Documentation