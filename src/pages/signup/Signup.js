import React, { useState } from 'react'
import hide from '../../assets/hide-password.png'
import show from '../../assets//show-password.png'

function Signup() {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='bg-blue-500 flex flex-col text-white justify-center items-center py-20'>
            <div>
                <h1 className='text-4xl text-center font-bold mb-10'>Sign up</h1>
                <input className='py-5 px-4 rounded-md text-gray-500 my-10' type='text' placeholder='Name' /><br />
                <input className='py-5 px-4 rounded-md text-gray-500' type='text' placeholder='UserName' /><br />
                <div className=' relative my-10'>
                    <input className='py-5 px-4 rounded-md text-gray-500' type={showPassword ? 'text' : 'password'} placeholder='password' /><br />
                    <div onClick={handleShowPassword}>
                        {showPassword ?
                            <img className='w-12 h-10 absolute top-4 right-4' src={show} />
                            :
                            <img className='w-12 h-10 absolute top-4 right-4' src={hide} />
                        }
                    </div>
                </div>
                <div className=' relative'>
                    <input className='py-5 px-4 rounded-md text-gray-500' type={showPassword ? 'text' : 'password'} placeholder='Confirm password' /><br />
                    <div onClick={handleShowPassword}>
                        {showPassword ?
                            <img className='w-12 h-10 absolute top-4 right-4' src={show} />
                            :
                            <img className='w-12 h-10 absolute top-4 right-4' src={hide} />
                        }
                    </div>
                </div>
                <div className='bg-blue-700 flex py-5 px-4 rounded-md mt-10 text-white cursor-pointer justify-center items-center'>
                    <h1 className='font-bold text-3xl'>Sign up</h1>
                </div>
            </div>

        </div>
    )
}

export default Signup