import { createContext } from 'react'

const containerContext = createContext()

const { Provider } = containerContext

const Container = ({ children, className, style, props }) => {
    return (
        <Provider value={{ ...props }}>
            <div className={className} style={style}>
                {children}
            </div>
        </Provider>
    )
}

export default Container
