import { Navigate, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import Dashboard from '../pages/Dashboard/Dashboard'
import Account from '../pages/Account/Account'
import Navbar from './Navbar'
import { ModalProvider } from '../context/modal'
import { useAuthContext } from '../context/auth'
import { Layout, LoadingOverlay, PrivateWrapper } from '../components'
import PublicPage from '../pages/PublicPage/PublicPage'

const Navigation = () => {
    const { state } = useAuthContext()
    return (
        <Layout className={`${state.token && 'grid grid-rows-6 grid-cols-10'}`}>
            {state.isLoading && <LoadingOverlay />}
            {state.token && <Navbar />}
            <Routes>
                {state.token && (
                    <Route element={<PrivateWrapper auth={{ token: state.token }} />}>
                        <Route
                            path="/dashboard"
                            element={
                                <ModalProvider>
                                    <Dashboard />
                                </ModalProvider>
                            }
                        />
                        <Route path="/account" element={<Account />} />
                    </Route>
                )}
                {!state.token && <Route path="/login" element={<LoginPage />} />}
                {!state.token && <Route path="/register" element={<RegisterPage />} />}
                <Route path="/public" element={<PublicPage />} />
                <Route path="*" element={<Navigate to={state.token ? '/dashboard' : '/login'} />} />
            </Routes>
        </Layout>
    )
}

export default Navigation
