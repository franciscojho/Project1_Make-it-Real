import { Navigate, Routes, Route, Outlet } from 'react-router-dom'
import LoginPage from '../pages/client/LoginPage/LoginPage'
import HomePage from '../pages/client/HomePage/HomePage'
import RegisterPage from '../pages/client/RegisterPage/RegisterPage'
import DemoPage from '../pages/client/HomePage/DemoPage'
import { useAuthContext } from '../context/auth'

const PrivateWrapper = ({ auth: { token } }) => {
    return token ? <Outlet /> : <Navigate to="/login" />
}

const Navigation = () => {
    const { state } = useAuthContext()
    return (
        <Routes>
            {state.token && (
                <Route element={<PrivateWrapper auth={{ token: state.token }} />}>
                    <Route path="/home" element={<HomePage />} />
                </Route>
            )}
            {!state.token && <Route path="/login" element={<LoginPage />} />}
            {!state.token && <Route path="/register" element={<RegisterPage />} />}
            <Route path="*" element={<Navigate to={state.token ? '/home' : '/login'} />} />
        </Routes>
    )
}

export default Navigation
