import { Navigate, Routes, Route, Outlet } from 'react-router-dom'
import LoginPage from '../pages/client/LoginPage/LoginPage'
import HomePage from '../pages/client/HomePage/HomePage'
import useAuth from '../hooks/useAuth'
import styles from './Navigation.module.css'

const PrivateWrapper = ({ auth: { isAuth } }) => {
    return isAuth ? <Outlet /> : <Navigate to="/login" />
}

const Navigation = () => {
    const { isAuth } = useAuth()
    return (
        <div className={styles.layout}>
            <Routes>
                <Route element={<PrivateWrapper auth={{ isAuth }} />}>
                    <Route path="/home" element={<HomePage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<h1>REGISTER PAGE</h1>} />
            </Routes>
        </div>
    )
}

export default Navigation
