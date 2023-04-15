import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import { faqsData } from '../../constent/Constent'

function Frequently() {
  return (
    <div className=' py-[12.5rem]'>
      <div className='max-w-[70rem] mx-auto'>
        <div className='mb-[3.8rem]'>
          <p className='text-center font-semibold text-xl text-[#FF2D59] mb-5'>Frequently Ask Question</p>
          <h1 className='text-center font-semibold text-[2.6rem] leading-[3.5rem]'>Some of our frequently asked questions</h1>
        </div>
        {
          faqsData.map((item) => {
            return <Dropdown faqsData={item} />
          })
        }
      </div>

    </div>
  )
}

export default Frequently