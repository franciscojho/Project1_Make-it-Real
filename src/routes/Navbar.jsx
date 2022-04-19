import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeUser, faDashboard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import NavbarAvatar from './NavbarAvatar'
import { useAuthContext } from '../context/auth'
import { AUTH_LOGOUT_SUCCESS, REQUEST_AUTH_API } from '../reducer/auth'

const Navbar = () => {
    const { state, dispatch } = useAuthContext()
    const [currentTab, setCurrentTab] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        setCurrentTab('1')
    }, [])

    const handleOnClick = (toPath, tab) => {
        navigate(toPath)
        setCurrentTab(tab)
    }

    const handleSignOut = () => {
        dispatch({ type: REQUEST_AUTH_API })
        localStorage.removeItem('token')
        setTimeout(() => {
            dispatch({ type: AUTH_LOGOUT_SUCCESS, payload: { token: null, user: {} } })
            navigate('/login')
        }, 1000)
    }

    return (
        <nav className="flex border-b-2 md:flex-col justify-between row-span-1 col-span-full md:row-span-full md:col-span-2 p-6">
            <NavbarAvatar userName={state.user?.fullName} />
            <ul className="flex items-center md:items-start md:flex-col gap-2 h-full md:pt-8">
                <li className="w-full">
                    <button
                        className={`flex gap-2 items-center font-bold p-2 rounded text-left w-full ${
                            currentTab === '1'
                                ? 'bg-secondary text-tertiary'
                                : 'text-slate-400 hover:text-tertiary hover:bg-secondary'
                        }`}
                        onClick={(e) => handleOnClick('dashboard', e.target.dataset.tab)}
                        data-tab="1">
                        <FontAwesomeIcon icon={faDashboard} />
                        Dashboard
                    </button>
                </li>
                <li className="w-full">
                    <button
                        className={`flex gap-2 items-center font-bold p-2 rounded text-left w-full ${
                            currentTab === '2'
                                ? 'bg-secondary text-tertiary'
                                : 'text-slate-400 hover:text-tertiary hover:bg-secondary'
                        }`}
                        onClick={(e) => handleOnClick('account', e.target.dataset.tab)}
                        data-tab="2">
                        <FontAwesomeIcon icon={faHomeUser} />
                        Cuenta
                    </button>
                </li>
                <li className="md:mt-auto">
                    <button
                        className="flex gap-4 items-center font-bold p-2 rounded text-left text-slate-400 w-full hover:text-tertiary hover:bg-red-400"
                        onClick={handleSignOut}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span className="hidden md:block">Cerrar Sesión</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
