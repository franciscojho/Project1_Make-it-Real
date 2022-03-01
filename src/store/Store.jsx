import { AuthProvider } from '../context/auth'
import combineComponents from './combineComponents'

const StoreProvider = combineComponents(AuthProvider)

export default StoreProvider
