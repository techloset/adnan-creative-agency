import React, { useState } from 'react'
import logo from '../../assets/svg-icon/logo.svg'
import { ReactComponent as Menu } from '../../assets/svg-icon/menu-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../../redux/slice/authSlice'




function Header() {
  const [active, setActive] = useState()
  const [showTabs, setShowTabs] = useState()


  function toggleTabs() {
    setShowTabs(!showTabs);
  }

  const dispatch = useDispatch()
  const data = useSelector((state) => state.authslice)

  const handleLogout = () => {
    dispatch(signout());
  };

  return (
    <div className='bg-white w-full'>
      <div className='flex md:justify-around justify-between items-center h-32 px-6 md:0px '>
        <div className='bg-[#4C40F7] cursor-pointer  h-9 w-9 md:w-12 md:h-12 flex justify-center items-center rounded-xl' style={{ background: '#4C40F7', boxShadow: '-5px 10px 30px rgba(76, 64, 247, 0.5)' }} ><img src={logo} alt='logo' /></div>
        <div className='md:block hidden'>
          <ul className='flex list-none gap-[5.1rem] text-[#6B6B6B]'>
            <li className='font-semibold text-[1.3rem] cursor-pointer text-[#4C40F7]'>Home</li>
            <li className='font-semibold text-[1.3rem] cursor-pointer'>Works</li>
            <li className='font-semibold text-[1.3rem] cursor-pointer'>About</li>
          </ul>
        </div>
        <div className='bg-[#4C40F7] md:block hidden  cursor-pointer rounded-xl shadow-xl shadow-[#4C40F740] px-9 py-5 text-white'>Contact us</div>

        <div onClick={toggleTabs} className='block md:hidden cursor-pointer' >
          <Menu />
        </div>

      </div>
      {showTabs ? (
        <div className='flex justify-center md:hidden'>
          <ul className=' text-[#6B6B6B] flex flex-col items-center gap-10'>
            <li className='font-semibold text-sm'><link to='/leanding-page'>Home</link></li>
            <li className='font-semibold text-sm' >Works</li>
            <li className='font-semibold text-sm '>About</li>
            <li className='font-samibold text-sm ' onClick={handleLogout}>LogOut</li>
            <div className='bg-[#4C40F7] cursor-pointer rounded-xl shadow-xl shadow-[#4C40F740] px-5 py-3 text-white'>Contact us</div>
          </ul>
        </div>)
        : null
      }
    </div>
  )
}

export default Header