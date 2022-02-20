import { createContext, useState, useMemo, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import * as api from '../helpers/api'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userState, setUserState] = useState({})
    const alert = useAlert()
    const token = localStorage.getItem('token')

    const navigate = useNavigate()

    useEffect(() => {
        async function validateToken() {
            const { user } = await api.verifyToken(token)
            setUserState({ user, token })
            return user
        }
        if (token) {
            validateToken()
        }
    }, [token])

    const handleLogin = useCallback(
        async (values) => {
            const response = await api.signInUser(values)
            if (response.errors) {
                const errorMessage = response.errors?.msg
                alert.error(errorMessage)
                return
            }
            localStorage.setItem('token', response.token)
            setUserState(response.token)
            navigate('/home')
        },
        [navigate, alert]
    )

    const handleRegister = useCallback(
        async (values) => {
            const response = await api.signUpUser(values)
            if (response.errors) {
                const errorMessage = response.errors?.msg
                alert.error(errorMessage)
                return
            }
            localStorage.setItem('token', response.token)
            setUserState(response.token)
            navigate('/home')
        },
        [navigate, alert]
    )

    const memoizedValues = useMemo(
        () => ({ handleLogin, handleRegister, userState }),
        [handleLogin, handleRegister, userState]
    )

    return <AuthContext.Provider value={memoizedValues}>{children}</AuthContext.Provider>
}

export default AuthProvider
