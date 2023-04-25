import React from 'react'
import Button from '../button/Button'
import image from '../../assets/image.webp'
import bg from '../../assets/bg-image-1.png'

function FirstSection() {
    return (
        <div className='relative '>
            <div className='md:pb-[12.5rem] pb-20 pl-6 lg:pl-40 pr-6'>
                <div className='flex gap-6 justify-center lg:justify-between items-center flex-wrap'>
                    <div className='md:mt-28 mt-14'>
                        <h1 className=' font-semibold lg:max-w-sm  md:max-w-full tracking-[-0.4px] w-full text-3xl leading-9 xl:text-[3.5rem] text-[#111029] md:leading-[4.5rem]'>
                            <span className=' whitespace-pre-wrap lg:whitespace-nowrap'>Make your business</span> <span className='text-[#FF6800] whitespace-nowrap'> more powerful </span>
                        </h1>
                        <p className='font-semibold text-3xl leading-9 xl:text-[3.5rem] text-[#111029]'>with us</p>
                        <p className=' font-normal text-lg leading-8 text-[#6B6B6B] md:max-w-md lg:max-w-[365px] max-w-full my-6'>We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.</p>
                        <div className='flex justify-start'>
                            <Button title='Get Started' />
                        </div>
                    </div>
                    <div className='md:w-[70%] xl:w-[60%] lg:w-[50%]  w-full mt-10'>
                        <img className='w-full  ' src={image} alt='img' />
                    </div>
                </div>
            </div>
            <img className='absolute lg:block hidden  top-[18%] -z-20 ' src={bg} alt='wave' />

        </div>
    )
}

export default FirstSection