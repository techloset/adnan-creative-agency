import React from 'react'
import CustomerCard from '../card/CustomerCard'
import icon from '../../assets/svg-icon/icon.svg'

function Customer() {
    return (
        <div className='bg-[#F9F9FD] py-[6.4rem]'>
            <div className='flex gap-20 xl:flex-nowrap flex-wrap justify-center lg:px-40 md:px-10 px-6'>
                <div className='flex gap-10 sm:flex-nowrap flex-wrap  max-w-[580px] justify-center  '>
                    <div className='sm:mt-10 mt-0'>
                        <CustomerCard text='#4C40F7' title='70K+' desc='We have more than customers' />
                        <CustomerCard text='#FF2D59' title='10M+' desc='People who are helped because of our hard work' />

                    </div>
                    <div >
                        <CustomerCard text='#FF6800' title='100+' desc='Projects we have completed' />
                        <CustomerCard text='#4ADB61' title='200+' desc='Support from world-renowned companies' />
                    </div>

                </div>
                <div className='xl:max-w-[460px] max-w-full'>
                    <h1 className='md:leading-[4.5rem] leading:[3rem] md:text-[3.5rem] text-2xl font-semibold'>Customer satisfaction is our first priority</h1>
                    <p className='font-normal text-lg leading-8  text-[#6B6B6B] my-9'>We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies. Their satisfaction is our pleasure. We strive to provide the best service by:</p>
                    <div className='flex gap-6 my-4'>
                        <img src={icon} alt='icon' />
                        <p className='font-normal text-lg text-[#6B6B6B]'>Provide idea support from our creative team</p></div>
                    <div className='flex gap-6'>
                        <img src={icon} alt='icon' />
                        <p className='font-normal text-lg text-[#6B6B6B]'>Provide attractive and professional design services</p></div>
                    <div className='flex gap-6 my-4'>
                        <img src={icon} alt='icon' />
                        <p className='font-normal text-lg text-[#6B6B6B]'>Support for service 24 hours a week</p></div>
                    <div className='flex gap-6'>
                        <img src={icon} alt='icon' />
                        <p className='font-normal text-lg text-[#6B6B6B]'>Helping our customers to grow their business</p></div>
                    <div className='flex gap-6 my-4'>
                        <img src={icon} alt='icon' />
                        <p className='font-normal text-lg text-[#6B6B6B]'>Provide support to market products through online marketplace </p></div>
                </div>
            </div>

        </div>
    )
}

export default Customer 