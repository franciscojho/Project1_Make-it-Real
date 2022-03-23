import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeUser, faDashboard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import NavbarAvatar from './NavbarAvatar'
import { useAuthContext } from '../context/auth'
import { AUTH_LOGOUT } from '../reducer/auth'

const Navbar = () => {
    const { dispatch } = useAuthContext()
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
        localStorage.removeItem('token')
        dispatch({ type: AUTH_LOGOUT })
        navigate('/login')
    }

    return (
        <nav className="flex flex-col row-span-full col-span-2 p-6">
            <NavbarAvatar />
            <ul className="flex flex-col gap-2 h-full pt-8">
                <li className="">
                    <button
                        className={`flex gap-4 items-center font-bold p-2 rounded text-left w-full ${
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
                <li>
                    <button
                        className={`flex gap-4 items-center font-bold p-2 rounded text-left w-full ${
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
                <li className="mt-auto">
                    <button
                        className="flex gap-4 items-center font-bold p-2 rounded text-left text-slate-400 w-full hover:text-tertiary hover:bg-red-400"
                        onClick={handleSignOut}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        Cerrar Sesión
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
