import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import AuthProvider from './context/AuthProvider'
import Navigation from './routes/Navigation'

library.add(fab)

const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 2000,
    offset: '30px',
    transition: transitions.SCALE,
}

const App = () => {
    return (
        <AlertProvider template={AlertTemplate} {...options}>
            <BrowserRouter>
                <AuthProvider>
                    <Navigation />
                </AuthProvider>
            </BrowserRouter>
        </AlertProvider>
    )
}

export default App
