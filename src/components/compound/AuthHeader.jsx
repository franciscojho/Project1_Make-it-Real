import mopImg from '../../assets/mop.png'
import bucketImg from '../../assets/bucket.png'

const AuthHeader = ({ children, loginTheme = true }) => {
    return (
        <section
            className={`flex flex-col text-tertiary md:justify-start md:min-w-96 ${
                loginTheme ? 'md:bg-primary' : 'md:bg-secondary'
            }`}>
            <header className="flex flex-col pt-8 mr-auto ml-auto max-w-xl md:p-8">
                {children}
            </header>
            <div className="hidden md:block">
                <img
                    className="object-scale-down w-96"
                    src={loginTheme ? bucketImg : mopImg}
                    alt="Objetos de limpieza"
                />
            </div>
        </section>
    )
}

export default AuthHeader
