const Card = ({ className, style, children }) => {
    return (
        <div className={className} style={style}>
            {children}
        </div>
    )
}

export default Card
