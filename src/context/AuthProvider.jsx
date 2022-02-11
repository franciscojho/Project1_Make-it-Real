import { createContext, useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)

    const navigate = useNavigate()

    // const location = useLocation()

    const handleLogin = useCallback(
        (values) => {
            console.log('login....', values)
            setIsAuth(true)
            navigate('/home')
        },
        [navigate]
    )

    const memoizedValues = useMemo(() => ({ handleLogin, isAuth }), [handleLogin, isAuth])

    return <AuthContext.Provider value={memoizedValues}>{children}</AuthContext.Provider>
}

export default AuthProvider
