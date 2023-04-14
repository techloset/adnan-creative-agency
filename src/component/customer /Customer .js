import React from 'react'
import CustomerCard from '../card/CustomerCard'
import { customer } from '../../constent/Constent'

function Customer() {
    return (
        <div className='bg-[#F9F9FD] py-[6.4rem]'>
            <div className='flex max-w-[70rem] gap-20 mx-auto'>
                <div className='flex  gap-10 flex-wrap'>

                    {
                        customer.map((item) => {
                            return <CustomerCard customer={item} />
                        })
                    }
                </div>

                <div className=' max-w-[460px]'>
                    <h1 className='leading-[4.5rem] text-[3.5rem] font-semibold'>Customer satisfaction is our first priority</h1>
                    <p className='font-normal text-lg leading-8  text-[#6B6B6B]'>We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies. Their satisfaction is our pleasure. We strive to provide the best service by:</p>
                    <div><p className='font-normal text-lg text-[#6B6B6B]'>Provide idea support from our creative team</p></div>
                    <div><p className='font-normal text-lg text-[#6B6B6B]'>Provide attractive and professional design services</p></div>
                    <div><p className='font-normal text-lg text-[#6B6B6B]'>Support for service 24 hours a week</p></div>
                    <div><p className='font-normal text-lg text-[#6B6B6B]'>Helping our customers to grow their business</p></div>
                    <div><p className='font-normal text-lg text-[#6B6B6B]'>Provide support to market products through online marketplace </p></div>
                </div>
            </div>

        </div>
    )
}

export default Customer 