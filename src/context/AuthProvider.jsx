import { createContext, useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import signInUser from '../helpers/signInUser'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState('')
    const alert = useAlert()

    const navigate = useNavigate()

    // const location = useLocation()

    const handleLogin = useCallback(
        async (values) => {
            const token = await signInUser(values)
            if (token.errors) {
                const errorMessage = token.errors?.msg
                alert.error(errorMessage)
                return
            }
            setUserToken(token)
            navigate('/home')
        },
        [navigate, alert]
    )

    const memoizedValues = useMemo(() => ({ handleLogin, userToken }), [handleLogin, userToken])

    return <AuthContext.Provider value={memoizedValues}>{children}</AuthContext.Provider>
}

export default AuthProvider
