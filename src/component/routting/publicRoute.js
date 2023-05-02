import { Outlet, Navigate } from "react-router-dom";


const PublicRoute = ({
    isUser,
    redirectpath = '/',
    children,
}) => {
    if (isUser) {
        return <Navigate to={redirectpath} replace />
    }
    return children ? children : <Outlet />
}


export default PublicRoute