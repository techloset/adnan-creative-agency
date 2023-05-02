import React, { useState } from 'react'
import hide from '../../assets/hide-password.png'
import show from '../../assets//show-password.png'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slice/authSlice';

function Signin() {



    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const dispacth = useDispatch()
    const formdata = useSelector((state) => state.authslice)

    const handleSignin = () => {
        dispacth(loginUser({
            email,
            password
        }))
    }
    return (
        <div className='bg-blue-500 h-screen flex flex-col justify-center items-center py-20'>
            <div className='text-white'>

                <h1 className='text-4xl text-center font-bold text-white'>Signin</h1>
                <input className='py-5 my-10 px-4 rounded-md text-gray-500' type='Email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} /><br />
                <div className='relative'>
                    <input className='py-5 px-4 rounded-md text-gray-500' value={password} id="password" type={showPassword ? 'text' : 'password'} placeholder='Password' onChange={e => setPassword(e.target.value)} />
                    <div onClick={handleShowPassword}>
                        {showPassword ?
                            <img className='w-4 h-5 absolute top-6 right-4' src={show} />
                            :
                            <img className='w-4 h-5 absolute top-6 right-4' src={hide} />
                        }
                    </div>
                </div>
                <p className='my-5 text-end'>Forgot password</p>
                <div className='bg-blue-700 flex py-5 px-4 rounded-md text-white cursor-pointer justify-center items-center' onClick={handleSignin}>
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