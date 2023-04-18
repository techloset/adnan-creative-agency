import React from 'react'
import send from '../../assets/svg-icon/send.svg'
import Button from '../button/Button'
import bg from '../../assets/bg-image-1.png'



function Project() {
    return (
        <div className='relative'>
            <div className='lg:px-40 px-6'>
                <div className='bg-[#FFCC00] sm:my-[12.5rem] my-24 text-white rounded-[1.3rem] pt-[3.7rem] pb-20 flex flex-col items-center'>
                    <p className='font-medium text-base'>Are You Ready For </p>
                    <h1 className='mt-4 mb-8 font-semibold  leading-[3.5rem] sm:text-[2.6rem] text-2xl'>Start a New Project</h1>
                    <Button title='Start Now' />
                </div>
                <div className='bg-[#4C40F7] px-4 -mb-[12.5rem] z-50 relative text-white rounded-[1.3rem] pt-[3.7rem] pb-20 flex flex-col items-center'>
                    <p className='font-medium text-base'>Get Notified About Project </p>
                    <h1 className='mt-4 mb-8 font-semibold  leading-[3.5rem] sm:text-[2.6rem] text-2xl'>Subscribe Now</h1>
                    <div className='sm:w-[500px] w-full relative '>
                        <input className='px-7 sm:h-[4.8rem] h-[3rem] w-full rounded-xl' type='text' placeholder='Email' />
                        <img className='absolute top-[28%] sm:top-[35%] bottom-[50%] right-7' src={send} alt='sending icon' />
                    </div>
                </div>
            </div>
            <img className='absolute  top-[-8%] -z-20' src={bg} alt='wave' />
            <img className='absolute  top-[52%] -z-20' src={bg} alt='wave' />
        </div>

    )
}

export default Project