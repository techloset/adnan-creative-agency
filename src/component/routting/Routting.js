import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Signin from '../../pages/signin/Signin'
import Signup from '../../pages/signup/Signup'
import LandingPage from '../../pages/landingPange/LandingPage'
import PrivateRoute from './PrivateRoute'
import { useSelector } from 'react-redux'
import PublicRoute from './publicRoute'

function Routting() {
    const user = useSelector((state) => state.authslice)
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<PublicRoute isUser={user?.isUser}><Signup /></PublicRoute>} />
                    <Route path="/signin" element={<PublicRoute isUser={user?.isUser}><Signin /> </PublicRoute>} />
                    <Route path="/" element={<PrivateRoute isUser={user?.isUser}><LandingPage /> </PrivateRoute>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routting