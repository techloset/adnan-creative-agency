import React, { useState } from 'react'
import hide from '../../assets/hide-password.png'
import show from '../../assets//show-password.png'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/slice/authSlice';
import { useNavigate } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth'
// import { useDispatch, useSelector } from 'react-redux';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');


    const handlePassword = () => {
        setConfirmPassword(!confirmPassword);
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loginData = useSelector((state) => state.authslice)

    const handleSignup = () => {
        dispatch(registerUser({
            email,
            userName,
            password,
            confPassword,
        }))
        navigate('/signin')
    }

    return (
        <div className='bg-blue-500 h-screen flex flex-col text-white justify-center items-center py-20'>
            <div>
                <h1 className='text-4xl text-center font-bold mb-10'>Sign up</h1>
                <input className='py-5 px-4 rounded-md text-gray-500 my-10' type='text' placeholder='Enter UserName' onChange={(e) => setUserName(e.target.value)} /><br />
                <input className='py-5 px-4 rounded-md text-gray-500 ' type='text' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} /><br />

                <div className=' relative my-10'>
                    <input className='py-5 px-4 rounded-md text-gray-500' type={showPassword ? 'text' : 'password'} placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br />
                    <div onClick={handleShowPassword}>
                        {showPassword ?
                            <img className='w-4 h-5 absolute top-6 right-4' src={show} />
                            :
                            <img className='w-4 h-5 absolute top-6 right-4' src={hide} />
                        }
                    </div>
                </div>
                <div className=' relative'>
                    <input className='py-5 px-4 rounded-md text-gray-500' type={confirmPassword ? 'text' : 'password'} placeholder='Confirm password' onChange={(e) => setConfPassword(e.target.value)} /><br />
                    <div onClick={handlePassword}>
                        {confirmPassword ?
                            <img className='w-4 h-5 absolute top-6 right-4' src={show} />
                            :
                            <img className='w-4 h-5 absolute top-6 right-4' src={hide} />
                        }
                    </div>
                </div>
                <div className='bg-blue-700 flex py-5 px-4 rounded-md mt-10 text-white cursor-pointer justify-center items-center' onClick={handleSignup}>
                    <h1 className='font-bold text-3xl'>Sign up</h1>
                </div>
                <p className='text-center text-base mt-5'>Already have an account? <span className='font-bold text-black'>Login</span></p>
            </div>
        </div>
    )
}

export default Signup