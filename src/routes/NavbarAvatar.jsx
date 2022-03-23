import { useState, useEffect } from 'react'

const NavbarAvatar = () => {
    const [hexColor, setHexColor] = useState('6ab04c')
    const [loaded, setIsLoaded] = useState(false)
    const url = `https://avatar.oxro.io/avatar.svg?name=Francisco&background=${hexColor}&color=000`

    useEffect(() => {
        function generateRandomColor() {
            const letters = '0123456789ABCDEF'
            let color = ''
            for (let index = 0; index < 6; index++) {
                color += letters[Math.floor(Math.random() * 16)]
            }
            setHexColor(color)
        }
        generateRandomColor()
    }, [])

    return (
        <div className="flex flex-col gap-4 items-center">
            {!loaded && (
                <div className="flex space-x-4 animate-pulse max-w-full">
                    <div className="animate-pulse rounded-full bg-slate-200 dark:bg-slate-700 h-40 w-40" />
                </div>
            )}
            <img
                className="w-40 max-w-full self-center rounded-full"
                src={`${url}`}
                onLoad={() => setIsLoaded(true)}
                alt="Avatar"
                loading="lazy"
            />
            <p>User</p>
        </div>
    )
}
export default NavbarAvatar
