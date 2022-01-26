import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import styles from './Navigation.module.css'

const { layout } = styles

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className={layout}>
                <nav>
                    {/* <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                                to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                                to="/register">
                                Register
                            </NavLink>
                        </li>
                    </ul> */}
                </nav>

                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<h1>REGISTER PAGE</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigation
