const Layout = ({ children, className = '' }) => {
    return <div className={`w-full h-full ${className}`}>{children}</div>
}

export default Layout
