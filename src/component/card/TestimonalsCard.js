import React from 'react'

function TestimonalsCard({ testimonalsData }) {

    return (
        <div className='bg-white rounded-[1.3rem] sm:mt-[7.5rem] mt-16 cursor-pointer hover:shadow-xl hover:shadow-[-15px 20px 70px rgba(76, 64, 247, 0.2);] sm:px-8 px-6 sm:pb-11 pb-8'>
            <div className='flex flex-col items-center'>
                <img className='-mt-[4rem] ' src={testimonalsData?.img} alt='profile' />
                <h1 className='text-[#111029] mt-[1.9rem] mb-2 font-semibold text-center text-2xl'>{testimonalsData?.name}</h1>
                <p className='font-normal text-[#ABAFC7] text-center text-base'>{testimonalsData?.company}</p>
                <p className='text-[#70798B] sm:max-w-[288px] max-w-full sm:my-6 my-4 text-center leading-8 sm:text-lg text-sm'>{testimonalsData?.desc}</p>
                <img src={testimonalsData?.review} alt='review' />
            </div>
        </div>

    )
}

export default TestimonalsCard