import { BrowserRouter } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import AlertTemplate from 'react-alert-template-basic'
import Navigation from './routes/Navigation'
import StoreProvider from './store/Store'

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
                <StoreProvider>
                    <Navigation />
                </StoreProvider>
            </BrowserRouter>
        </AlertProvider>
    )
}

export default App
