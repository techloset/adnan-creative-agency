import React from 'react'
import arrow from '../../assets/svg-icon/right-arrow.svg'

function Button(props) {
    return (
        <div className='bg-[#4C40F7] cursor-pointer text-white py-[1.2rem] px-[2.6rem] flex gap-4 rounded-xl'
            style={{ filter: 'drop-shadow(5px 10px 30px rgba(76, 64, 247, 0.5))' }}>
            <p>{props.title}</p>
            <img src={arrow} alt='icon' />

        </div>
    )
}

export default Button