import React from 'react'
import arrow from '../../assets/svg-icon/right-arrow.svg'

function Button(props) {
    return (
        <div className='bg-[#4C40F7] text-white py-[1.2rem] px-[2.6rem] flex gap-4 rounded-xl'>
            {/* <div className=''> */}
            <p>{props.title}</p>
            <img src={arrow} alt='icon' />
            {/* </div> */}

        </div>
    )
}

export default Button