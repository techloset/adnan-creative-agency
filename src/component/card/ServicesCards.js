import React, { useState } from 'react'

function ServicesCards({ data, onSetActive, isActive }) {

    const [isHoverd, setHovered] = useState(false)

    const style = {

    }

    const hoverStyles = {
        backgroundColor: isHoverd ? data.bgColor : 'white',
        transition: 'background-color 0.5s ease',
        color: isHoverd ? "white" : "#6B6B6B",
        boxShadow: isHoverd ? data.bgShawod : ''

    };

    return (
        <div className='shadow-md rounded-lg py-11 px-[1.80rem] relative'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}

            style={hoverStyles}
        >
            <div className='' >
            </div>

            <div className=' flex flex-col items-center'>
                <div className='  w-24 h-24 flex justify-center items-center rounded-full mb-11'
                    style={{ backgroundColor: isHoverd ? 'white' : data.bgColor, filter: data.shawod }}>
                    <img src={isHoverd ? data.img : data.image} alt='services' />
                </div>
                <h1 className=' font-semibold text-xl left-7'>{data.title}</h1>
                <p className='text-center text-lg font-normal leading-8 mt-4 mb-11'>{data.desc}</p>
                <div className='w-11 h-11 rounded-full bg-gray-100 flex justify-center items-center'>
                    <img src={data.icon} alt='icon' />
                </div>
            </div>
        </div>
    )
}

export default ServicesCards
