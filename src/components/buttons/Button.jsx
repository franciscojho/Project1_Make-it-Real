const Button = ({ className, style, type, name }) => {
    return (
        <button className={className} style={style} type={type ? 'button' : 'submit'}>
            {name}
        </button>
    )
}

export default Button
