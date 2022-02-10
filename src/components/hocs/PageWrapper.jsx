import styles from './Styles.module.css'

const PageWrapper = ({ children, className = '', style }) => {
    return (
        <div className={`${className} ${styles.pageLayout}`} style={style}>
            {children}
        </div>
    )
}

export default PageWrapper
