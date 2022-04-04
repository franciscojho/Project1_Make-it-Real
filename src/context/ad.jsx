import { createContext, useContext, useMemo, useReducer } from 'react'
import { adReducer } from '../reducer/ad'

export const initialState = {
    ads: [],
    isLoading: false,
}

export const AuthContext = createContext()

export const useAdContext = () => useContext(AuthContext)

export const AdProvider = ({ children }) => {
    const [adState, adDispatch] = useReducer(adReducer, initialState)

    const memoizedValues = useMemo(() => ({ adState, adDispatch }), [adState, adDispatch])

    return <AuthContext.Provider value={memoizedValues}>{children}</AuthContext.Provider>
}
