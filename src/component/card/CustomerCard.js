import React from 'react'

function CustomerCard({ customer }) {
    return (
        <div className=' py-14 px-7 bg-white h-[300px]  rounded-[1.2rem] leading-[4.5rem] max-w-[270px] font-semibold text-[3.5rem]'
        style={{marginTop:customer.mt}}
        >
            <h1 className='text-center'>{customer?.title}</h1>
            <p className=' text-lg font-normal mt-5 text-center leading-8'>{customer?.desc}</p>
        </div>
    )
}

export default CustomerCard