import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import { faqsData } from '../../constent/Constent'
import image from '../../assets/image-1.png'

function Frequently() {
  return (
    <div className=' sm:py-[12.5rem] py-24 relative'>
      <div className='lg:px-40 px-6'>
        <div className='mb-[3.8rem] '>
          <p className='text-center font-semibold text-xl text-[#FF2D59] mb-5'>Frequently Ask Question</p>
          <h1 className='text-center font-semibold xl:max-w-[1120px] lg:max-w-[650px] max-w-full mx-2 lg:mx-auto  xl:text-[2.6rem] leading-8 lg:leading-[3.5rem] text-xl lg:text-2xl'>Some of our frequently asked questions</h1>
        </div>
        {
          faqsData.map((item, index) => {
            return <Dropdown key={index} faqsData={item} />
          })
        }
      </div>
      <div>
        <img className=' absolute -z-50 h-[900px] top-[12%]' src={image} alt='image' />
      </div>
    </div>
  )
}

export default Frequently