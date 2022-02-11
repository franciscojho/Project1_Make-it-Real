import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider'
import Navigation from './routes/Navigation'

library.add(fab)

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navigation />
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
