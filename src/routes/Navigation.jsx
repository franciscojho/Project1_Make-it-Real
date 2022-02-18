import { Navigate, Routes, Route, Outlet } from 'react-router-dom'
import LoginPage from '../pages/client/LoginPage/LoginPage'
import HomePage from '../pages/client/HomePage/HomePage'
import useAuth from '../hooks/useAuth'
import styles from './Navigation.module.css'
import RegisterPage from '../pages/client/RegisterPage/RegisterPage'

const PrivateWrapper = ({ auth: { token } }) => {
    return token ? <Outlet /> : <Navigate to="/login" />
}

const Navigation = () => {
    const { userState } = useAuth()
    return (
        <div className={styles.layout}>
            <Routes>
                {!userState.token && <Route path="/login" element={<LoginPage />} />}
                {!userState.token && <Route path="/register" element={<RegisterPage />} />}
                {userState.token && (
                    <Route element={<PrivateWrapper auth={{ token: userState.token }} />}>
                        <Route path="/home" element={<HomePage />} />
                    </Route>
                )}
                <Route path="*" element={<Navigate to={userState.token ? '/home' : '/login'} />} />
            </Routes>
        </div>
    )
}

export default Navigation
