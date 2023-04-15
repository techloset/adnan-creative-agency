import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import exclude from '../../assets/svg-icon/exclude.svg'
import vector from '../../assets/svg-icon/vector.svg'
import arrow from '../../assets/svg-icon/right-arrow .svg'



function Sliders() {


    const slider = React.useRef(null);
    const settings = {
        dots: true,
        dotsClass: 'slick-dots li button',
        appendDots: dots => (
            <div
                style={{

                    borderRadius: "100px",
                    // padding: "45px"
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
                    backgroundColor: 'white',
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
        <div className='bg-[#FE9602] py-[6.2rem]  '>
            <div className='max-w-[70rem] mx-auto relative '>
                <Slider ref={slider} {...settings} className=' text-white'>
                    <div className="">
                        <div className='flex justify-center'> <img src={exclude} alt='exclude' /></div>

                        <p className=' max-w-[720px] mx-auto text-[1.8rem] my-11  w-full text-center'>We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.</p>
                        <p className=' text-center  text-xl font-semibold leading-7 mb-2'>Mark Garfield</p>
                        <p className=' text-center text-xl font-semibold leading-7'>CEO & Head of Product</p>
                    </div>
                    <div className="">
                        <div className='flex justify-center'> <img src={exclude} alt='exclude' /></div>
                        <p className=' max-w-[720px] mx-auto text-[1.8rem] my-11  w-full text-center'>We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.</p>
                        <p className=' text-center  text-xl font-semibold leading-7 mb-2'>Mark Garfield</p>
                        <p className=' text-center text-xl font-semibold leading-7 mb-6'>CEO & Head of Product</p>
                    </div>
                    <div className="">
                        <div className='flex justify-center'> <img src={exclude} alt='exclude' /></div>
                        <p className=' max-w-[720px] mx-auto text-[1.8rem] my-11  w-full text-center'>We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.</p>
                        <p className=' text-center  text-xl font-semibold leading-7 mb-2'>Mark Garfield</p>
                        <p className=' text-center text-xl font-semibold leading-7'>CEO & Head of Product</p>
                    </div>
                    <div className="">
                        <div className='flex justify-center'> <img src={exclude} alt='exclude' /></div>
                        <p className=' max-w-[720px] mx-auto text-[1.8rem] my-11  w-full text-center'>We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.</p>
                        <p className=' text-center  text-xl font-semibold leading-7 mb-2'>Mark Garfield</p>
                        <p className=' text-center text-xl font-semibold leading-7'>CEO & Head of Product</p>
                    </div>
                </Slider>
                <button className='absolute top-[50%] left-[5%] rounded-full w-11 h-11 bg-white hover:bg-[#4C40F7] flex justify-center items-center' onClick={() => slider?.current?.slickPrev()}><img src={arrow} alt='arrow' /></button>
                <button className='absolute top-[50%] right-[5%] rounded-full w-11 h-11 bg-white hover:bg-[#4C40F7] flex justify-center items-center ' onClick={() => slider?.current?.slickNext()}><img src={vector} alt='arrow' /></button>
            </div>
        </div>
    )
}

export default Sliders

