import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import exclude from '../../assets/svg-icon/exclude.svg'
import image from '../../assets/image.png'




function Sliders() {
    const slider = React.useRef(null);
    const settings = {
        dots: true,
        dotsClass: 'slick-dots li button',
        appendDots: dots => (
            <div
                style={{

                    borderRadius: "100px",
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "15px",
                    height: '4px',
                    backgroundColor: '#FFCC00 ',
                    borderRadius: '2'
                }}
            >
            </div>
        ),
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='bg-[#FE9602] py-[6.2rem]  relative'>
            <div className='xl:mx-40  md:mx-20 sm:mx-6 mx-2 relative '>
                <Slider ref={slider} {...settings} className=' text-white'>
                    <div className="">
                        <div className='flex justify-center'> <img src={exclude} alt='exclude' /></div>

                        <p className=' lg:max-w-[748px] max-w-[450px] mx-auto text-2xl lg:text-[1.8rem] leading-10 my-11  w-full text-center'>We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.</p>
                        <p className=' text-center  text-xl font-semibold leading-7 mb-2'>Mark Garfield</p>
                        <p className=' text-center text-xl font-semibold leading-7'>CEO & Head of Product</p>
                    </div>
                    <div className="">
                        <div className='flex justify-center'> <img src={exclude} alt='exclude' /></div>
                        <p className=' lg:max-w-[748px] max-w-[450px] mx-auto text-2xl my-11 lg:text-[1.8rem] leading-10 w-full text-center'>We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.</p>
                        <p className=' text-center  text-xl font-semibold leading-7 mb-2'>Mark Garfield</p>
                        <p className=' text-center text-xl font-semibold leading-7 mb-6'>CEO & Head of Product</p>
                    </div>
                    <div className="">
                        <div className='flex justify-center'> <img src={exclude} alt='exclude' /></div>
                        <p className=' lg:max-w-[748px] max-w-[450px] mx-auto text-2xl my-11 lg:text-[1.8rem] leading-10 w-full text-center'>We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.</p>
                        <p className=' text-center  text-xl font-semibold leading-7 mb-2'>Mark Garfield</p>
                        <p className=' text-center text-xl font-semibold leading-7'>CEO & Head of Product</p>
                    </div>
                    <div className="">
                        <div className='flex justify-center'> <img src={exclude} alt='exclude' /></div>
                        <p className=' lg:max-w-[748px] max-w-[450px] sm:mx-auto text-2xl my-11 lg:text-[1.8rem] leading-10  w-full text-center'>We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.</p>
                        <p className=' text-center  text-xl font-semibold leading-7 mb-2'>Mark Garfield</p>
                        <p className=' text-center text-xl font-semibold leading-7'>CEO & Head of Product</p>
                    </div>
                </Slider>
                <button className='absolute top-[50%] xl:left-0 left-2 sm:flex hidden rounded-full w-11 h-11 bg-white hover:bg-[#4C40F7] text-[#ABAFC7] hover:text-white justify-center items-center' onClick={() => {
                    slider?.current?.slickPrev()
                }}
                ><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.58917 10.5103L6.41083 11.6886L0.821667 6.09942L6.41083 0.510254L7.58917 1.68859L4.01167 5.26609H12V6.93275H4.01167L7.58917 10.5103Z" fill="currentColor" />
                    </svg>
                </button>

                <button className='absolute top-[50%] xl:right-0 right-2 hidden rounded-full w-11 h-11 bg-white hover:bg-[#4C40F7] text-[#ABAFC7] hover:text-white sm:flex justify-center items-center' onClick={() => {
                    slider?.current?.slickNext()
                }}
                ><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.41083 10.5103L5.58917 11.6886L11.1783 6.09942L5.58917 0.510254L4.41083 1.68859L7.98833 5.26609H0V6.93275H7.98833L4.41083 10.5103Z" fill="currentColor" />
                    </svg>
                </button>
            </div>
            <div className=''>
                <img className='absolute -z-50 w-96 h-[900px] top-[25%] right-0' src={image} alt='vdvj' />
            </div>
        </div>
    )
}

export default Sliders

