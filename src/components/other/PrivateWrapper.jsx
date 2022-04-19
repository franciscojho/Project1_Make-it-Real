import { Navigate, Outlet } from 'react-router-dom'

const PrivateWrapper = ({ auth: { token } }) => {
    return token ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateWrapper
