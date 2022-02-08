import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Navigation from './routes/Navigation'

library.add(fab)

const App = () => {
    return (
        <>
            <Navigation />
        </>
    )
}

export default App
