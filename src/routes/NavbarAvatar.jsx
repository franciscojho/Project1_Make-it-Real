import { useState, useEffect } from 'react'
import getFirstName from '../utils/get-first-name.uti'
import generateRandomColor from '../utils/generate-random-color.util'

const NavbarAvatar = ({ userName }) => {
    const [firstName, setFirstName] = useState('')
    const [hexColor, setHexColor] = useState('6ab04c')
    const [loaded, setIsLoaded] = useState(false)
    const url = `https://avatar.oxro.io/avatar.svg?name=${firstName}&background=${hexColor}&color=000`

    useEffect(() => {
        setHexColor(generateRandomColor())
        setFirstName(getFirstName(userName))
    }, [userName])

    return (
        <div className="flex flex-col gap-4 items-center">
            {!loaded && (
                <div className="flex space-x-4 animate-pulse max-w-full">
                    <div className="animate-pulse rounded-full bg-slate-200 dark:bg-slate-700 h-40 w-40" />
                </div>
            )}
            <img
                className="md:w-40 w-16 max-w-full self-center rounded-full"
                src={`${url}`}
                onLoad={() => setIsLoaded(true)}
                alt="Avatar"
                loading="lazy"
            />
            <p className="text-center hidden md:block">{userName}</p>
        </div>
    )
}
export default NavbarAvatar
