import React from 'react'

function CustomerCard(props) {
    return (

        <div className='sm:py-20 py-8 sm:px-7 px-4 bg-white sm:h-[300px] h-auto  mb-10 text-[#111029] rounded-[1.2rem] leading-[4.5rem] sm:max-w-[270px] max-w-[320px]'>
            <h1 className={`text-center text-[3.5rem] leading-[4.5.rem]`}
                style={{ color: props.text }}
            >{props.title}</h1>
            <p className='text-sm sm:text-lg text-[#111029] font-normal mt-5 text-center leading-8'>{props.desc}</p>
        </div>
    )
}

export default CustomerCard