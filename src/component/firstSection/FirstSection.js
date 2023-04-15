import React from 'react'
import Button from '../button/Button'
import image from '../../assets/image.webp'
import bg from '../../assets/bg-image-1.png'

function FirstSection() {
    return (
        <div className='relative pb-[11rem]'>

            <div className='flex max-w-[70rem] mx-auto '>
                <div className='mt-28'>
                    <h1 className=' font-semibold text-[3.5rem] text-[#111029] leading-[4.5rem]'>
                        Make your business <span className='text-[#FF6800]'> more powerful</span>
                        with us
                    </h1>
                    <p className=' font-normal text-lg leading-8 text-[#6B6B6B] my-6'>We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.</p>
                    <div className='flex justify-start'>
                        <Button title='Get Started' />
                    </div>
                </div>
                <div className='-mr-32'>
                    <img className='' src={image} alt='img' />
                </div>
            </div>
            <img className='absolute  top-28 -z-20' src={bg} alt='kh' />
        </div>

    )
}

export default FirstSection