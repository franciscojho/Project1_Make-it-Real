const Button = ({ children, className, onClick, style, type }) => {
    return (
        <button className={className} style={style} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button
