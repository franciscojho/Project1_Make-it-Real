// import styles from './Styles.module.css'

const Layout = ({ children, className = '' }) => {
    return (
        <div className={className} style={{ height: '100%', width: '100%' }}>
            {children}
        </div>
    )
}

export default Layout
