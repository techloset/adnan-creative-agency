import React from 'react'
import mask1 from '../../assets/mask-1.png'
import mask2 from '../../assets/mask-2.png'
import mask3 from '../../assets/mask-3.png'
import mask4 from '../../assets/mask-4.png'
import mask5 from '../../assets/mask-5.png'
import mask6 from '../../assets/mask-6.png'
import bitcoin from '../../assets/svg-icon/bitcoin.svg'
import canon from '../../assets/svg-icon/canon.svg'
import fedex from '../../assets/svg-icon/fedex.svg'
import jeep from '../../assets/svg-icon/jeep.svg'
import hubspot from '../../assets/svg-icon/hubspot.svg'
import careem from '../../assets/svg-icon/careem.svg'
import jquery from '../../assets/svg-icon/jquery.svg'
import philps from '../../assets/svg-icon/philps.svg'
import pirelli from '../../assets/svg-icon/pirelli.svg'
import amazon from '../../assets/svg-icon/amazon.svg'
import bg from '../../assets/bg-image-1.png'



function WorkSpace() {
    return (
        <div className='sm:py-[12.5rem] py-20  relative'>
            <div className='lg:px-40 px-6 '>
                <h1 className='text-[#FF3B2F] text-xl mb-5 font-semibold text-center'>Working space</h1>
                <p className='mb-[3.7rem] text-center font-semibold sm:text-[2.6rem] text-2xl leading-8 sm:leading-[3.5rem]'>Let’s meet our interior room decoration</p>
                <div className='flex gap-8 justify-center flex-wrap md:flex-nowrap '>
                    <div className='flex w-[300px] md:w-full flex-col gap-[1.9rem]'>
                        <img src={mask6} alt='mask' />
                        <img src={mask5} alt='mask' />
                    </div>
                    <div className='flex w-[300px] md:w-full flex-col gap-[1.9rem]'>
                        <img src={mask4} alt='mask' />
                        <img src={mask3} alt='mask' />
                    </div>
                    <div className='flex flex-col w-[300px] md:w-full gap-[1.9rem]'>
                        <img src={mask1} alt='mask' />
                        <img src={mask2} alt='mask' />
                    </div>
                </div>
                <div className='md:mt-[12.5rem] mt-20'>
                    <h1 className='text-center text-xl mb-5 font-semibold text-[#FF2D59]'>Some of Our Great Customers</h1>
                    <p className='text-center b-[3.7rem] font-semibold mx-auto sm:text-[2.6rem] text-2xl leading-8 sm:leading-[3.5rem]'>Some of the companies we have worked with</p>
                    <div className='mt-5'>
                        <div className='flex justify-center md:gap-x-28 gap-x-20 xl:flex-nowrap flex-wrap'>
                            <img className='mt-[3.7rem]' src={amazon} alt='amazon' />
                            <img className='mt-[3.7rem]' src={jeep} alt='jeep' />
                            <img className='mt-[3.7rem]' src={careem} alt='careem' />
                            <img className='mt-[3.7rem]' src={hubspot} alt='hubspot' />
                            <img className='mt-[3.7rem]' src={jquery} alt='jquery' />
                        </div>
                        <div className='flex justify-center md:gap-x-20 sm:gap-10 gap-x-10 xl:flex-nowrap flex-wrap  '>
                            <img className='mt-[3.7rem]' src={canon} alt='canon' />
                            <img className='mt-[3.7rem]' src={fedex} alt='fedex' />
                            <img className='mt-[3.7rem]' src={bitcoin} alt='bitcoin' />
                            <img className='mt-[3.7rem]' src={pirelli} alt='pirelli' />
                            <img className='mt-[3.7rem]' src={philps} alt='philps' />
                        </div>

                    </div>
                </div>

            </div>
            <img className='absolute  top-[16%] -z-20' src={bg} alt='wave' />
            <img className='absolute  top-[42%] -z-20' src={bg} alt='wave' />
        </div>
    )
}

export default WorkSpace