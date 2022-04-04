import { createContext, useMemo, useCallback, useEffect, useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import * as api from '../api'
import {
    authReducer,
    AUTH_LOGIN_SUCCESS,
    AUTH_REGISTER_SUCCESS,
    AUTH_FAILURE,
    REQUEST_AUTH_API,
} from '../reducer/auth'

export const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('token')

    const [state, dispatch] = useReducer(authReducer, { token: null, user: {}, isLoading: false })
    const navigate = useNavigate()
    const alert = useAlert()

    useEffect(() => {
        async function validateToken() {
            try {
                if (token) {
                    dispatch({ type: REQUEST_AUTH_API })
                    const { user } = await api.verifyToken(token)
                    if (user) {
                        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: { token, user } })
                        return
                    }
                    throw new Error('La sesión ha expirado')
                }
            } catch (error) {
                dispatch({ type: AUTH_FAILURE })
                navigate('/login')
                alert.error(error.message)
            }
        }
        validateToken()
    }, [alert, navigate, token])

    const handleLogin = useCallback(
        async (values) => {
            try {
                dispatch({ type: REQUEST_AUTH_API })
                const response = await api.signInUser(values)
                if (response.token && response.user) {
                    localStorage.setItem('token', response.token)
                    dispatch({
                        type: AUTH_LOGIN_SUCCESS,
                        payload: { token: response.token, user: response.user },
                    })
                    navigate('/home')
                    return
                }
                throw new Error(response.errors.msg)
            } catch (error) {
                dispatch({ type: AUTH_FAILURE })
                alert.error(error.message)
            }
        },
        [alert, navigate]
    )

    const handleRegister = useCallback(
        async (values) => {
            try {
                dispatch({ type: REQUEST_AUTH_API })
                const response = await api.signUpUser(values)
                if (response.token && response.user) {
                    localStorage.setItem('token', response.token)
                    dispatch({
                        type: AUTH_REGISTER_SUCCESS,
                        payload: { token: response.token, user: response.user },
                    })
                    navigate('/home')
                    return
                }
                throw new Error(response.errors.msg)
            } catch (error) {
                dispatch({ type: AUTH_FAILURE })
                alert.error(error.message)
            }
        },
        [alert, navigate]
    )

    const memoizedValues = useMemo(
        () => ({ handleLogin, handleRegister, state, dispatch }),
        [handleLogin, handleRegister, state, dispatch]
    )

    return <AuthContext.Provider value={memoizedValues}>{children}</AuthContext.Provider>
}
