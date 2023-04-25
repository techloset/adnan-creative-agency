import React from 'react'

function CustomerCard(props) {
    return (

        <div className='py-14 px-7 bg-white h-[300px] mb-10 text-[#111029] rounded-[1.2rem] leading-[4.5rem] max-w-[270px] font-semibold text-[3.5rem]'>
            <h1 className={`text-center text-[3.5rem] leading-[4.5.rem]`}
                style={{ color: props.text }}
            >{props.title}</h1>
            <p className=' text-lg text-[#111029] font-normal mt-5 text-center leading-8'>{props.desc}</p>
        </div>
    )
}

export default CustomerCard