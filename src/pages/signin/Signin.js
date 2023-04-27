import React, { useState } from 'react'
import hide from '../../assets/hide-password.png'
import show from '../../assets//show-password.png'

function Signin() {


    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className='bg-blue-500 flex flex-col justify-center items-center py-20'>
            <div className='text-white'>

                <h1 className='text-4xl text-center font-bold text-white'>Signin</h1>


                <input className='py-5 my-10 px-4 rounded-md text-gray-500' type='mail' placeholder='Email' /><br />

                <div className='relative'>
                    <input className='py-5 px-4 rounded-md text-gray-500' type={showPassword ? 'text' : 'password'} placeholder='Password' />
                    <div onClick={handleShowPassword}>
                        {showPassword ?
                            <img className='w-12 h-10 absolute top-4 right-4' src={show} />
                            :
                            <img className='w-12 h-10 absolute top-4 right-4' src={hide} />
                        }
                    </div>
                </div>
                <p className='my-5 text-end'>Forgot password</p>
                <div className='bg-blue-700 flex py-5 px-4 rounded-md text-white cursor-pointer justify-center items-center'>
                    <h1 className='font-bold text-3xl'>Signin</h1>
                </div>
            </div>
            <div className='pt-5'>
                <p className='text-white text-base'>Don`t have an account? <span className='font-bold text-black'>Sign up</span></p>
            </div>
        </div>
    )
}

export default Signin