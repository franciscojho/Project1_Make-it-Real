import { Navigate, Routes, Route, Outlet } from 'react-router-dom'
import LoginPage from '../pages/client/LoginPage/LoginPage'
import HomePage from '../pages/client/HomePage/HomePage'
import useAuth from '../hooks/useAuth'
import styles from './Navigation.module.css'

const PrivateWrapper = ({ auth: { userToken } }) => {
    return userToken ? <Outlet /> : <Navigate to="/login" />
}

const Navigation = () => {
    const { userToken } = useAuth()
    return (
        <div className={styles.layout}>
            <Routes>
                {!userToken && <Route path="/login" element={<LoginPage />} />}
                {!userToken && <Route path="/register" element={<h1>REGISTER PAGE</h1>} />}
                {userToken && (
                    <Route element={<PrivateWrapper auth={{ userToken }} />}>
                        <Route path="/home" element={<HomePage />} />
                    </Route>
                )}
                <Route path="*" element={<Navigate to={userToken ? '/home' : '/login'} />} />
            </Routes>
        </div>
    )
}

export default Navigation
