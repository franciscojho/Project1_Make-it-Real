import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/client/LoginPage/LoginPage'
import HomePage from '../pages/client/HomePage/HomePage'

import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className={styles.layout}>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<h1>REGISTER PAGE</h1>} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigation
