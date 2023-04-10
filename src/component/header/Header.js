import React, { useState } from 'react'
import logo from '../../assets/svg-icon/logo.svg'



function Header() {
  const [active, setActive] = useState()


  const TabClick = (index) => {
    setActive(index)
  }

  return (
    <div className='bg-white flex justify-around items-center h-32'>

      <div className='bg-[#4C40F7] w-12 h-12 flex justify-center items-center rounded-xl shadow-xl' ><img src={logo} alt='logo' /></div>
      <div className=''>
        <ul className='flex list-none gap-[5.1rem] text-[#6B6B6B]'>
          <li className={`font-semibold text-[1.3rem] ${active === 0 ? 'text-blue' : ''}`} onClick={() => TabClick(0)}>About</li>
          <li className={`font-semibold text-[1.3rem] ${active === 0 ? 'text-blue' : ''}`} onClick={() => TabClick(0)}>Works</li>
          <li className={`font-semibold text-[1.3rem] ${active === 0 ? 'text-blue' : ''}`} onClick={() => TabClick(0)}>About</li>
        </ul>
      </div>
      <div className='bg-[#4C40F7] rounded-xl shadow-xl shadow-[#4C40F740] px-9 py-5 text-white'>Contact us</div>

    </div>
  )
}

export default Header