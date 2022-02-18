import { createContext, useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import * as api from '../helpers/api'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState('')
    const alert = useAlert()

    const navigate = useNavigate()

    const handleLogin = useCallback(
        async (values) => {
            const response = await api.signInUser(values)
            if (response.errors) {
                const errorMessage = response.errors?.msg
                alert.error(errorMessage)
                return
            }
            localStorage.setItem('token', response.token)
            setUserToken(response.token)
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
            setUserToken(response.token)
            navigate('/home')
        },
        [navigate, alert]
    )

    const memoizedValues = useMemo(
        () => ({ handleLogin, handleRegister, userToken }),
        [handleLogin, handleRegister, userToken]
    )

    return <AuthContext.Provider value={memoizedValues}>{children}</AuthContext.Provider>
}

export default AuthProvider
