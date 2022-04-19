import { createContext, useContext, useMemo, useState } from 'react'

export const ModalContext = createContext()

export const useModalContext = () => useContext(ModalContext)

export const ModalProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [action, setAction] = useState('')
    const [selected, setSelected] = useState(null)

    const memoizedValues = useMemo(
        () => ({ open, setOpen, selected, setSelected, action, setAction }),
        [open, setOpen, selected, setSelected, action, setAction]
    )

    return <ModalContext.Provider value={memoizedValues}>{children}</ModalContext.Provider>
}
