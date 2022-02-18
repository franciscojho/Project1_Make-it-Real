const Button = ({ className, style, type, name }) => {
    return (
        <button className={className} style={style} type={type}>
            {name}
        </button>
    )
}

export default Button
