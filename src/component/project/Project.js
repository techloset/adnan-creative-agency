import React from 'react'
import send from '../../assets/svg-icon/send.svg'
import Button from '../button/Button'


function Project() {
    return (
        <div className='max-w-[70rem] mx-auto  '>
            <div className='bg-[#FFCC00] mt-[12.5rem] mb-[12.5rem] text-white rounded-[1.3rem] pt-[3.7rem] pb-20 flex flex-col items-center'>
                <p className='font-medium text-base'>Are You Ready For </p>
                <h1 className='mt-4 mb-8 font-semibold  leading-[3.5rem] text-[2.6rem]'>Start a New Project</h1>
                <Button title='StartNow' />
            </div>
            <div className='bg-[#4C40F7] -mb-[12.5rem] z-50 relative text-white rounded-[1.3rem] pt-[3.7rem] pb-20 flex flex-col items-center'>
                <p className='font-medium text-base'>Get Notified About Project </p>
                <h1 className='mt-4 mb-8 font-semibold  leading-[3.5rem] text-[2.6rem]'>Subscribe Now</h1>
                <div className='w-[500px]  relative '>
                    <input className='px-7 h-[4.8rem] w-full rounded-xl' type='text' placeholder='Email' />
                    <img className='absolute top-[35%] bottom-[50%] right-7' src={send} alt='sending icon' />
                </div>
            </div>
        </div>
    )
}

export default Project