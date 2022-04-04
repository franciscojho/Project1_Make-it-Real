import { AdProvider } from '../context/ad'
import { AuthProvider } from '../context/auth'
import combineComponents from './combineComponents'

const StoreProvider = combineComponents(AdProvider, AuthProvider)

export default StoreProvider
