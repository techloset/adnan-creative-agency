import React from 'react'
import map from '../../assets/map.png'
import logo from '../../assets/svg-icon/logo.svg'
import facebook from '../../assets/svg-icon/facebook.svg'
import instagram from '../../assets/svg-icon/instagram.svg'
import linkedin from '../../assets/svg-icon/linkedin.svg'
import twitter from '../../assets/svg-icon/twitter.svg'



function Footer() {
    return (
        <div className='bg-[#00113B] pb-[3.8rem] z-20 block'>

            <div className='max-w-[70rem] mx-auto pt-64'>

                <div className='flex gap-[6.4rem] pb-11'>
                    <div className='flex flex-col gap-8 max-w-[22.5rem]'>
                        <div className='bg-[#4C40F7] w-12 h-12 flex justify-center items-center rounded-xl shadow-xl' ><img src={logo} alt='logo' /></div>
                        <p className='  text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <h1 className='text-white font-semibold text-xl leading-7'>Our Office</h1>
                        <img src={map} alt='map' />
                    </div>
                    <div className='flex flex-col text-white gap-8'>
                        <h1 className='font-semibold text-xl leading-7'>Contact</h1>
                        <div>
                            <p className='font-medium text-base leading-6 '>Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta</p>
                            <p className='font-medium text-base leading-6 my-5'>info@yourdomain.com</p>
                            <p className='font-medium text-base leading-6 '>+62 (0) 000 0000 00</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex justify-between items-center mt-[3.2rem]'><p className='text-white font-medium leading-6 text-base'>© 2021 Creative Agency</p>
                    <div>
                        <ul className='flex gap-9 list-none text-white'>
                            <li className='font-medium text-base'>Home</li>
                            <li className='font-medium text-base'>Works</li>
                            <li className='font-medium text-base'>About</li>
                            <li className='font-medium text-base'>Pricing</li>
                            <li className='font-medium text-base'>About</li>
                        </ul>
                    </div>
                    <div className='flex gap-[0.6rem]'>
                        <div className='bg-[#4C40F7] flex justify-center items-center w-10 h-10 rounded-full '>
                            <img src={facebook} alt='facebook' />
                        </div>
                        <div className='bg-[#4C40F7] flex justify-center items-center w-10 h-10 rounded-full'>
                            <img src={instagram} alt='instagram' />
                        </div>
                        <div className='bg-[#4C40F7] flex justify-center items-center w-10 h-10 rounded-full'>
                            <img src={linkedin} alt='linkedin' />
                        </div>
                        <div className='bg-[#4C40F7] flex justify-center items-center w-10 h-10 rounded-full'>
                            <img src={twitter} alt='twitter' />
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Footer