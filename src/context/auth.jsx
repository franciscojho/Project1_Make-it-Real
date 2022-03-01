import { createContext, useMemo, useCallback, useEffect, useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import * as api from '../api'
import { authReducer, AUTH_LOGIN, AUTH_REGISTER } from '../reducer/auth'

export const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { token: null, user: {} })

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const alert = useAlert()

    useEffect(() => {
        async function validateToken() {
            const { user } = await api.verifyToken(token)
            dispatch({ type: AUTH_LOGIN, payload: { token, user } })
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
            dispatch({ type: AUTH_LOGIN, payload: { token: response.token, user: response.user } })
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
            dispatch({
                type: AUTH_REGISTER,
                payload: { token: response.token, user: response.user },
            })
            navigate('/home')
        },
        [navigate, alert]
    )

    const memoizedValues = useMemo(
        () => ({ handleLogin, handleRegister, state, dispatch }),
        [handleLogin, handleRegister, state, dispatch]
    )

    return <AuthContext.Provider value={memoizedValues}>{children}</AuthContext.Provider>
}
