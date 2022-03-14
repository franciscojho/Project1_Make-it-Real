import { Navigate, Routes, Route, Outlet } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import Dashboard from '../pages/Dashboard/Dashboard'
import { useAuthContext } from '../context/auth'
import Navbar from './Navbar'
import { Layout } from '../components'

const PrivateWrapper = ({ auth: { token } }) => {
    return token ? <Outlet /> : <Navigate to="/login" />
}

const Navigation = () => {
    const { state } = useAuthContext()
    return (
        <Layout className={`${state.token && 'grid grid-rows-6 grid-cols-10'}`}>
            {state.token && <Navbar />}
            <Routes>
                {state.token && (
                    <Route element={<PrivateWrapper auth={{ token: state.token }} />}>
                        <Route path="/dashboard" state="testing" element={<Dashboard />} />
                        <Route path="/account" element={<h1>CUENTA</h1>} />
                    </Route>
                )}
                {!state.token && <Route path="/login" element={<LoginPage />} />}
                {!state.token && <Route path="/register" element={<RegisterPage />} />}
                <Route path="*" element={<Navigate to={state.token ? '/dashboard' : '/login'} />} />
            </Routes>
        </Layout>
    )
}

export default Navigation
