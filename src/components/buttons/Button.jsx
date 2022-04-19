const Button = ({ children, className, onClick, style, type, ...props }) => {
    return (
        <button className={className} style={style} onClick={onClick} type={type} {...props}>
            {children}
        </button>
    )
}

export default Button
