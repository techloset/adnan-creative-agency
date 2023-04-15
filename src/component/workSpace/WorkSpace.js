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



function WorkSpace() {
    return (
        <div className='py-[12.5rem] '>
            <div className='max-w-[70rem] mx-auto '>
                <h1 className='text-[#FF3B2F] text-xl mb-5 font-semibold text-center'>Working space</h1>
                <p className='mb-[3.7rem] text-center font-semibold mx-auto text-[2.6rem]'>Let’s meet our interior room decoration</p>
                <div className='flex gap-8'>
                    <div className='flex flex-col gap-[1.9rem]'>
                        <img src={mask6} alt='mask' />
                        <img src={mask5} alt='mask' />
                    </div>
                    <div className='flex flex-col gap-[1.9rem]'>
                        <img src={mask4} alt='mask' />
                        <img src={mask3} alt='mask' />
                    </div>
                    <div className='flex flex-col gap-[1.9rem]'>
                        <img src={mask1} alt='mask' />
                        <img src={mask2} alt='mask' />
                    </div>
                </div>
                <div className='mt-[12.5rem]'>
                    <h1 className='text-center text-xl mb-5 font-semibold text-[#FF2D59]'>Some of Our Great Customers</h1>
                    <p className='text-center b-[3.7rem] font-semibold mx-auto text-[2.6rem]'>Some of the companies we have worked with</p>
                    <div className='mt-20  '>
                        <div className='flex justify-between'>
                            <img src={amazon} alt='' />
                            <img src={jeep} alt='' />
                            <img src={careem} alt='' />
                            <img src={hubspot} alt='' />
                            <img src={jquery} alt='' />
                        </div>
                        <div className='flex justify-between mt-[3.7rem]'>
                            <img src={canon} alt='' />
                            <img src={fedex} alt='' />
                            <img src={bitcoin} alt='' />
                            <img src={pirelli} alt='' />
                            <img src={philps} alt='' />
                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default WorkSpace