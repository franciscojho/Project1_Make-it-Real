const AuthHeader = ({ children, loginTheme = true }) => {
    return (
        <section
            className={`flex flex-col text-tertiary md:justify-start md:min-w-96 md:${
                loginTheme ? 'bg-primary' : 'bg-secondary'
            }`}>
            <header className="flex flex-col pt-8 mr-auto ml-auto max-w-xl md:p-8">
                {children}
            </header>
        </section>
    )
}

export default AuthHeader
