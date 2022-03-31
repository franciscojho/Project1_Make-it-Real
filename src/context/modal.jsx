import { createContext, useContext, useMemo, useState } from 'react'

/* eslint-disable react-hooks/exhaustive-deps */

export const ModalContext = createContext()

export const useModalContext = () => useContext(ModalContext)

export const ModalProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState({})

    const handleModal = (item) => {
        if (item) {
            setSelected(item)
        }
        setOpen(!open)
    }

    const memoizedValues = useMemo(
        () => ({ open, handleModal, selected, setSelected }),
        [open, handleModal, selected, setSelected]
    )

    return <ModalContext.Provider value={memoizedValues}>{children}</ModalContext.Provider>
}
