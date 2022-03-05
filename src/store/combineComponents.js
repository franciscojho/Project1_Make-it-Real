const combineComponents = (...components) => {
    return components.reverse().reduce(
        (AccumulatedComponents, CurrentComponent) => {
            return ({ children }) => {
                return (
                    <AccumulatedComponents>
                        <CurrentComponent>{children}</CurrentComponent>
                    </AccumulatedComponents>
                )
            }
        },
        ({ children }) => <>{children}</>
    )
}

export default combineComponents
