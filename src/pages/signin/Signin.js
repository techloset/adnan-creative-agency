import React from 'react'

function Signin() {
    return (
        <div className='bg-blue-500'>
            <h1 className='text-4xl font-bold'>Signin</h1>
            <input className='py-5 px-4 rounded-md' type='mail' placeholder='Name' /><br />
            <input className='py-5 px-4 rounded-md' type='password' placeholder='Name' />
            <p className=''>Forgot password</p>

        </div>
    )
}

export default Signin