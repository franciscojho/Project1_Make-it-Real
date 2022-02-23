const Button = ({ children, className, style, type }) => {
    return (
        <button className={className} style={style} type={type}>
            {children}
        </button>
    )
}

export default Button
