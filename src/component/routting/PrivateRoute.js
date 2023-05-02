import { Navigate, Outlet, Outletss } from "react-router-dom";


const PrivateRoute = ({
    isUser,
    redirectPath = '/signin',
    children,
}) => {
    if (isUser) {
        return <Navigate to={redirectPath} replace />
    }
    return children ? children : <Outlet />
}
export default PrivateRoute
