import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/client/LoginPage/LoginPage'
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className={styles.layout}>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<h1>REGISTER PAGE</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigation
